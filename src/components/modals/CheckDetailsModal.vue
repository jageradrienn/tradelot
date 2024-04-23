<template>
    <transition name="fade">
        <div class="modal-overlay" @click.self="this.$emit('update:checkDetails', false)">
            <div class="popupDiv top-2 translate-y-0 max-h-[90%] p-5 sm:p-8" @click.stop>
                <section class="flex flex-col justify-center mb-5 bg-white">
                    <div class="flex justify-between items-center mb-2">
                        <h1 class="text-2xl xs:text-3xl font-bold  ">Check details</h1>
                        <span class="closeSpan cursor-pointer" @click="this.$emit('update:checkDetails', false)">
                            <Svg src="/src/components/icons/Close.vue" /></span>
                    </div>
                    <p class="max-w-[95%]">Please review the data. If necessary, make any modifications. After saving,
                        unidentified products
                        will not be uploaded.</p>
                    <div class="flex flex-col gap-2 mdlg:flex-row mdlg:gap-8 mt-2 mb-2 lg:mr-8 ">
                        <p class="font-bold text-[13px] xs:text-sm lg:text-base">Number of identified products: <span
                                class="text-green font-bold">3</span>
                        </p>
                        <p class="font-bold text-[13px] xs:text-sm lg:text-base">Missing data: <span
                                class="text-indigo-electric font-bold">2</span></p>
                        <p class="font-bold text-[13px] xs:text-sm lg:text-base">Not identified: <span
                                class="text-red font-bold">1</span></p>
                    </div>
                </section>
                <section class="details pr-4 flex flex-col gap-6 w-full overflow-y-auto">
                    <div v-for=" item in products " :key="item.id" class="relative">
                        <DetailsCard :productItem="item" :iconUrl="iconUrl(item)" :color="getColor(item)"
                            @card-click="toggleActive(item.id)" />
                        <div v-if="activeId === item.id">
                            <ProductDetailsCard :productData="item" :color="getColor(item)" />
                        </div>
                    </div>
                </section>
                <div
                    class="flex flex-col items-start sm:flex-row sm:justify-start sm:items-center gap-3 sm:gap-5 mb-5 pt-5 sm:pt-16">
                    <BTN bgColor="bg-indigo-electric" width="w-full sm:w-fit" height="h-[40px]" label="Save"
                        fontSize="text-xs xs:text-sm" textColor="text-white" fontWeight="font-semibold"
                        borderColor="border-indigo-300" borderWidth="border" radius="rounded"
                        class="px-12 sm:px-10 py-4" />
                    <BTN bgColor="bg-transparent" width="w-full sm:w-fit" height="h-[40px]" label="Cancel"
                        fontSize="text-sm" textColor="text-indigo-electric" fontWeight="font-semibold" radius="rounded"
                        borderColor="border border-indigo-electric" class="px-8 py-4"
                        @click="this.$emit('update:checkDetails', false)" />
                </div>
            </div>

        </div>
    </transition>
</template>

<script>
import Svg from "/src/components/icons/Svg.vue";
import DetailsCard from "/src/components/cards/DetailsCard.vue"
import ProductDetailsCard from "/src/components/cards/ProductDetailsCard.vue"
import BTN from "/src/components/Btn.vue";
export default {
    components: {
        DetailsCard,
        ProductDetailsCard,
        BTN,
        Svg,
    },
    props: {
        products: Array,
    },

    methods: {
        iconUrl(item) {
            if (!item.price) return "/src/components/icons/Forbidden.vue";
            else if (item.price === "N/A" && item.stock === "N/A") return "/src/components/icons/Forbidden.vue";
            else if (item.price[0] !== "€") return "/src/components/icons/Danger.vue";
            else if (item.price[0] === "€" && item.price) return "/src/components/icons/TickCirlce.vue";
        },

        getColor(item) {
            if (!item.price) return "red";
            else if (item.price === "N/A" && item.stock === "N/A") return "red";
            else if (item.price[0] !== "€") return "indigo-electric";
            else if (item.price[0] === "€" && item.price) return "green";
        },

        toggleActive(id) {
            if (this.activeId === id) {
                this.activeId = null
            }
            else { this.activeId = id }
        },

        updateHeight() {
            this.windowHeight = window.innerHeight;
        },
    },

    data() {
        return {
            activeId: '',
            windowHeight: window.innerHeight,
        }
    },

    mounted() {
        window.addEventListener("resize", this.updateHeight)
    },

    destroyed() {
        window.removeEventListener("resize", this.updateHeight)
    },
}
</script>

<style scoped>
.details::-webkit-scrollbar {
    width: 5px;
}

.details::-webkit-scrollbar-thumb {
    -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
    @apply rounded-sm bg-indigo-electric;
}
</style>../ProductDetailsCard.vue