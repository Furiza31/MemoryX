<template>
  <q-card class="background-gradient text-white">
    <q-bar style="position: sticky; top: 0px; z-index: 999">
      <q-space />
      <q-btn dense flat icon="close" v-close-popup>
        <q-tooltip class="bg-white text-primary">{{ $t('close') }}</q-tooltip>
      </q-btn>
    </q-bar>

    <q-card-section class="row items-center justify-center">
      <div class="text-h4">{{ recipe.name }}</div>
    </q-card-section>

    <q-card-section class="row items-center justify-center">
      <q-carousel
        v-model="slide"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        infinite
        control-color="white"
        navigation
        padding
        arrows
        autoplay
        class="bg-primary text-white shadow-1 rounded-borders image-carousel"
      >
        <q-carousel-slide
          v-for="(image, index) in images"
          :key="index"
          :name="index"
          :img-src="image"
        />
      </q-carousel>
    </q-card-section>

    <q-card-section class="row items-center justify-center">
      <div class="controledWidth">
        <q-btn
          color="secondary"
          :label="$t('addShoppingList')"
          icon="add_shopping_cart"
          style="
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          "
          @click="addShoppingList()"
        />
        <q-toolbar class="bg-primary text-white shadow-2">
          <q-toolbar-title>{{ $t('ingredients') }}</q-toolbar-title>
          <div class="row items-center justify-center q-gutter-sm">
            <q-btn dense flat icon="remove" @click="people--" />
            <span>{{ $t('peoples') }}: {{ people }}</span>
            <q-btn dense flat icon="add" @click="people++" />
          </div>
        </q-toolbar>
        <q-list
          separator
          class="bg-white text-black shadow-2 rounded-borders"
          style="border-top-left-radius: 0px; border-top-right-radius: 0px"
        >
          <q-item v-for="(ingredient, index) in ingredients" :key="index">
            <q-item-section class="text-h6">
              <span>
                <span class="text-primary">{{
                  findNumber(ingredient)?.number === 0
                    ? ''
                    : findNumber(ingredient)?.number
                }}</span>
                {{ ingredientWithoutNumber(ingredient) }}
              </span>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </q-card-section>

    <q-card-section class="row items-center justify-center">
      <div class="controledWidth">
        <q-toolbar
          class="bg-primary text-white shadow-2 rounded-borders"
          style="
            border-bottom-left-radius: 0px;
            border-bottom-right-radius: 0px;
          "
        >
          <q-toolbar-title>
            <span>{{ $t('steps') }}</span>
          </q-toolbar-title>
          <div class="column items-end justify-end">
            <span>{{ $t('prepTime') }}: {{ recipe.prepTime }}min</span>
            <span>{{ $t('totalTime') }}: {{ recipe.totalTime }}min</span>
          </div>
        </q-toolbar>
        <q-stepper
          v-model="steps"
          vertical
          color="primary"
          animated
          class="controledWidth"
          style="border-top-left-radius: 0px; border-top-right-radius: 0px"
        >
          <q-step
            v-for="(step, index) in recipe.steps"
            :key="index"
            :name="index"
            :title="$t('step') + ' ' + (index + 1)"
            class="text-black"
            icon="arrow_downward"
            :done="steps > index"
            active-icon="arrow_downward"
          >
            {{ step }}

            <q-stepper-navigation>
              <q-btn
                v-if="index > 0"
                dense
                color="negative"
                label="Back"
                @click="steps--"
                class="q-mr-sm q-pa-sm"
                icon="arrow_back"
              />
              <q-btn
                v-if="index < recipe.steps.length - 1"
                dense
                color="primary"
                label="Next"
                @click="steps++"
                class="q-ml-sm q-pa-sm"
              >
                <q-icon name="arrow_forward" class="q-ml-sm" />
              </q-btn>
            </q-stepper-navigation>
          </q-step>
        </q-stepper>
      </div>
    </q-card-section>

    <q-card-actions class="row items-center justify-center">
      <q-btn
        color="primary"
        :label="$t('goToRecipe')"
        class="text-primary"
        target="blank"
        :href="recipe.url"
      />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Recipe from 'src/models/Recipe';
import { ref } from 'vue';
import { api } from 'src/boot/axios';

export default defineComponent({
  name: 'RecipeComponent',
  data() {
    return {
      slide: ref(0),
      steps: ref(0),
      images: [] as string[],
      ingredients: this.recipe.ingredients as string[],
      people: this.recipe.people,
    };
  },
  props: {
    recipe: {
      type: Object as () => Recipe,
      required: true,
    },
  },
  mounted() {
    this.images = this.recipe.images.map((image) => {
      return image.replace(' ', '');
    });
  },
  watch: {
    people() {
      this.ingredients = this.recipe.ingredients.map((ingredient) => {
        const { position, number } = this.findNumber(ingredient);
        if (position !== undefined) {
          let newNumber = (number * this.people) / this.recipe.people;
          if (!this.isInt(newNumber)) {
            newNumber = Number(newNumber.toFixed(2));
          }
          return ingredient.replace(number.toString(), newNumber.toString());
        }
        return ingredient;
      });
    },
  },
  computed: {
    ingredientWithoutNumber() {
      return (ingredient: string) => {
        const { position, number } = this.findNumber(ingredient);
        if (position !== undefined) {
          return ingredient.replace(number.toString(), '');
        }
        return ingredient;
      };
    },
  },
  methods: {
    async addShoppingList() {
      for (const ingredient of this.ingredients) {
        await api.post('/shoppingList', {
          title: ingredient,
        });
      }
      this.$q.notify({
        message: this.$t('addedToShoppingList'),
        color: 'warning',
        icon: 'shopping_cart',
        textColor: 'black',
      });
    },
    morePeople() {
      this.people++;
    },
    lessPeople() {
      if (this.people > 1) {
        this.people--;
      }
    },
    findNumber(chaine: string): {
      position: number | undefined;
      number: number;
    } {
      // Expression régulière pour trouver un ou plusieurs chiffres decimal ou non
      const regex = /\d+(\.\d+)?/;
      const correspondance = chaine.match(regex);
      if (correspondance) {
        const position = correspondance.index; // Position du nombre dans la chaîne
        const nombre = Number(correspondance[0]); // Convertir la correspondance en nombre

        return { position: position, number: nombre };
      }

      return { position: undefined, number: 0 };
    },
    isInt(n: number) {
      return n % 1 === 0;
    },
  },
});
</script>

<style lang="scss" scoped>
.image-carousel {
  width: 100%;
  min-width: 250px;
  max-width: 500px;
  height: 20vh;
  min-height: 250px;
  max-height: 500px;
  object-fit: cover;
}

.controledWidth {
  width: 100%;
  min-width: 250px;
  max-width: 500px;
}

.background-gradient {
  background: linear-gradient(90deg, $primary, $secondary);
}
</style>
