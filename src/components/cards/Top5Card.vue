<template>
  <div class="card ">
    <h1 class="text-h1 font-bold pb-1">{{ title }}</h1>
    <p class="text-sm text-neutrals-700 pb-4 border-b border-neutrals-200'">
      Last 30 days
    </p>

    <div class="relative">
      <table class="flex flex-col xs:table w-full relative">
        <tbody class="flex-1">
          <tr v-for="trItem in top5Data" :key="trItem.id" :class="{
            'border-b': trItem.border,
            'border-neutrals-200': trItem.border,
          }" class="text-xs align-middle flex flex-col gap-2 w-full h-full justify-center xs:table-row xs:h-[44px]">
            <td class="py-3">
              <p>{{ trItem.product }}</p>
            </td>

            <div class="flex xs:hidden justify-between mb-2">
              <td class="text-right pr-5 font-extrabold">
                <p class="font-bold">{{ trItem.price }}</p>
              </td>
              <td>
                <p :class="trItem.percentcolor">{{ trItem.percent }}</p>
              </td>
              <td><Svg :src="trItem.url" class="ml-2" /></td>
            </div>

            <td class="hidden xs:table-cell text-right pr-5 font-extrabold">
              <p class="font-bold">{{ trItem.price }}</p>
            </td>
            <td class="hidden xs:table-cell">
              <p :class="trItem.percentcolor">{{ trItem.percent }}</p>
            </td>
            <td class="hidden xs:table-cell"><Svg :src="trItem.url" class="ml-2" /></td>
          </tr>

          <!-- <tr :class="{ 'last-row-inc': trItem?.lastinc, 'last-row-drop': trItem?.lastdrop }" class="bg-neutrals-50 rounded-b-md"> -->
          <tr class="last-row bg-neutrals-50 rounded-b-md w-[calc(100%+40px)]">
            <td class="py-3">
              <a href="#" class="text-xs underline underline-offset-2 ml-5 w-full">Show more</a>
            </td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Svg from '/src/components/icons/Svg.vue';

export default {
  components: {
    Svg,
  },

  props: {
    top5Data: {
      type: Object,
      default: () => ({}),
    },
    title: String,
  },
};
</script>

<style scoped>
.card {
  box-shadow: 0px 2px 4px -2px rgba(18, 8, 63, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.04);

  @apply bg-white rounded-t-md px-5 pt-5;
}

.last-row {
  position: absolute;
  left: -20px;
  bottom: -45px;
}
</style>
