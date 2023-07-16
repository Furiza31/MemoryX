<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="page">
      <router-view v-slot="{ Component }">
        <transition appear enter-active-class="animated zoomIn">
          <component :is="Component" />
        </transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts"></script>

<style lang="scss" scoped>
.page {
  background: linear-gradient(90deg, $primary, $secondary);
}
</style>
