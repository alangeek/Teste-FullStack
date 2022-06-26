<template>
  <post-form :post="post" :submitForm="updatePost"></post-form>
</template>

<script>
import PostForm from "../components/PostForm.vue";
import { useRouter, useRoute } from "vue-router";
import { ref, onMounted } from "vue";
export default {
  components: {
    PostForm,
  },
  setup() {
    const router = useRouter();
    const route = useRoute();

    const API_URL = "https://apiqualicorp.herokuapp.com/customers";

    const post = ref({
      name: "",
      email: "",
      phone: "",
      cpf: "",
    });

    onMounted(() => {
      getPost();
    });

    async function getPost() {
      const { id } = route.params;
      const response = await fetch(`${API_URL}/${id}`);
      const json = await response.json();
      post.value = json;
      console.log(post);
    }

    async function updatePost() {
      try {
        const { id } = route.params;
        const response = await fetch(`${API_URL}/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: post.value.name,
            email: post.value.email,
            phone: post.value.phone,
            cpf: post.value.cpf,
          }),
        });
        const json = await response.json();
        router.push({
          name: "Home",
        });
      } catch (error) {
        console.log(error);
      }
    }
    return {
      post,
      updatePost,
    };
  },
};
</script>

<style></style>
