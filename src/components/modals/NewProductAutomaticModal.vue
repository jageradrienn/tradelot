<template>
    <transition name="fade">
        <div class="modal-overlay">
            <div class="popupDiv pt-5 sm:pt-8" @click.stop>
                <section class="max-h-[488px] max-w-[80vw] sm:max-h-[600px] w-full bg-white mx-auto ">
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl sm:text-3xl mb-2"><b>New Product</b></h1>
                        <span class="closeSpan cursor-pointer" @click="closeModal">
                            <Svg src="/src/components/icons/Close.vue" alt="close" class="w-[20px] h-[20px]" />
                        </span>
                    </div>
                    <p>To register a new product, please fill out the form below.</p>
                    <p class="pt-5 sm:pt-8 pb-2"><b>Please copy the data here.</b></p>
                    <textarea rows="10" cols="1"
                        placeholder="Copy your products e.g.: &#10;&#10;Airpods 3 MME73ZM/A EU Spec @USD"
                        class="w-full border border-neutrals-200 rounded-md resize-none p-2 placeholder:neutrals-200"></textarea>
                    <div class="flex gap-5 pt-5 sm:pt-10">
                        <BTN bgColor="bg-indigo-electric" width="w-fit" height="h-[40px]" label="Save"
                            fontSize="text-sm" textColor="text-white" fontWeight="font-semibold"
                            borderColor="border-indigo-300" borderWidth="border" radius="rounded"
                            class="px-9 sm:px-10 py-4" @click="this.$emit('update:dataModal', true)" />
                        <BTN bgColor="bg-transparent" width="w-fit" height="h-[40px]" label="Cancel" fontSize="text-sm"
                            textColor="text-indigo-electric" fontWeight="font-semibold" radius="rounded"
                            borderColor="border border-indigo-electric" class="px-6 sm:px-8  py-4"
                            @click="closeModal" />
                    </div>
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
import BTN from "/src/components/Btn.vue"
import Svg from "/src/components/icons/Svg.vue";
export default {
    components: {
        BTN,
        Svg
    },

    methods: {
        closeModal() {
            this.$emit("update:AutoProd", false);
            this.$emit("update:Manualprod", false);
        }
    }
}
</script>
