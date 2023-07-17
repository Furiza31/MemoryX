<template>
  <div class="fullscreen page text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">{{ $t('404') }}</div>

      <div class="text-h2" style="opacity: 0.4">{{ $t('pageNotFound') }}</div>

      <q-btn
        class="q-mt-xl"
        color="transparent"
        text-color="white"
        unelevated
        to="/"
        :label="$t('goToHome')"
        no-caps
        style="border: 1px solid white"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorNotFound',
});
</script>

<style lang="scss" scoped>
.page {
  background: linear-gradient(90deg, $primary, $secondary);
}
</style>
