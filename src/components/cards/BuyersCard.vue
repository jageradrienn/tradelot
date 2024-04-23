<template>
    <div class="flex justify-between items-center flex-wrap w-full gap-5 mt-8 mb-5 ">
        <Avatar :url="url" :name="name" fontSize="text-lg" weight="font-bold" :email="contact" eweight="font-medium"
            ecolor="text-neutrals-700" :buyer="buyer" class="gap-6" />
        <div class="flex justify-between w-full xs:w-auto">
            <p class="font-medium whitespace-pre">Date: </p>
            <p class="font-medium">{{ date }}</p>
        </div>
        <div class="flex flex-row justify-between w-full md:w-auto md:justify-end items-center gap-2">
            <BTN bgColor="bg-indigo-400" width="w-[48%] md:w-fit" height="h-[40px]" label="Message" fontSize="text-sm"
                textColor="text-white" fontWeight="font-semibold" borderColor="border-indigo-300" borderWidth="border"
                radius="rounded" url="/src/components/icons/Whatsapp-fill-white.vue" class="px-5 py-2" />
            <BTN bgColor="bg-russianViolet" width="w-[48%] md:w-fit" height="h-[40px]" label="Export" fontSize="text-sm"
                textColor="text-white" fontWeight="font-semibold" radius="rounded"
                url="/src/components/icons/Export.vue" class="px-5 py-2" />
        </div>
    </div>
</template>

<script>
import Avatar from "/src/components/Avatar.vue"
import BTN from "/src/components/Btn.vue"
export default {
    components: {
        Avatar,
        BTN,
    },
    props: {
        url: String,
        name: String,
        contact: String,
        date: String,
        buyer: String,
    }
}
</script>

<style lang="stylus" scoped>

</style>