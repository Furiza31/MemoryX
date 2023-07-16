<template>
  <q-item
    tag="label"
    v-ripple
    class="hightPriority"
    :class="{ completed: check }"
  >
    <q-item-section side>
      <q-checkbox v-model="check" :true-value="1" :false-value="0" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ shoppingItem.title }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="q-gutter-xs">
        <q-btn
          size="1em"
          flat
          dense
          round
          icon="delete"
          color="negative"
          @click.stop="deleteShoppingItem()"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Shopping from 'src/models/ShoppingItem';

export default defineComponent({
  name: 'ShoppingItem',
  data() {
    return {
      check: this.shoppingItem.completed,
    };
  },
  emits: ['complete', 'delete'],
  props: {
    shoppingItem: {
      type: Object as () => Shopping,
      required: true,
    },
  },
  watch: {
    check() {
      this.$emit('complete', this.shoppingItem.id);
    },
  },
  methods: {
    deleteShoppingItem() {
      this.$emit('delete', this.shoppingItem.id);
    },
  },
});
</script>

<style lang="scss" scoped>
.completed {
  text-decoration: line-through;
  color: grey;
}
</style>
