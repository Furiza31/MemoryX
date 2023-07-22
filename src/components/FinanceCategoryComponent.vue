<template>
  <q-card class="category">
    <div class="absolute q-mt-sm q-mr-sm" style="right: 0px; z-index: 2">
      <q-btn
        color="negative"
        icon="delete"
        round
        flat
        @click="deleteSection()"
      />
    </div>
    <q-card-section class="text-center text-h6">{{
      section.name
    }}</q-card-section>
    <q-card-section class="row justify-center">
      <q-knob
        v-model="value"
        :min="0"
        :max="rest + section.value"
        show-value
        :step="1"
        size="100px"
        :thickness="0.22"
        :color="section.unexpected ? 'negative' : 'primary'"
        track-color="transparent"
        center-color="transparent"
        readonly
        class="cursor-pointer"
        @click="showUpdateValue()"
      >
        {{ value }}
        <q-icon name="euro_symbol" />
      </q-knob>
    </q-card-section>
  </q-card>
  <q-dialog
    v-model="showDialog"
    persistent
    transition-show="slide-up"
    transition-hide="slide-down"
    class="q-pt-lg"
  >
    <q-card>
      <q-card-section class="text-h6">
        <q-item>
          <q-item-section>
            <q-item-label class="text-h6">Update Value</q-item-label>
          </q-item-section>
          <q-item-section
            side
            :class="
              rest + section.value - value <= 0 ? 'text-negative' : 'text-black'
            "
            class="text-h6"
          >
            <q-item-label>{{ rest + section.value - value }}€</q-item-label>
          </q-item-section>
        </q-item>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="value"
          type="text"
          :min="0"
          :max="rest + section.value"
          :step="1"
          dense
          outlined
        >
          <template v-slot:append>
            <q-separator vertical />
            <q-btn
              flat
              dense
              icon="add"
              color="primary"
              @click="value++"
              class="q-mr-sm q-ml-sm"
            />
            <q-separator vertical />
            <q-btn
              flat
              dense
              icon="remove"
              color="negative"
              @click="value--"
              class="q-ml-sm"
            />
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn label="Cancel" color="negative" flat @click="cancel()" />
        <q-btn
          label="Update"
          color="primary"
          flat
          v-close-popup
          @click="setValue(value)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Finance from 'src/models/FinanceSection';

export default defineComponent({
  name: 'FinanceCategoryComponent',
  data() {
    return {
      showDialog: false,
      value: this.section.value,
    };
  },
  props: {
    section: {
      type: Object as () => Finance,
      required: true,
    },
    rest: {
      type: Number,
      required: true,
    },
  },
  emits: ['updateValue', 'delete'],
  watch: {
    section: {
      handler() {
        this.value = this.section.value;
      },
      deep: true,
    },
    value: {
      handler() {
        this.value = Number(this.value);
      },
    },
  },
  methods: {
    showUpdateValue() {
      this.showDialog = true;
    },
    cancel() {
      this.showDialog = false;
      this.value = this.section.value;
    },
    setValue(value: number) {
      this.showDialog = false;
      this.$emit('updateValue', Number(value));
    },
    deleteSection() {
      this.$emit('delete');
    },
  },
});
</script>

<style lang="scss" scoped>
.category {
  width: 45%;
  height: fit-content;
}

@media (max-width: 600px) {
  .category {
    width: 100%;
  }
}
</style>
