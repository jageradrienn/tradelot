<template>
    <section class="flex gap-3 justify-start items-start box py-5 md:p-5 cursor-pointer"
        :class="color === 'red' ? 'border border-red' : ''" @click="$emit('card-click')">
        <Svg :src="iconUrl" class="ml-2 md:ml-0 min-w-[18px] min-h-[18px] w-[18px] h-[18px] md:w-[24px] md:h-[24px]" />
        <div class="flex flex-col max-w-[33.5rem]">
            <p class="font-bold text-xs xs:text-sm max-w-[32.5rem]">{{ productItem.name }}</p>
            <div class="flex flex-col items-start xs:flex-row gap-3 xs:items-center mt-1">
                <p :class="{ [`text-${color}`]: color }"><span v-if="color === 'red'">Price: </span>{{ productItem.price
                    }}</p>
                <p :class="color == 'red' ? `text-${color}` : ''" class="text-sm md:text-base">Stock: <span>{{
                    productItem.stock
                        }}</span> pcs</p>
            </div>
            <div
                class="flex flex-col justify-center lg:flex-row lg:justify-start lg:items-center gap-3 text-neutrals-700 mt-1">
                <p class="text-xs">EAN: <span>{{ productItem.EAN }}</span> </p>
                <p class="text-xs lg:px-4">SKU: <span>{{ productItem.SKU }}</span> </p>
                <p class="text-xs lg:px-4">Region: <span>{{ productItem.region }}</span> </p>
                <p class="text-xs">Color: <span>{{ productItem.color }}</span> </p>
            </div>
        </div>
        <Svg src="/src/components/icons/Edit.vue"
            class=" mr-2 md:mr-0 min-w-[18px] min-h-[18px] w-[18px] h-[18px] md:w-[20px] md:h-[20px] ml-auto" />
    </section>

</template>

<script>
import Edit from "/src/components/icons/Edit.vue"
import Svg from "/src/components/icons/Svg.vue";
export default {
    components: {
        Edit,
        Svg
    },

    props: {
        color: String,
        iconUrl: String,

        productItem: {
            type: Object,
            default: () => ({}),
        },
    },




}
</script>

<style scoped></style>
