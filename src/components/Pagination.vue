<template>
    <div class="m-auto">
        <div class="flex items-center justify-between bg-white p-4 ">

            <div class="m-auto">
                <div>
                    <nav class="isolate flex -space-x-px rounded-md shadow-sm h-[35px]" aria-label="Pagination">
                        <a href="#" class="rounded-l-md focus:outline-offset-0">
                            <Svg src="/src/components/icons/Chevron Left.vue" class="h-5 w-5" aria-hidden="true" />
                        </a>
                        <a href="#" aria-current="page">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a v-if="viewportWidth > 450" href="#">4</a>
                        <a v-if="viewportWidth > 450" href="#">5</a>
                        <span>...</span>
                        <a href="#" class="hidden  md:flex">342
                        </a>
                        <a href="#" class="rounded-r-md focus:outline-offset-0">
                            <Svg src="/src/components/icons/Chevron Right.vue" class="h-5 w-5" aria-hidden="true" />
                        </a>

                    </nav>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Svg from '/src/components/icons/Svg.vue';

export default {
    components: {
        Svg
    },
    data() {
        return {
            viewportWidth: window.innerWidth,
        }
    },

    mounted() {
        window.addEventListener("resize", this.updateViewportWidth);
    },

    destroyed() {
        window.removeEventListener("resize", this.updateViewportWidth);
    },
    methods: {
        updateViewportWidth() {
            this.viewportWidth = window.innerWidth;
        }
    }
}
</script>

<style scoped>
nav a,
nav span {
    @apply relative flex items-center px-2.5 py-2.5 min-w-[25px] lg:w-[35px] justify-center text-sm font-semibold text-neutrals-700 ring-1 ring-inset ring-gray-300 hover:bg-indigo-300 focus:z-20 focus:bg-russianViolet focus:text-white
}

nav a:first-child, nav a:last-child {
    @apply px-1.5 py-1.5
}
</style>