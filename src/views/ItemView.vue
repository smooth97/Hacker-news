<template>
  <div>Item</div>
  <p>{{this.$store.state.item.title}}</p>
</template>

<script>
export default {
  computed: {
    askItems() {
      return this.$store.state.user;
    }
  },
  created() {
    const item = this.$route.params.id;
    console.log(this.$store.state.item);
    this.$store.dispatch("FETCH_USER", item);
  }
};
</script>

<style></style>
