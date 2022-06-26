<template>
  <div class="container" style="display: flex; flex-direction: column-reverse">
    <div v-for="customer in customers" :key="customer._id" class="card my-5">
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <h1 class="title is-4">Nome: {{ customer.name }}</h1>
          </div>
        </div>

        <div class="content">
          <h5>Email: {{ customer.email }}</h5>
          <h5>Telefone: {{ customer.phone }}</h5>
          <h5>CPF: {{ customer.cpf }}</h5>
        </div>
      </div>
      <div class="card">
        <footer class="card-footer">
          <button
            @click="editPost(customer._id)"
            class="card-footer-item button is-warning"
          >
            Editar
          </button>
          <button
            @click="removePost(customer._id)"
            class="card-footer-item button is-danger"
          >
            Deletar
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    const customers = ref([]);

    const API_URL = "https://apiqualicorp.herokuapp.com/customers";

    onMounted(() => {
      getCustomers();
    });

    async function getCustomers() {
      try {
        const response = await fetch(API_URL);
        const json = await response.json();
        customers.value = json;
      } catch (error) {
        console.log(error);
      }
    }

    async function removePost(_id) {
      const response = await fetch(`${API_URL}/${_id}`, {
        method: "DELETE",
      });
      getCustomers();
    }

    async function editPost(_id) {
      router.push({
        name: "Update",
        params: {
          id: _id,
        },
      });
    }
    return {
      customers,
      removePost,
      editPost,
    };
  },
};
</script>

<style></style>
