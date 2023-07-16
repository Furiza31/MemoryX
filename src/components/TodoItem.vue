<template>
  <q-item tag="label" v-ripple class="hightPriority">
    <q-item-section side>
      <q-checkbox v-model="check" :true-value="1" :false-value="0" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ todo.title }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="q-gutter-xs">
        <q-btn
          size="1em"
          flat
          dense
          round
          icon="edit"
          color="secondary"
          @click.stop="editTodo()"
        />
        <q-btn
          size="1em"
          flat
          dense
          round
          icon="delete"
          color="negative"
          @click.stop="deleteTodo()"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Todo from 'src/models/Todo';

export default defineComponent({
  name: 'TodoItem',
  data() {
    return {
      check: this.todo.completed,
    };
  },
  emits: ['complete', 'delete', 'edit'],
  props: {
    todo: {
      type: Object as () => Todo,
      required: true,
    },
  },
  watch: {
    check() {
      this.$emit('complete', this.todo.id);
    },
  },
  methods: {
    deleteTodo() {
      this.$emit('delete', this.todo.id);
    },
    editTodo() {
      this.$emit('edit', this.todo.id);
    },
  },
});
</script>
