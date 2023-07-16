<template>
  <q-item clickable :to="link">
    <q-item-section avatar>
      <q-icon :name="icon" color="primary" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="text-h6">{{ $t(title) }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon name="chevron_right" color="primary" />
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SettingsItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '#',
    },
  },
});
</script>
