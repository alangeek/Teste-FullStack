<template>
  <div class="container mt-5">
    <form @submit.prevent="submitForm">
      <div class="field">
        <label class="label">Nome</label>
        <div class="control">
          <input
            v-model="post.name"
            class="input"
            type="text"
            placeholder="Maria"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input
            v-model="post.email"
            class="input"
            type="email"
            placeholder="maria@hotmail.com"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">Telefone</label>
        <div class="control">
          <input
            v-model="post.phone"
            class="input"
            type="text"
            placeholder="11 98494-3443"
            required
          />
        </div>
      </div>

      <div class="field">
        <label class="label">CPF</label>
        <div class="control">
          <input
            v-model="post.cpf"
            class="input"
            type="text"
            placeholder="123.456.495-10"
            required
          />
        </div>
      </div>

      <div class="field is-grouped">
        <div class="control">
          <button type="submit" class="button is-primary">Salvar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: ["post", "submitForm"],
};
</script>

<style></style>
