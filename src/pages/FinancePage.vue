<template>
  <q-page class="q-pa-md column justify-between q-gutter-sm no-wrap">
    <div style="margin: 0px">
      <q-card>
        <q-card-section>
          <q-input
            v-model="bank"
            :label="$t('bank')"
            type="number"
            color="primary"
            :debounce="500"
          >
            <template v-slot:append>
              <q-icon name="euro_symbol" />
            </template>
          </q-input>
          <q-input
            v-model="salary"
            :label="$t('salary')"
            type="number"
            color="primary"
          >
            <template v-slot:append>
              <q-icon name="euro_symbol" />
            </template>
          </q-input>
          <div class="q-mt-lg">
            <label for="saving">
              {{ $t('saving') }}
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
              @change="putSaving()"
            />
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            color="primary"
            :label="$t('addSection')"
            @click="addSectionDialog()"
          />
        </q-card-actions>

        <q-separator spaced inset />

        <q-card-section>
          <q-item>
            <q-item-section>
              <q-item-label>{{ $t('savingsMadePerMonth') }}</q-item-label>
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
              <q-item-label>{{ $t('savingsMadePerYear') }}</q-item-label>
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
              <q-item-label>{{ $t('totalMoneyPerMonth') }}</q-item-label>
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
              <q-item-label>{{ $t('totalMoneyPerYear') }}</q-item-label>
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
              <q-item-label class="text-h6">
                {{ $t('moneyNotUsed') }}
              </q-item-label>
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
        @update-value="updateSection(section.id, $event)"
        @delete="deleteSection(section.id)"
      />
    </div>
    <q-dialog v-model="showAddSectionDialog" persistent>
      <q-card style="max-width: 350px; min-width: 300px">
        <q-card-section>
          <div class="text-h5 text-center">{{ $t('newSection') }}</div>
        </q-card-section>
        <q-form @submit="add()">
          <q-card-section>
            <q-input
              v-model="newSection.name"
              type="text"
              :label="$t('sectionName')"
              :rules="[(val) => val.length > 0 || $t('fieldRequired')]"
            >
              <template v-slot:prepend>
                <q-icon name="edit" />
              </template>
            </q-input>
            <q-toggle
              v-model="newSection.unexpected"
              :label="$t('unexpected')"
              color="primary"
              :true-value="1"
              :false-value="0"
            />
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              :label="$t('cancel')"
              color="negative"
              flat
              @click="showAddSectionDialog = false"
            />
            <q-btn :label="$t('add')" color="primary" flat type="submit" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    <loading-component :loading="loading" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FinanceCategoryComponent from 'src/components/FinanceCategoryComponent.vue';
import LoadingComponent from 'src/components/LoadingComponent.vue';
import Finance from 'src/models/FinanceSection';
import { api } from 'src/boot/axios';
import { debounce } from 'quasar';

export default defineComponent({
  name: 'FinancePage',
  components: {
    FinanceCategoryComponent,
    LoadingComponent,
  },
  data() {
    return {
      bank: 0,
      salary: 0,
      saving: 0,
      financeId: 0,
      loading: false,
      debounce: debounce,
      startDate: new Date(),
      sections: [] as Finance[],
      showAddSectionDialog: false,
      newSection: {
        id: 0,
        name: '',
        value: 0,
        unexpected: 0,
      } as Finance,
    };
  },
  watch: {
    bank() {
      if (!this.bank) this.bank = 0;
      if (this.loading) return;
      this.putBank();
    },
    salary() {
      if (!this.salary) this.salary = 0;
      if (this.loading) return;
      this.putSalary();
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
    updateSection(id: number, value: number) {
      const section = this.sections.find((section) => section.id === id);
      if (!section) return;
      api
        .put(`/finances/sections/${id}`, {
          value: value,
        })
        .then(() => {
          section.value = value;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteSection(id: number) {
      api
        .delete(`/finances/sections/${id}`)
        .then(() => {
          this.sections = this.sections.filter((section) => section.id !== id);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    add() {
      api
        .post('/finances/sections', {
          name: this.newSection.name,
          value: this.newSection.value,
          unexpected: this.newSection.unexpected,
          financeID: this.financeId,
        })
        .then((res) => {
          this.newSection.id = res.data.id;
          this.sections.push({ ...this.newSection });
          this.showAddSectionDialog = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    putBank() {
      api.put('/finances/bank', { bank: this.bank }).catch((err) => {
        console.log(err);
      });
    },
    putSalary() {
      api.put('/finances/salary', { salary: this.salary }).catch((err) => {
        console.log(err);
      });
    },
    putSaving() {
      api.put('/finances/saving', { saving: this.saving }).catch((err) => {
        console.log(err);
      });
    },
    addSectionDialog() {
      this.newSection.name = '';
      this.newSection.unexpected = 0;
      this.showAddSectionDialog = true;
    },
  },
  async mounted() {
    this.loading = true;
    let found = (await api.get('/finances/check')).data.found;
    if (!found) {
      await api
        .post('/finances', {
          bank: 0,
          salary: 0,
          saving: 0,
          startDate: new Date(),
        })
        .then((res) => {
          this.financeId = res.data.id;
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      await api
        .get('/finances')
        .then((res) => {
          this.bank = res.data.finances.bank;
          this.salary = res.data.finances.salary;
          this.saving = res.data.finances.saving;
          this.startDate = res.data.finances.start_date;
          this.financeId = res.data.finances.id;
          this.sections = res.data.financesSections;
        })
        .catch((err) => {
          console.log(err);
        });
    }
    this.loading = false;
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
