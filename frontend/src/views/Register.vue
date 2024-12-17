<template>
  <section
    class="container w-50 mx-auto d-flex justify-content-center align-items-center flex-column vh-100"
  >
    <h1 class="w-50 mx-auto">Register</h1>
    <form @submit.prevent="register" class="w-50 mx-auto">
      <div class="">
        <label for="registerName" class="col-sm-2 col-form-label">Name</label>
        <div>
          <input v-model="name" type="text" class="form-control" id="registerName" />
        </div>
      </div>
      <div class="">
        <label for="registerEmail" class="col-sm-2 col-form-label">Email</label>
        <div>
          <input v-model="email" type="email" class="form-control" id="registerEmail" />
        </div>
      </div>
      <div class="mb-3">
        <label for="registerPassword" class="col-sm-2 col-form-label">Password</label>
        <div>
          <input v-model="password" type="password" class="form-control" id="registerPassword" />
        </div>
      </div>
      <button type="submit" class="w-100 btn btn-primary align-itens-center">Sign in</button>
    </form>

    <div v-if="errorMessage" class="w-50 mx-auto alert alert-danger mt-3">
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
        console.error(error);
        this.name = '';
        this.email = '';
        this.password = '';
      }
    },
  },
});
</script>
