<template>
  <section
    class="mx-auto my-auto rounded-3 border border-primary h-50 d-flex justify-content-center align-items-center flex-column bg-dark text-light p-4 width"
  >
    <h2 class="w-100 text-center mb-2">Criar Conta</h2>
    <form @submit.prevent="register" class="w-100 mx-auto">
      <div>
        <label for="registerName" class="col-sm-2 col-form-label">Nome</label>
        <div>
          <input v-model="name" type="text" class="form-control" id="registerName" />
        </div>
      </div>
      <div>
        <label for="registerEmail" class="col-sm-2 col-form-label">Email</label>
        <div>
          <input v-model="email" type="email" class="form-control" id="registerEmail" />
        </div>
      </div>
      <div class="mb-3">
        <label for="registerPassword" class="col-sm-2 col-form-label">Senha</label>
        <div>
          <input v-model="password" type="password" class="form-control" id="registerPassword" />
        </div>
      </div>
      <button type="submit" class="w-100 btn btn-primary align-itens-center">Criar conta</button>
    </form>

    <div class="mt-2">
      <span class="mx-1">Já tem uma conta?</span>
      <router-link to="/login">Entrar</router-link>
    </div>

    <div v-if="errorMessage" class="text-center w-100 alert alert-danger mt-3 p-1">
      {{ errorMessage }}
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async register() {
      try {
        await axios.post('http://localhost:3000/api/register', {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        this.$router.push('/login');
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          this.errorMessage = error.response?.data?.message || 'Ocorreu um erro ao registrar.';
        } else {
          this.errorMessage = 'Erro de rede ou servidor.';
        }
        this.name = '';
        this.email = '';
        this.password = '';
      }
    },
  },
});
</script>

<style scoped>
.width {
  width: 450px;
}
</style>
