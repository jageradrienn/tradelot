<template>
    <div class="mb-5 px-8 py-5 flex flex-col items-start justify-center gap-8 flex-wrap w-full lg:flex-row
        lg:justify-between lg:items-start ">
        <div class=" flex flex-col items-start justify-center ">
            <p class="text-lg font-bold leader-[28px] w-full lg:max-w-[320px]">{{ dataItem.name }}</p>
            <p class="text-lg font-medium text-neutrals-700 leader-[28px]">EAN: {{ dataItem.EAN }}</p>
            <p class="text-xs font-medium text-neutrals-700 leader-[18px]">SKU: {{ dataItem.SKU }}</p>
        </div>
        <div
            class="flex flex-row justify-between w-full items-start sm:w-[60%] sm:mx-auto lg:flex-col lg:justify-start lg:w-[8%] ">
            <p class="font-medium leader-[24px] whitespace-pre text-base">Quantity: </p>
            <p class="text-indigo-electric text-base lg:text-lg font-bold leader-[28px]">{{ dataItem.quantity }} pcs</p>
        </div>
        <div
            class="flex flex-row justify-between w-full items-start sm:w-[60%] sm:mx-auto lg:flex-col lg:justify-start lg:w-[13%] ">
            <p class="font-medium leader-[24px] whitespace-pre text-base">Target (offer): </p>
            <p class="text-indigo-electric text-base lg:text-lg font-bold leader-[28px]">€{{ dataItem.target }} <span
                    class="text-neutrals-700">/pcs</span></p>
        </div>
        <div
            class="flex flex-row justify-between  w-full items-start sm:w-[60%] sm:mx-auto lg:flex-col lg:justify-start lg:w-[12%]  ">
            <p class="font-medium leader-[24px] whitespace-pre text-base">Market price: </p>
            <p class="text-indigo-electric text-base lg:text-lg font-bold leader-[28px]">{{ dataItem.price }}</p>
        </div>

        <button
            class="px-5 py-2 gap-2 hover:cursor-pointer justify-center h-[40px] w-full lg:w-fit  rounded border border-indigo-electric"
            :class="isOpen ? 'bg-indigo-electric' : 'bg-transparent'" @click="this.$emit('update:toggleActive')">

            <span v-if="isOpen" class="flex gap-2 items-center">
                <Crown class="w-[17px] h-[17px]" />
                <span class="text-sm font-semibold" :class="[isOpen ? 'text-white' : 'text-indigo-electric',]">Show Top
                    Sellers</span>
                <ChevronWhiteDown class="w-[17px] h-[17px]" />
            </span>

            <span v-if="!isOpen" class="flex gap-2 items-center">
                <CrownFrame class="w-[17px] h-[17px]" />
                <span class="text-sm font-semibold" :class="[isOpen ? 'text-white' : 'text-indigo-electric',]">Show Top
                    Sellers</span>
                <ChevronDown class="w-[17px] h-[17px]" />
            </span>
        </button>
    </div>
</template>

<script>
import BTN from "/src/components/Btn.vue"
import Crown from "/src/components/icons/Crown.vue"
import ChevronWhiteDown from "/src/components/icons/ChevronWhiteDown.vue"
import CrownFrame from "/src/components/icons/CrownFrame.vue"
import ChevronDown from "/src/components/icons/ChevronDown.vue"
export default {
    components: {
        BTN,
        Crown,
        ChevronWhiteDown,
        CrownFrame,
        ChevronDown
    },
    props: {
        dataItem: Object,
        isOpen: Boolean,
    },
}
</script>

<style scoped></style>