<template>
  <button :type="buttonType" :class="[
    bgColor,
    borderWidth,
    radius,
    borderColor,
    width,
    height,
    wrapReverse,
    btnStyle,
    bgColor === 'bg-transparent' ? 'hover:bg-indigo-200 disabled:bg-indigo-200 disabled:text-white' : bgColor === 'bg-indigo-electric' ? 'hover:bg-indigo-700 focus:bg-indigo-800 disabled:bg-indigo-100 disabled:text-indigo-tropical '
      : bgColor === 'bg-russianViolet' ? 'hover:bg-indigo-electric focus:bg-indigo-800 disabled:bg-russianViolet/30' : bgColor === 'bg-indigo-400' ? 'hover:bg-indigo-500 focus:bg-indigo-600 disabled:bg-indigo-100 disabled:text-indigo-tropical' : '',
  ]" class="relative">
    <slot v-if="!label"></slot>
    <span class="flex justify-between">
      <Svg v-if="url" :src="url" :class="iconSize" />
      <Svg v-if="rightCOLIcon" :src="rightCOLIcon" class="absolute right-1" />
    </span>

    <p v-if="label" class="text-start" :class="[textColor, fontWeight, fontSize,]">{{ label }}</p>
    <Svg v-if="rightIcon" :src="rightIcon" :class="rightIconClass" />

  </button>
</template>

<script>
import Svg from '/src/components/icons/Svg.vue';
export default {
  components: {
    Svg
  },
  props: {
    buttonType: {
      type: String,
      default: "button",
    },
    btnStyle: {
      type: String,
      default: "normal",
    },
    radius: {
      type: String,
      default: "rounded-[3px]",
    },
    buttonStyle: String,
    bgColor: String,
    borderStyle: String,
    borderWidth: String,
    borderColor: String,
    textColor: String,
    fontWeight: String,
    fontSize: String,
    width: String,
    height: String,
    wrapReverse: String,
    label: String,
    url: String,
    rightIcon: String,
    iconSize: String,
    rightIconClass: String,
    rightCOLIcon: String,

  },
};
</script>

<style scoped>
.normal {
  @apply flex shrink-0 flex-row justify-center items-center gap-2;
}

.iconBox {
  @apply flex flex-col items-center justify-start gap-3 p-3;
}
</style>
