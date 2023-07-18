import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue')
      },
      {
        path: '/settings',
        component: () => import('pages/SettingsPage.vue')
      },
      {
        path: '/settings/languages',
        component: () => import('pages/LanguagesSettingsPage.vue')
      },
      {
        path: '/todo',
        component: () => import('pages/TodoPage.vue')
      },
      {
        path: '/fruitsAndVegetables',
        component: () => import('pages/FruitsAndVegetablesPage.vue')
      },
      {
        path: '/shoppingList',
        component: () => import('pages/ShoppingListPage.vue')
      },
      {
        path: '/savedRecipes',
        component: () => import('pages/SavedRecipesPage.vue')
      },
      {
        path: '/calendar',
        component: () => import('pages/CalendarPage.vue')
      }
    ]
  },
  {
    path: '/auth',
    component: () => import('layouts/AuthenticationLayout.vue'),
    children: [
      {
        path: 'login',
        component: () => import('pages/LoginPage.vue')
      },
      {
        path: 'register',
        component: () => import('pages/RegisterPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  }
];

export default routes;
