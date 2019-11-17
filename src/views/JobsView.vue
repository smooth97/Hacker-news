<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from "../api/index";

export default {
  data() {
    return {
      users: []
    };
  },
  created() {
    fetchJobsList()
      .then(response => (this.users = response.data))
      .catch(error => console.log(error));
  }
};
</script>

<style></style>
