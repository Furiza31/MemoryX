<template>
  <q-card class="my-card">
    <q-img :src="image" class="previewImage">
      <div
        class="absolute-top-right text-subtitle2 rounded-borders"
        style="background-color: transparent"
      >
        <q-btn
          color="primary"
          :icon="saved ? 'bookmark' : 'bookmark_border'"
          round
          dense
          @click="
            saved
              ? $emit('delete-recipe', recipe)
              : $emit('save-recipe', recipe)
          "
        />
      </div>
    </q-img>

    <q-card-section>
      <q-btn
        fab
        color="primary"
        icon="list_alt"
        class="absolute"
        style="top: 0px; right: 12px; transform: translateY(-50%)"
        @click="$emit('show-recipe', recipe)"
      />
      <div class="text-h6 q-mt-sm">
        <div>{{ recipe.name }}</div>
        <div>
          <q-rating
            v-model="rating"
            icon="star"
            color="primary"
            readonly
            size="xs"
            icon-half="star_half"
          />
        </div>
      </div>
      <div class="text-subtitle2">
        <q-list>
          <q-item>
            <q-item-section avatar>
              <q-icon color="primary" name="group" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ $t('peoples') }}</q-item-label>
              <q-item-label caption>{{ recipe.people }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-item>
            <q-item-section avatar>
              <q-icon color="secondary" name="attach_money" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ $t('budget') }}</q-item-label>
              <q-item-label caption>{{ recipe.budget }}</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section avatar>
              <q-icon color="accent" name="schedule" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ $t('time') }}</q-item-label>
              <q-item-label caption
                >{{ $t('prepTime') }}: {{ recipe.prepTime }}min</q-item-label
              >
              <q-item-label caption
                >{{ $t('totalTime') }}: {{ recipe.totalTime }}min</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="text-caption text-grey row">
        <q-chip v-for="tag in recipe.tags" :key="tag" color="info" size="sm">
          {{ tag }}
        </q-chip>
      </div>
    </q-card-section>
  </q-card>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Recipe from 'src/models/Recipe';

export default defineComponent({
  name: 'RecipeItem',
  data() {
    return {
      rating: this.recipe.rate,
      image: this.recipe.images[0].replace(' ', ''),
    };
  },
  emits: ['show-recipe', 'save-recipe', 'delete-recipe'],
  props: {
    recipe: {
      type: Object as () => Recipe,
      required: true,
    },
    saved: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 300px

.previewImage
  width: 100%
  height: 300px
  object-fit: cover
</style>
