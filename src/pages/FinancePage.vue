<template>
  <q-page class="q-pa-md column justify-between q-gutter-sm no-wrap">
    <div style="margin: 0px">
      <q-card>
        <q-card-section>
          <q-input v-model="bank" label="Banque" type="number" color="primary">
            <template v-slot:append>
              <q-icon name="euro_symbol" />
            </template>
          </q-input>
          <q-input
            v-model="salary"
            label="Salaire"
            type="number"
            color="primary"
          >
            <template v-slot:append>
              <q-icon name="euro_symbol" />
            </template>
          </q-input>
          <div class="q-mt-lg">
            <label for="saving">
              Économie
              <q-icon name="euro_symbol" />
            </label>
            <q-slider
              id="saving"
              v-model="saving"
              color="primary"
              :min="0"
              :max="salary - sectionsTotal"
              :step="1"
              label
              :label-value="saving + '€'"
              label-always
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn color="primary" label="Ajouter une section" @click="add()" />
          <q-btn
            color="negative"
            label="Dépense imprévue"
            @click="addUnexpected()"
          />
        </q-card-actions>

        <q-separator spaced inset />

        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>Économie réalisé par mois</q-item-label>
            </q-item-section>
            <q-item-section
              side
              :class="savingByMonth < 0 ? 'text-negative' : 'text-positive'"
              class="text-h6"
            >
              <q-item-label>{{ savingByMonth }}€</q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Économie réalisé par an</q-item-label>
            </q-item-section>
            <q-item-section
              side
              class="text-h6"
              :class="
                savingByMonth * 12 < 0 ? 'text-negative' : 'text-positive'
              "
            >
              <q-item-label>{{ savingByMonth * 12 }}€</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>

        <q-separator spaced inset />

        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>Argent total par mois</q-item-label>
            </q-item-section>
            <q-item-section
              side
              class="text-h6"
              :class="
                bank + savingByMonth < 0 ? 'text-negative' : 'text-positive'
              "
            >
              <q-item-label
                >{{ Number(bank) + Number(savingByMonth) }}€</q-item-label
              >
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label>Argent total par an</q-item-label>
            </q-item-section>
            <q-item-section
              side
              class="text-h6"
              :class="
                bank + savingByMonth * 12 < 0
                  ? 'text-negative'
                  : 'text-positive'
              "
            >
              <q-item-label
                >{{ Number(bank) + Number(savingByMonth) * 12 }}€</q-item-label
              >
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
    <div class="rest">
      <q-card class="bg-secondary text-white">
        <q-card-section style="padding: 0px">
          <q-item>
            <q-item-section class="q-ml-md">
              <q-item-label class="text-h6">Argent non utilisé</q-item-label>
            </q-item-section>
            <q-item-section
              side
              :class="rest <= 0 ? 'text-negative' : 'text-white'"
              class="text-h6 q-mr-md"
            >
              <q-item-label>{{ rest }}€</q-item-label>
            </q-item-section>
          </q-item>
        </q-card-section>
      </q-card>
    </div>
    <div class="row wrap justify-center q-gutter-md q-mt-md">
      <finance-category-component
        v-for="section in sections"
        :key="section.name"
        :section="section"
        :rest="rest"
        @update-value="section.value = $event"
        @delete="deleteSection(section.id)"
      />
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FinanceCategoryComponent from 'src/components/FinanceCategoryComponent.vue';
import Finance from 'src/models/FinanceSection';

export default defineComponent({
  name: 'FinancePage',
  components: {
    FinanceCategoryComponent,
  },
  data() {
    return {
      bank: 0,
      salary: 0,
      saving: 0,
      sections: [] as Finance[],
    };
  },
  watch: {
    bank() {
      if (!this.bank) this.bank = 0;
    },
    salary() {
      if (!this.salary) this.salary = 0;
    },
  },
  computed: {
    sectionsTotal(): number {
      let total = 0;
      this.sections.forEach((section) => {
        total += Number(section.value);
      });
      return total;
    },
    salaryWithoutSaving(): number {
      return this.salary - this.saving;
    },
    savingByMonth(): number {
      return this.salaryWithoutSaving - this.sectionsTotal + this.saving;
    },
    rest(): number {
      return this.salaryWithoutSaving - this.sectionsTotal;
    },
  },
  methods: {
    deleteSection(id: number) {
      this.sections = this.sections.filter((section) => section.id !== id);
    },
    add() {
      // TODO: add section
    },
    addUnexpected() {
      // TODO: add unexpected section
    },
  },
});
</script>

<style lang="scss" scoped>
.rest {
  position: sticky;
  top: 60px;
  z-index: 3;
  margin: 0px;
  margin-top: 15px;
}
</style>
