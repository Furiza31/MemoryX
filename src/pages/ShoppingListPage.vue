<template>
  <q-page class="q-pa-sm">
    <q-list padding v-if="shoppingItems.length > 0">
      <div v-for="shoppingItem in shoppingItems" :key="shoppingItem.id">
        <ShoppingItem
          :shoppingItem="shoppingItem"
          @complete="updateCompleted(shoppingItem.id)"
          @delete="deleteShoppingItem(shoppingItem.id)"
        />
      </div>
    </q-list>
    <q-list padding v-else>
      <q-item-label class="text-h4 text-center">
        {{ $t('noShoppingList') }}
      </q-item-label>
    </q-list>
    <q-dialog v-model="addShoppingItemDialog" persistent>
      <q-card style="max-width: 350px; min-width: 300px">
        <q-card-section>
          <div class="text-h5 text-center">{{ $t('newShoppingItem') }}</div>
        </q-card-section>
        <q-form @submit="addShoppingItem()">
          <q-card-section>
            <q-input
              v-model="newShoppingItem"
              type="text"
              :label="$t('shoppingItemName')"
              :rules="[(val) => val.length > 0 || $t('fieldRequired')]"
            >
              <template v-slot:prepend>
                <q-icon name="edit" />
              </template>
            </q-input>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              :label="$t('cancel')"
              color="negative"
              flat
              @click="addShoppingItemDialog = false"
            />
            <q-btn :label="$t('add')" color="primary" flat type="submit" />
          </q-card-actions>
        </q-form>
      </q-card>
    </q-dialog>
    <q-dialog v-model="confirmDialog" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <span class="q-ml-sm">{{ $t('confirmDeleteShoppingList') }}</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('cancel')" color="negative" v-close-popup />
          <q-btn
            flat
            :label="$t('delete')"
            color="primary"
            @click="deleteShoppingList()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
    <div class="fixed-bottom q-mb-md q-mr-md text-right">
      <q-btn
        class="q-mt-md"
        color="primary"
        icon="add"
        round
        size="1.2em"
        @click="showAddShoppingItemDialog()"
      />
      <q-btn
        class="q-mt-md q-ml-sm"
        color="negative"
        icon="clear_all"
        round
        size="1.2em"
        @click="confirmDialog = true"
      />
    </div>
    <LoadingComponent :loading="loading" />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ShoppingItem from 'src/components/ShoppingItem.vue';
import { api } from 'src/boot/axios';
import Shopping from 'src/models/ShoppingItem';
import LoadingComponent from 'src/components/LoadingComponent.vue';

export default defineComponent({
  name: 'ShoppingListPage',
  components: {
    ShoppingItem,
    LoadingComponent,
  },
  data() {
    return {
      shoppingItems: [] as Shopping[],
      loading: false,
      addShoppingItemDialog: false,
      newShoppingItem: '',
      confirmDialog: false,
    };
  },
  mounted() {
    this.getShoppingItems();
  },
  methods: {
    showAddShoppingItemDialog() {
      this.newShoppingItem = '';
      this.addShoppingItemDialog = true;
    },
    getShoppingItems() {
      this.loading = true;
      api
        .get('/shoppingList')
        .then((response) => {
          this.shoppingItems = response.data.shoppingList;
          this.loading = false;
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
    updateCompleted(id: number) {
      const item = this.shoppingItems.find((item) => item.id === id);
      if (!item) return;
      item.completed = item.completed === 0 ? 1 : 0;
      api
        .put(`/shoppingList/${id}`, { completed: item.completed })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteShoppingItem(id: number) {
      api
        .delete(`/shoppingList/${id}`)
        .then(() => {
          this.shoppingItems = this.shoppingItems.filter(
            (item) => item.id !== id
          );
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteShoppingList() {
      this.confirmDialog = false;
      if (this.shoppingItems.length === 0) return;
      api
        .delete('/shoppingList')
        .then(() => {
          this.shoppingItems = [];
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addShoppingItem() {
      if (this.newShoppingItem.length === 0) return;
      api
        .post('/shoppingList', { title: this.newShoppingItem })
        .then((res) => {
          this.shoppingItems.push(res.data.shoppingItem);
          this.addShoppingItemDialog = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
