<template>
  <q-page class="q-pa-sm">
    <h1 class="text-h4">{{ $t('settings') }}</h1>
    <q-list bordered>
      <settings-item
        v-for="item in listItems"
        :key="item.title"
        v-bind="item"
      />
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SettingsItem from 'src/components/SettingsItem.vue';
import Settings from 'src/services/settings';
import ListItem from 'src/models/ListItem';

let listItems: ListItem[] = [];

Settings.getInstance()
  .getSettings()
  .forEach((setting) => {
    listItems.push({
      title: setting.title,
      description: setting.description,
      icon: setting.icon,
      link: setting.link,
    });
  });

export default defineComponent({
  name: 'SettingsPage',
  components: {
    SettingsItem,
  },
  data() {
    return {
      listItems: listItems,
    };
  },
});
</script>
