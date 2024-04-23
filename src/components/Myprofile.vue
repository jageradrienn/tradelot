<template>
  <div class="my-profil flex flex-col xs:flex-row mt-8 justify-start items-start px-8 mb-8 gap-2 ">
    <BTN type="button" bgColor="bg-transparent" borderStyle="border-dashed" borderWidth="border"
      borderColor="border-neutrals600" radius="rounded-[3px]" width="w-[96px]" height="h-[96px]" class="mr-5 mb-3">
      <Avatar url="/src/components/icons/Gallery.svg" name="Upload profile picture" weight="font-medium"
        color="text-neutrals600" fontSize="text-xs" class="flex flex-col justify-center items-center remove-gap-5" />
    </BTN>
    <div class="flex justify-between gap-4 w-full flex-wrap md:flex-nowrap lg:w-[calc(100%-96px)] lg:flex-row">
      <div class="flex flex-col">
        <p class="font-bold">Your Photo</p>
        <p class="text-neutrals600 text-xs">This will be displayed on your profile.</p>
      </div>
      <div class="flex gap-8 w-full justify-start md:justify-end">
        <button type="button" class="text-neutrals600">Delete</button>
        <button type="button" class=" text-indigo-electric font-bold">Upload</button>
      </div>
    </div>
  </div>
  <form action="#" @submit.prevent="submitForm">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10 px-8">
      <div v-for="(item, index) in inputsData" :key:="index">
        <Inputs :label="item.label" :for="item.for" :id="item.id" :name="item.name" :type="item.type"
          :placeholder="item.placeholder" required="required" />
      </div>
    </div>
    <div class="flex flex-col w-full md:flex-row md:justify-start md:items-start gap-5 px-8">
      <BTN bgColor="bg-indigo-100" width="w-full md:w-fit" height="h-[40px]" label="Save Changes" fontSize="text-sm"
        textColor="text-indigo-tropical" fontWeight="font-semibold" radius="rounded" class="px-5 py-2"
        buttonType="submit" />
      <BTN bgColor="bg-white" width="w-full md:w-fit" height="h-[40px]" label="Cancel" fontSize="text-sm"
        textColor="text-indigo-electric" fontWeight="font-semibold" borderColor="border-indigo-300" borderWidth="border"
        radius="rounded" class="px-10 py-2" @click="reload()" />
    </div>
  </form>
</template>

<script>
import BTN from "/src/components/Btn.vue";
import Avatar from "/src/components/Avatar.vue";
import Inputs from "/src/components/Inputs.vue";
export default {
  components: {
    BTN,
    Avatar,
    Inputs,
  },
  data() {
    return {
      inputsData: [
        {
          label: "First Name",
          for: "firstname",
          id: "firstname",
          name: "firstname",
          type: "text",
          placeholder: "First Name",
        },
        {
          label: "Last Name",
          for: "lastname",
          id: "lastname",
          name: "lastname",
          type: "text",
          placeholder: "Last Name",
        },
        {
          label: "Mobile",
          for: "mobile",
          id: "mobile",
          name: "mobile",
          type: "tel",
          placeholder: "Mobile",
        },
        {
          label: "Email",
          for: "email",
          id: "email",
          name: "email",
          type: "email",
          placeholder: "Email",
        },
        {
          label: "Company",
          for: "company",
          id: "company",
          name: "company",
          type: "text",
          placeholder: "Company",
        },
        {
          label: "Position",
          for: "position",
          id: "position",
          name: "position",
          type: "text",
          placeholder: "Position",
        },
      ],
    };
  },
  methods: {
    reload() {
      window.location.reload();
    },

    submitForm() {
      return
    }
  }
};
</script>

<style scoped></style>
