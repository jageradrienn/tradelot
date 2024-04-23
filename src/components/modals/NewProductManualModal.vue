<template>
    <transition name="fade">
        <div class="modal-overlay">
            <div class="popupDiv" :class="viewportHeight < 925 ? 'h-[95vh] overflow-y-auto' : 'h-[fit]'" @click.stop>
                <section class="max-h-[900px] sm:max-h-[700px] md:max-h-[600px]">
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl sm:text-3xl font-bold pb-1">New Product</h1>
                        <span class="closeSpan cursor-pointer" @click="closeModal">
                            <Svg src="/src/components/icons/Close.vue" class="w-[20px] h-[20px]" /></span>
                    </div>
                    <p class="mb-2 sm:mb-8">To register a new product, please fill out the form below.</p>
                    <ProductDetailsCard />
                    <div
                        class="flex flex-col items-start sm:flex-row sm:justify-start sm:items-center gap-3 sm:gap-5 mb-5 pt-5 sm:pt-16">
                        <div class="mx-auto sm:mx-0 flex justify-center gap-1 xs:gap-4">
                            <BTN bgColor="bg-indigo-electric" width="w-1/2 sm:w-fit" height="h-[40px]" label="Save"
                                fontSize="text-xs xs:text-sm" textColor="text-white" fontWeight="font-semibold"
                                borderColor="border-indigo-300" borderWidth="border" radius="rounded"
                                class="px-12 sm:px-10 py-4" />
                            <BTN bgColor="bg-indigo-400" width="w-1/2 sm:w-fit" height="h-[40px]" label="Save & Add New"
                                fontSize="text-xs xs:text-sm" textColor="text-white" fontWeight="font-semibold"
                                borderColor="border-indigo-300" borderWidth="border" radius="rounded"
                                class="xs:px-3 sm:px-10 py-4" />
                        </div>
                        <BTN bgColor="bg-transparent" width="w-full sm:w-fit" height="h-[40px]" label="Cancel"
                            fontSize="text-sm" textColor="text-indigo-electric" fontWeight="font-semibold"
                            radius="rounded" borderColor="border border-indigo-electric" class="px-8 py-4"
                            @click="closeModal" />
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import ProductDetailsCard from '/src/components/cards/ProductDetailsCard.vue';
import BTN from '/src/components/Btn.vue';
import Svg from '/src/components/icons/Svg.vue';
export default {
    components: {
        ProductDetailsCard,
        BTN,
        Svg,
    },

    methods: {
        closeModal() {
            this.$emit("update:Autoprod", false);
            this.$emit("update:Manualprod", false);
        }
    },

    data() {
        return {
            viewportHeight: window.innerHeight,
        }
    },


    mounted() {
        window.addEventListener('resize', this.updateViewport);
    },


    destroyed() {
        window.removeEventListener('resize', this.updateViewport);
    },


    updateViewport() {
        this.viewportHeight = window.innerHeight;
    },


    watch: {
        viewportHeight(newVal, oldVal) {
            this.viewportHeight = window.innerHeight;
        }
    },

}
</script>

<style scoped></style>