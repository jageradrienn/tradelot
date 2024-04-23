<template>
  <div class="flex flex-col relative">
    <label v-if="label" :for="for" :class="fontlabel" class="text-sm mb-[6px]">{{ label }}</label>
    <input :type='type' :name='name' :id='id' :placeholder='placeholder' :required='required' :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="form-control border p-2 font-normal rounded-[3px] relative focus:outline-neutrals-200"
      :class="[{ 'pl-10': leftIcon, }, height ? `h-[${height}]` : '', placeholderColor ? `placeholder:text-${placeholderColor}` : '', borderColor ? `border-${borderColor}` : '']" />
    <div v-if=rightBTN class="absolute" :class="[absoluteBTNRight, absoluteBTNBottom]">
      <BTN bgColor="bg-indigo-electric" width="w-fit" height="h-[40px]" label="Copy Link" fontSize="text-sm"
        textColor="text-white" fontWeight="font-semibold" borderColor="border-indigo-300" borderWidth="border"
        radius="rounded" class="px-2" />
    </div>
    <div v-if=leftIcon class="absolute" :class="[absoluteLeft, absoluteBottom, iconSize]">
      <Svg :src=leftIcon />
    </div>
    <div v-if=rightIcon class="absolute" :class="[absoluteRight, absoluteBottom, iconSize]">
      <Svg :src=rightIcon />
    </div>
  </div>
</template>

<script>
import BTN from "/src/components/Btn.vue"
import Svg from "/src/components/icons/Svg.vue";

export default {
  components: {
    BTN,
    Svg
  },

  props: {
    label: String,
    fontlabel: String,
    for: String,
    id: String,
    name: String,
    type: String,
    height: String,
    placeholder: String,
    placeholderColor: String,
    placefont: String,
    value: String,
    required: String,
    rightIcon: String,
    leftIcon: String,
    rightBTN: String,
    iconSize: String,
    absoluteLeft: String,
    absoluteRight: String,
    absoluteTop: String,
    absoluteBottom: String,
    absoluteBTNRight: String,
    absoluteBTNBottom: String,
    borderColor: String,
    modelValue: String,
  },
  emits: ['update:modelValue'],
};
</script>

<style scoped></style>
