<template>
    <div class="z-10 iMenusbg w-full px-3 pt-6 h-full">
        <h2 class="text-[18px] font-bold">Menus</h2>
        <div class="menus mx-auto w-full grid grid-cols-2 grid-row-2 gap-4 pt-5">
            <BTN url="/src/components/icons/Addproduct_e.vue" label="Add Products" width="w-full" height="min-h-[96px]"
                bgColor="bg-white" btnStyle="iconBox" fontSize="text-xs" fontWeight="font-medium"
                @click="this.$emit('update:AutoProd', true);" />
            <BTN url="/src/components/icons/Addproductbox_e.vue" label="Add Products Manually" width="w-full"
                height="min-h-[96px]" bgColor="bg-white" btnStyle="iconBox" fontSize="text-xs" fontWeight="font-medium"
                @click="this.$emit('update:Manualprod', true);" />
            <BTN url="/src/components/icons/Export_e.vue" label="Export" width="w-full" height="min-h-[96px]"
                bgColor="bg-white" btnStyle="iconBox" fontSize="text-xs" fontWeight="font-medium" />
            <BTN url="/src/components/icons/Share_e.vue" label="Share" width="w-full" height="min-h-[96px]"
                bgColor="bg-white" btnStyle="iconBox" fontSize="text-xs" fontWeight="font-medium" />
        </div>
        <BTN bgColor="bg-transparent" width="min-w-[124px]" height="min-h-[50px]" label="Back" fontSize="text-sm"
            textColor="text-indigo-electric" fontWeight="font-medium" radius="rounded"
            borderColor="border border-indigo-electric" class="mt-5 px-5 py-2" @click="closeModal" />
    </div>
</template>

<script>
import BTN from "/src/components/Btn.vue"
import NewProductAutomaticModal from "/src/components/modals/NewProductAutomaticModal.vue"
import NewProductManualModal from "/src/components/modals/NewProductManualModal.vue"

export default {
    components: {
        BTN,
        NewProductAutomaticModal,
        NewProductManualModal,
    },
    data() {
        return {
            isAutomaticNewProduct: false,
            isManualNewProduct: false,
        }
    },
    methods: {
        closeModal() { this.$emit("update:iMenus", false) }
    }
} 
</script>

<style scoped>
.iMenusbg {
    position: relative;
    box-shadow: 0px 2px 4px -2px rgba(18, 8, 63, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
}

.iMenusbg::after {
    content: "";
    background-image: url("/src/assets/svg/lavenderBG.svg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right top;
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    border-radius: 20px;
}
</style>
