<template>
  <div class="my-5">
    <img :src="url" :alt="title" :title="title" />
  </div>
</template>

<script>
export default {
  props: {
    url: String,
    title: String,
  },
};
</script>

<style scoped></style>
