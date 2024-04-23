<template>
    <transition name="fade">
        <div class="modal-overlay">
            <div class="popupDiv">
                <section
                    class=" flex flex-col items-center justify-center max-w-[780px] max-h-[600px] bg-white px-5 sm:px-8 py-[3.25rem]">
                    <h1 class="text-3xl lg:text-4xl text-indigo-electric leading-8 lg:leading-[2.75rem] font-bold mb-4">
                        Data
                        Processing
                    </h1>
                    <p class="text-base lg:text-lg">The data processing is in progress. Please wait.</p>
                    <img src="../icons/spinner.gif" alt="spinner" class="max-w-[120px]">
                    <img src="../../assets/svg/data-processing.webp" alt="dataProcessing">
                </section>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        showModal: Boolean
    },

    watch: {
        showModal(newValue) {
            if (newValue) {
                setTimeout(() => {
                    this.$emit('update:dataModal', false);
                    this.$emit('update:AutoProd', false);
                    this.$emit('update:checkDetails', true);
                }, 1500);
            }
        }
    }
}
</script>
