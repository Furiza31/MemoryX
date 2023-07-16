<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Authentification from './services/authentification';
import Settings from './services/settings';

export default defineComponent({
  name: 'App',
  mounted() {
    Authentification.getInstance().checkLogin();
    Settings.getInstance().loadAll();
  },
});
</script>
