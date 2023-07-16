<template>
  <q-page class="row items-center justify-evenly">
    <h1>{{ $t('hello') }} {{ username }}</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeStore } from 'src/stores/me';

export default defineComponent({
  name: 'IndexPage',
  data() {
    return {
      username: useMeStore().username,
    };
  },
});
</script>
