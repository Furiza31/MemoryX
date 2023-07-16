<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="max-width: 350px; min-width: 300px">
      <q-card-section>
        <div class="text-h4 text-center">{{ $t('login') }}</div>
      </q-card-section>

      <q-form @submit="login">
        <q-card-section class="column q-gutter-sm">
          <q-input
            v-model="email"
            :label="$t('email')"
            type="email"
            :rules="[(val) => !!val || $t('requiredEmail')]"
          >
            <template v-slot:prepend>
              <q-icon name="email" />
            </template>
          </q-input>
          <q-input
            v-model="password"
            :label="$t('password')"
            :type="isPwd ? 'password' : 'text'"
            :rules="[(val) => !!val || $t('requiredPassword')]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-toggle :label="$t('rememberMe')" v-model="rememberMe" />
        </q-card-section>

        <q-card-actions vertical>
          <q-btn
            color="primary"
            :label="$t('ok').toUpperCase()"
            :loading="loading"
            type="submit"
          />
          <p class="text-center q-pt-md">
            {{ $t('noAccount') }}
            <router-link to="/auth/register" class="link">
              {{ $t('register') }}
            </router-link>
          </p>
        </q-card-actions>
      </q-form>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { api } from 'src/boot/axios';
import { defineComponent } from 'vue';
import Authentification from 'src/services/authentification';

export default defineComponent({
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
      isPwd: true,
      loading: false,
      rememberMe: true,
    };
  },
  methods: {
    login() {
      this.loading = true;
      if (!this.checkFields()) {
        this.loading = false;
        return;
      }
      api
        .post('/auth/login', {
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: this.$t('loginSuccess'),
          });
          Authentification.getInstance().login(
            {
              id: res.data.id,
              username: res.data.username,
              email: this.email,
              token: res.data.token,
            },
            this.rememberMe
          );
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            message: this.$t('loginFailed'),
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    checkFields() {
      if (!this.email) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('requiredEmail'),
        });
        return false;
      }
      if (!this.password) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('requiredPassword'),
        });
      }
      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('invalidEmail'),
        });
        return false;
      }
      return true;
    },
  },
});
</script>
