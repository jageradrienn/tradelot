<template>
  <div class="flex justify-start items-center gap-4 px-4 py-3 text-lavender50">
    <Svg :src="src" :title="label" />
    <transition name="fade">
      <div v-show="(!isClose && !isMobileSize) || (!isClose && isMobileSize)" class="mr-6 flex flex-1 items-center">
        <p>{{ label }}</p>
        <Svg v-if="label === 'Email'" src="/src/components/icons/Number.vue" class="absolute right-9" />
      </div>
    </transition>
  </div>
</template>

<script>

import Svg from '/src/components/icons/Svg.vue';
export default {
  props: {
    src: String,
    label: String,
    link: String,
    isClose: Boolean,
    isMobileSize: Boolean,
  },
  components: {
    Svg,
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
