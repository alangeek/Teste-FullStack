<template>
  <PostForm :post="post" :submitForm="createCustomer" />
</template>

<script>
import PostForm from "../components/PostForm.vue";
import { reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    PostForm,
  },
  setup() {
    const API_URL = "https://apiqualicorp.herokuapp.com/customers";
    const router = useRouter();

    const post = reactive({
      name: "",
      email: "",
      phone: "",
      cpf: "",
    });

    async function createCustomer() {
      try {
        const response = await fetch(API_URL, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            name: post.name,
            email: post.email,
            phone: post.phone,
            cpf: post.cpf,
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
      createCustomer,
    };
  },
};
</script>

<style></style>
