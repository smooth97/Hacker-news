<template>
  <div>
    <div v-for="list in this.$store.state.news">{{ list.title }}</div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("FETCH_NEWS");
  }
};
</script>

<style></style>
