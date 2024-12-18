<template>
  <section class="mx-auto my-auto rounded-3 border border-primary h-75 d-flex justify-content-center align-items-center flex-column bg-dark text-light p-4 width">
    <h2 v-if="state.user">Bem-vindo <span class="text-primary">{{ state.user.name }}</span></h2>
    <div v-if="state.user" class="text-end">
      <p>{{ state.user.email }}</p>
    </div>
    <div v-else>
      <p>Carregando...</p>
    </div>
    <button @click="logout" type="submit" class="w-50 btn btn-primary align-itens-center mt-4">Sair da conta</button>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

interface User {
  email: string;
  name: string;
}

export default defineComponent({
  setup() {
    const router = useRouter();
    const store = useStore();
    const state = reactive<{ user: User | null }>({
      user: null,
    });

    const logout = () => {
      localStorage.removeItem('jwtToken');
      router.push('/login');
    };

    onMounted(async () => {
      try {
        await store.dispatch('fetchProfile');
        state.user = store.getters.user;
      } catch {
        console.error('Falha ao carregar o perfil');
      }
    });

    return { state, logout };
  },
});
</script>
<style scoped>
.width {
  width: 450px;
}
</style>
