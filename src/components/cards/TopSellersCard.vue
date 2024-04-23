<template>
    <div class="flex gap-6 items-start justify-between px-5 lg:px-8 py-5 flex-wrap w-full">
        <Avatar :url="dataItem.url" :name="dataItem.name" :buyer="dataItem.buyer" picSize="50px" padding="pl-2 lg:pl-5"
            :email="dataItem.email" :tel="dataItem.tel" :eweight="font - medium" :ecolor="text - neutrals - 700"
            class="w-[262px] gap-3 lg:gap-5" />
        <div
            class="flex flex-row justify-between w-full items-start sm:w-[60%] sm:mx-auto lg:flex-col lg:justify-start lg:w-[10%] ">
            <p class="font-medium leader-[24px] whitespace-pre">Quantity: </p>
            <p class="text-indigo-electric text-lg font-bold leader-[28px]"> {{ dataItem.quantity }}pcs</p>
        </div>
        <div
            class="flex flex-row justify-between w-full items-start gap-1 sm:w-[60%] sm:mx-auto lg:flex-col lg:justify-start lg:w-[15%] ">
            <p class="font-medium leader-[24px] whitespace-pre">Price: </p>
            <div class="flex justify-start gap-1"><Svg :src="dataItem.priceIcon" alt="icon" class="w-[24px] h-[24px]" />
                <p class="text-lg font-bold leader-[28px]" :class="dataItem.priceColor">€{{
                    dataItem.price }}<span class="text-neutrals-700">/pcs</span></p>
            </div>
        </div>
        <div
            class="flex flex-row justify-between w-full items-start sm:w-[60%] sm:mx-auto lg:flex-col lg:justify-start lg:w-[20%] ">
            <p class="font-medium leader-[24px] whitespace-pre">Date: </p>
            <p class="text-lg font-bold leader-[28px]"> {{ dataItem.date }}</p>
        </div>
        <div
            class="flex flex-col justify-between w-full items-start sm:flex-row sm:w-[60%] sm:mx-auto lg:mx-0 lg:flex-col lg:justify-start lg:w-[20%] ">
            <p class="font-medium leader-[24px] whitespace-pre">Contact: </p>
            <BTN v-if="dataItem.contactIcon" :label="dataItem.contact" :url="dataItem.contactIcon"
                bgColor="bg-indigo-400" height="h-[40px]" label="Message" fontSize="text-sm" textColor="text-white"
                fontWeight="font-semibold" borderColor="border-indigo-300" borderWidth="border" radius="rounded"
                iconSize="w-[24px] h-[24px]" class="px-5 py-2 w-full sm:w-fit" />
            <p v-if="!dataItem.contactIcon" class="text-lg font-bold leader-[28px] underline"> <span
                    class="font-bold">{{ dataItem.contact }}</span></p>
        </div>
    </div>
</template>

<script>
import Avatar from '/src/components/Avatar.vue';
import BTN from '/src/components/Btn.vue';
import Svg from '/src/components/icons/Svg.vue';
export default {
    components: {
        Avatar,
        BTN,
        Svg
    },
    props: {
        dataItem: Object,

    }
}
</script>

<style scoped></style>