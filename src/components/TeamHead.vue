<template>
  <div class="w-full">
    <div class="h-[6rem] bg-lavender50 py-3 p-4 sm:px-8 flex flex-col items-start justify-center">
      <p class="text-neutrals-950 font-bold text-xl">{{ title }}</p>
      <p class="text-neutrals-950 text-xs">{{ desc }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    desc: String,

  },

};
</script>

<style scoped></style>
