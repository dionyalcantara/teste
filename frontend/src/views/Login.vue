<template>
  <section
    class="mx-auto my-auto rounded-3 border border-primary h-50 d-flex justify-content-center align-items-center flex-column bg-dark text-light p-4 width"
  >
    <h2 class="w-100 text-center mb-2">Entrar</h2>
    <form @submit.prevent="login" class="w-100 mx-auto">
      <div>
        <label for="registerEmail" class="col-sm-2 col-form-label">Email</label>
        <div>
          <input v-model="state.email" type="email" class="form-control" id="registerEmail" />
        </div>
      </div>
      <div class="mb-3">
        <label for="registerPassword" class="col-sm-2 col-form-label">Senha</label>
        <div>
          <input
            v-model="state.password"
            type="password"
            class="form-control"
            id="registerPassword"
          />
        </div>
      </div>
      <button type="submit" class="w-100 btn btn-primary align-itens-center">Entrar</button>
    </form>

    <div class="mt-2">
      <span class="mx-1">Não tem uma conta?</span>
      <router-link to="/register">Criar conta</router-link>
    </div>

    <div v-if="state.errorMessage" class="text-center w-100 alert alert-danger mt-3 p-1">
      {{ state.errorMessage }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    const state = reactive({
      email: '',
      password: '',
      errorMessage: '',
    });

    const login = async () => {
      try {
        await store.dispatch('login', {
          email: state.email,
          password: state.password,
        });
        console.log('Logged in');
        router.push('/profile');
      } catch (error) {
        state.errorMessage = 'Erro ao realizar o login, Verifique suas credenciais.';
        console.error(error);
      }
    };

    return {
      state,
      login,
    };
  },
});
</script>
<style scoped>
.width {
  width: 450px;
}
</style>
