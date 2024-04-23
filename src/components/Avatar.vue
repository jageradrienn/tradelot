<template>
  <div class="flex items-center gap-5" :class="[{ 'remove-items-center': direction === 'flex-col' }, direction]">
    <div class="relative">
      <Svg :src="url ? url : '/src/components/icons/Profile.vue'" :style="{ width: picSize, height: picSize }"
        class="max-w-[initial]" />
      <Svg v-if="buyer" :src="buyer" alt="icon" class="w-[24px] h-[24px] absolute top-2 -right-3 " />
    </div>
    <div :class="{ 'flex': email, 'flex-col': email, 'justify-center': email }">
      <p v-if="name" :class="[fontSize, color, weight, padding]" class="font-bold">
        {{ name }}
      </p>
      <p v-if="email" :class="[efontSize, ecolor, eweight, padding]">{{ email }}</p>
      <p v-if="tel" :class="[efontSize, ecolor, eweight, padding]">{{ tel }}</p>
    </div>
  </div>
</template>

<script>

import Svg from '/src/components/icons/Svg.vue';
export default {
  props: {
    direction: String,
    padding: String,
    align: String,
    picSize: String,
    url: String,
    fontSize: String,
    color: String,
    weight: String,
    name: String,
    email: String,
    tel: String,
    efontSize: String,
    ecolor: String,
    eweight: String,
    buyer: String,
  },

  components: {
    Svg,
  }
};

</script>

<style scoped>
.remove-items-center {
  align-items: initial;
}

.remove-gap-5 {
  column-gap: 8px;
  row-gap: 8px;
}
</style>
