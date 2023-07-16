<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          :icon="leftDrawerOpen ? 'close' : 'menu'"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>{{ $t('appName') }}</q-toolbar-title>

        <div>
          <q-btn
            color="negative"
            icon="logout"
            aria-label="Logout"
            @click="logout"
          >
            <q-tooltip> {{ $t('logout') }} </q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> {{ $t('menu') }} </q-item-label>
        <NavLink v-for="link in navLinks" :key="link.title" v-bind="link" />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import NavLink from 'components/NavLink.vue';
import Authentification from 'src/services/authentification';

const linksList = [
  {
    title: 'home',
    caption: 'homeCaption',
    icon: 'home',
    link: '/',
  },
  {
    title: 'todo',
    caption: 'todoCaption',
    icon: 'list',
    link: '/todo',
  },
  {
    title: 'shoppingList',
    caption: 'shoppingListCaption',
    icon: 'shopping_cart',
    link: '/shoppingList',
  },
  {
    title: 'fruitsAndVegetables',
    caption: 'fruitsAndVegetablesCaption',
    icon: 'eco',
    link: '/fruitsAndVegetables',
  },
  {
    title: 'settings',
    caption: 'settingsCaption',
    icon: 'settings',
    link: '/settings',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    NavLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      navLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
  methods: {
    logout() {
      this.$q.notify({
        color: 'positive',
        message: this.$t('logoutSuccess'),
      });
      Authentification.getInstance().logout();
    },
  },
});
</script>
