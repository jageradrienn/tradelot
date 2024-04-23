<template>
  <div class="card">
    <Avatar :url="cardData.url" :name="cardData.title" weight="font-bold" />
    <p class="mt-5 mb-3 font-bold text-4xl">{{ cardData.amount }}</p>
    <div class="card-wrapper">
      <div class="flex sm:flex-col xl:flex-row items-center gap-2">
        <Svg :src="cardData.arrow" />
        <p>{{ cardData.percent }}</p>
        <Svg :src="cardData.graph" />
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "/src/components/Avatar.vue";
import Svg from "/src/components/icons/Svg.vue";
export default {
  components: {
    Avatar,
    Svg,
  },

  props: {
    cardData: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 2px 4px -2px rgba(18, 8, 63, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.04);

  @apply bg-white rounded-md p-5 xl:p-8;
}

.card-wrapper {
  @apply flex flex-col items-start justify-center md:flex-row md:justify-start md:items-center xl:gap-2;
}
</style>
