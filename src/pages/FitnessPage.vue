<template>
  <q-page class="q-pa-sm">
    <q-img src="images/Dos/Rowing_barre.jpg" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FitnessData } from 'src/models/Fitness';

export default defineComponent({
  name: 'FitnessPage',
  data() {
    return {
      data: FitnessData,
    };
  },
});
</script>
