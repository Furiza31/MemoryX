<template>
  <q-page class="q-pa-sm">
    <!-- search bar with button -->
    <div>
      <q-form @submit="searchRecipes">
        <q-input v-model="search" dense :label="$t('searchRecipe')">
          <template v-slot:prepend>
            <span
              v-for="fruitAndVegetable in fruitsAndVegetablesInSearch"
              :key="fruitAndVegetable"
              @click="
                fruitsAndVegetablesInSearch.splice(
                  fruitsAndVegetablesInSearch.indexOf(fruitAndVegetable),
                  1
                )
              "
            >
              <q-chip color="primary" text-color="white" class="cursor-pointer">
                <template v-slot:default>
                  <span>{{
                    fruitsAndVegetablesName(
                      fruitsAndVegetablesOfTheMonth.find(
                        (fruitAndVegetableOfTheMonth) =>
                          fruitAndVegetableOfTheMonth.id === fruitAndVegetable
                      ) as FruitAndVegetable
                    )
                  }}</span>
                  <span>{{
                    (
                      fruitsAndVegetablesOfTheMonth.find(
                        (fruitAndVegetableOfTheMonth) =>
                          fruitAndVegetableOfTheMonth.id === fruitAndVegetable
                      ) as FruitAndVegetable
                    ).emoji
                  }}</span>
                </template>
              </q-chip>
            </span>
          </template>
          <template v-slot:append>
            <q-btn
              dense
              color="primary"
              icon="search"
              :disable="
                search.length === 0 && fruitsAndVegetablesInSearch.length === 0
              "
              @click="searchRecipes"
            />
          </template>
        </q-input>
      </q-form>
    </div>
    <q-expansion-item
      :label="$t('fruitsAndVegetablesOfTheMonth')"
      icon="food_bank"
      class="full-width"
    >
      <div class="row q-mt-md justify-center">
        <div
          v-for="fruitAndVegetable in fruitsAndVegetablesOfTheMonth"
          :key="fruitsAndVegetablesName(fruitAndVegetable)"
          @click="fruitsAndVegetablesInSearch.push(fruitAndVegetable.id)"
        >
          <q-chip
            color="primary"
            text-color="white"
            class="cursor-pointer"
            v-if="!fruitsAndVegetablesInSearch.includes(fruitAndVegetable.id)"
          >
            <template v-slot:default>
              <span>{{ fruitsAndVegetablesName(fruitAndVegetable) }}</span>
              <span>{{ fruitAndVegetable.emoji }}</span>
            </template>
          </q-chip>
        </div>
      </div>
    </q-expansion-item>
    <div class="row justify-center q-mt-sm q-gutter-lg">
      <dish-item
        v-for="recipe in recipes"
        :key="recipe.name"
        :recipe="recipe"
        @show-recipe="showRecipe"
        @save-recipe="saveRecipe"
        @delete-recipe="deleteRecipe"
        :saved="recipe.saved"
      />
      <div v-if="recipes.length === 0" class="text-h6">
        {{ $t('noRecipeFound') }}
      </div>
    </div>
    <q-dialog
      v-model="showRecipeDialog"
      persistent
      :maximized="true"
      transition-show="slide-up"
      transition-hide="slide-down"
    >
      <recipe-component :recipe="recipeToShow" />
    </q-dialog>
    <loading-component :loading="loading" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { api } from 'src/boot/axios';
import { i18n } from 'src/boot/i18n';
import DishItem from 'src/components/DishItem.vue';
import LoadingComponent from 'src/components/LoadingComponent.vue';
import RecipeComponent from 'src/components/RecipeComponent.vue';
import FruitAndVegetable from 'src/models/FruitAndVegetable';
import Recipe from 'src/models/Recipe';

export default defineComponent({
  name: 'FruitsAndVegetablesPage',
  components: {
    DishItem,
    LoadingComponent,
    RecipeComponent,
  },
  data() {
    return {
      search: '',
      fruitsAndVegetablesOfTheMonth: [] as FruitAndVegetable[],
      localLanguage: i18n.global.locale,
      fruitsAndVegetablesInSearch: [] as number[],
      loading: false,
      recipes: [] as Recipe[],
      recipeToShow: {} as Recipe,
      showRecipeDialog: false,
      savedRecipes: [] as { id: number; url: string }[],
    };
  },
  async mounted() {
    await this.getFruitsAndVegetables();
    // take a random fruit or vegetable
    this.fruitsAndVegetablesInSearch.push(
      this.fruitsAndVegetablesOfTheMonth[
        Math.floor(Math.random() * this.fruitsAndVegetablesOfTheMonth.length)
      ].id
    );
    await this.searchRecipes();
    await this.getSavedRecipes();
    this.isRecipesSaved();
  },
  methods: {
    deleteRecipe(recipe: Recipe) {
      api.delete(`/recipes/${recipe.id}`).then(() => {
        this.$q.notify({
          message: this.$t('recipeDeleted'),
          color: 'primary',
        });
        recipe.saved = false;
      });
    },
    isRecipesSaved() {
      this.recipes.forEach((recipe) => {
        recipe.saved = this.savedRecipes.some(
          (savedRecipe) => savedRecipe.url === recipe.url
        );
        if (recipe.saved) {
          recipe.id = this.savedRecipes.find(
            (savedRecipe) => savedRecipe.url === recipe.url
          )?.id as number;
        }
      });
    },
    async getSavedRecipes() {
      return new Promise((resolve, reject) => {
        this.loading = true;
        api
          .get('/recipes/urls')
          .then((response) => {
            this.savedRecipes = response.data.urls as {
              id: number;
              url: string;
            }[];
            this.loading = false;
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            reject(error);
          });
      });
    },
    saveRecipe(recipe: Recipe) {
      api
        .post('/recipes', recipe)
        .then((response) => {
          this.$q.notify({
            message: this.$t('recipeSaved'),
            color: 'primary',
          });
          recipe.id = response.data.id;
          recipe.saved = true;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showRecipe(recipe: Recipe) {
      this.recipeToShow = recipe;
      this.showRecipeDialog = true;
    },
    async getFruitsAndVegetables() {
      return new Promise((resolve, reject) => {
        this.loading = true;
        let currentMonth = new Date().getMonth();
        api
          .get(`/fruitsAndVegetables/${currentMonth}`)
          .then((response) => {
            this.fruitsAndVegetablesOfTheMonth = response.data
              .fruitsAndVegetables as FruitAndVegetable[];
            this.loading = false;
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            reject(error);
          });
      });
    },
    async searchRecipes() {
      return new Promise((resolve, reject) => {
        this.loading = true;
        api
          .get(`/marmiton/${this.search}`, {
            params: {
              fruitsAndVegetables: this.fruitsAndVegetablesInSearch,
            },
          })
          .then((response) => {
            this.loading = false;
            this.recipes = response.data.recipes;
            this.isRecipesSaved();
            resolve(response);
          })
          .catch((error) => {
            console.log(error);
            this.loading = false;
            reject(error);
          });
      });
    },
  },
  watch: {
    fruitsAndVegetablesInSearch: {
      handler: function (newValue) {
        if (newValue.length > 1) {
          newValue.shift();
        }
      },
      deep: true,
    },
  },
  computed: {
    fruitsAndVegetablesName() {
      return (fruitAndVegetable: FruitAndVegetable) => {
        return fruitAndVegetable[this.localLanguage];
      };
    },
  },
});
</script>
