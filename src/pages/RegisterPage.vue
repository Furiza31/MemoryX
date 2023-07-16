<template>
  <q-page class="row items-center justify-evenly">
    <q-card style="max-width: 350px; min-width: 300px">
      <q-card-section>
        <div class="text-h4 text-center">{{ $t('register') }}</div>
      </q-card-section>
      <q-form @submit="register">
        <q-card-section class="column q-gutter-sm">
          <q-input
            v-model="username"
            :label="$t('username')"
            type="text"
            :rules="[(val) => !!val || $t('requiredUsername')]"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
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
          <q-input
            v-model="confirmPassword"
            :label="$t('confirmPassword')"
            :type="isConfirmPwd ? 'password' : 'text'"
            :rules="[(val) => !!val || $t('requiredConfirmPassword')]"
          >
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
            <template v-slot:append>
              <q-icon
                :name="isConfirmPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isConfirmPwd = !isConfirmPwd"
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
            {{ $t('alreadyHaveAnAccount') }}
            <router-link to="/auth/login" class="link">{{
              $t('login')
            }}</router-link>
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
  name: 'RegisterPage',
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      isPwd: true,
      isConfirmPwd: true,
      rememberMe: true,
      loading: false,
    };
  },
  methods: {
    register() {
      this.loading = true;
      if (!this.checkFields()) {
        this.loading = false;
        return;
      }
      api
        .post('/auth/register', {
          username: this.username,
          email: this.email,
          password: this.password,
        })
        .then((res) => {
          this.$q.notify({
            color: 'positive',
            message: this.$t('registerSuccess'),
          });
          Authentification.getInstance().login(
            {
              id: res.data.id,
              username: this.username,
              email: this.email,
              token: res.data.token,
            },
            this.rememberMe
          );
        })
        .catch(() => {
          this.$q.notify({
            color: 'negative',
            message: this.$t('registerFailed'),
          });
        })
        .finally(() => {
          this.loading = false;
        });
    },
    checkFields(): boolean {
      if (!this.username) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('requiredUsername'),
        });
        return false;
      }
      if (!this.email) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('emailRequired'),
        });
        return false;
      }
      if (!this.password) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('passwordRequired'),
        });
        return false;
      }
      if (!this.confirmPassword) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('requiredConfirmPassword'),
        });
        return false;
      }
      if (!this.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('invalidEmail'),
        });
        return false;
      }
      if (this.password !== this.confirmPassword) {
        this.$q.notify({
          color: 'negative',
          message: this.$t('passwordsNotMatch'),
        });
        return false;
      }
      return true;
    },
  },
});
</script>
