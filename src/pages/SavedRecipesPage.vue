<template>
  <q-page class="q-pa-sm">
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
        {{ $t('noRecipeSaved') }}
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
import DishItem from 'src/components/DishItem.vue';
import LoadingComponent from 'src/components/LoadingComponent.vue';
import RecipeComponent from 'src/components/RecipeComponent.vue';
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
      loading: false,
      recipes: [] as Recipe[],
      recipeToShow: {} as Recipe,
      showRecipeDialog: false,
    };
  },
  async mounted() {
    await this.getSavedRecipes();
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
    async getSavedRecipes() {
      return new Promise((resolve, reject) => {
        this.loading = true;
        api
          .get('/recipes')
          .then((response) => {
            this.recipes = response.data.recipes as Recipe[];
            this.loading = false;
            this.recipes.forEach((recipe) => {
              recipe.saved = true;
            });
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
  },
});
</script>
