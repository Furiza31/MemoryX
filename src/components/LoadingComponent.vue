<template>
  <q-dialog persistent v-model="show">
    <q-card>
      <q-card-section>
        <q-spinner-grid color="primary" size="100px" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoadingComponent',
  data() {
    return {
      show: false,
    };
  },
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    loading() {
      this.show = this.loading;
    },
  },
});
</script>
