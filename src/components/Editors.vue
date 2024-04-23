<template>
  <div class="flex flex-1 justify-end items-center">
    <button v-if="cardname" type="button" class="text-indigo-electric text-lg pr-8">
      Remove
    </button>
    <button v-if="cardname" type="button" class="pr-8">
      <Pencil stroke="#4F1FFF" />
    </button>
  </div>
</template>

<script>
import Pencil from "/src/components/icons/Pencil.vue";
export default {
  components: {
    Pencil,
  },

  props: {
    cardname: String,
  },
};
</script>

<style scoped></style>
