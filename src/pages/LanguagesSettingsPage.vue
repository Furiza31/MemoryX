<template>
  <q-page class="q-pa-sm">
    <q-breadcrumbs class="q-pb-md">
      <q-breadcrumbs-el
        :label="$t('settings')"
        icon="settings"
        to="/settings"
      />
      <q-breadcrumbs-el :label="$t('languages')" icon="translate" />
    </q-breadcrumbs>
    <!-- v-for languages keys -->
    <q-list bordered>
      <div v-for="(value, key) in languages" :key="key">
        <q-item
          tag="label"
          clickable
          @click.prevent="
            changeLanguage(key as keyof typeof availableLanguages)
          "
        >
          <q-item-section>
            <q-item-label> {{ key }} </q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-toggle
              color="blue"
              v-model="languages[key]"
              val="battery"
              @click.stop="
                changeLanguage(key as keyof typeof availableLanguages)
              "
            />
          </q-item-section>
        </q-item>
        <q-separator v-if="key !== Object.keys(languages).slice(-1)[0]" />
      </div>
    </q-list>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import availableLanguages from 'src/i18n';
import { i18n } from 'src/boot/i18n';
import Settings from 'src/services/settings';

export default defineComponent({
  name: 'LanguagesSettingsPage',
  data() {
    return {
      languages: Object.keys(availableLanguages).reduce((acc, cur) => {
        acc[cur] = false;
        return acc;
      }, {} as Record<string, boolean>),
      availableLanguages,
    };
  },
  mounted() {
    this.languages[i18n.global.locale] = true;
  },
  methods: {
    changeLanguage(key: keyof typeof availableLanguages) {
      Settings.getInstance().get('language')?.set(key);
      this.languages[key] = true;
    },
  },
  watch: {
    languages: {
      handler: function (val) {
        Object.keys(val).forEach((key) => {
          if (key !== i18n.global.locale) {
            val[key] = false;
          }
        });
      },
      deep: true,
    },
  },
});
</script>
