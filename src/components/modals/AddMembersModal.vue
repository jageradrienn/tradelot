<template>
  <transition name="fade">
    <div class="modal-overlay">
      <div class="popupDiv max-h-[600px] overflow-y-auto overflow-x-hidden" @click.stop>
        <span class="closeSpan flex justify-end items-center cursor-pointer  " @click="closeModal">
          <Svg class="w-[23px] h-[23px]" src="/src/components/icons/Close.vue" />
        </span>
        <Avatar url="/src/components/icons/People.vue" name="Add Team Member"
          direction="flex-col remove-items-center items-start " fontSize="text-2xl pb-2" weigth="font-bold"
          email="Please provide the email address of the person you would like to add to this team." class="pt-2" />
        <p class="text-xs text-neutrals-700 pt-2">
          The email address must be associated with an existing account.
        </p>
        <div class="flex flex-col w-full lg:flex-row lg:justify-between mt-8 ">
          <Inputs label="Email" type="email" for="email" id="email" name="email" fontlabel="font-semibold w-[320px]"
            placeholder="benjamin.vass@tradelot.io" />
          <div class="mt-5 lg:mt-0">
            <label class="font-semibold ml-5">Role</label>
            <div
              class="flex flex-col items-start xs:flex-row xs:justify-start lg:justify-between lg:items-center gap-5 mt-1">
              <p></p>
              <BTN bgColor="bg-white" width="w-[120px]" height="h-[75px]" label="Editor" fontSize="text-sm"
                textColor="text-indigo-300" fontWeight="font-semibold" radius="rounded" borderColor="border-indigo-300"
                borderWidth="border" btnStyle="iconBox" url="/src/components/icons/Editor.vue" class="px-5 " />
              <BTN bgColor="bg-indigo-electric" width="w-[120px]" height="h-[75px]" label="Admin" fontSize="text-sm"
                textColor="text-white" fontWeight="font-semibold" radius="rounded" btnStyle="iconBox"
                url="/src/components/icons/User.vue" rightCOLIcon="/src/components/icons/Checkmark.vue" class="px-5 " />
            </div>
          </div>
        </div>

        <div class="flex flex-col items-start xs:flex-row xs:justify-start gap-5 mt-8 sm:mt-16  lg:mb-[7rem]">
          <BTN bgColor="bg-indigo-electric" width="w-full xs:w-fit" height="h-[40px]" label="Create" fontSize="text-sm"
            textColor="text-white" fontWeight="font-semibold" radius="rounded" class="px-12 py-2 " />
          <BTN bgColor="bg-white" width="w-full xs:w-fit" height="h-[40px]" label="Cancel" fontSize="text-sm"
            textColor="text-indigo-electric" fontWeight="font-semibold" borderColor="border-indigo-300"
            borderWidth="border" radius="rounded" class="px-10 py-2 " @click="closeModal" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { defineEmits } from "vue";
import Svg from "/src/components/icons/Svg.vue";
import Avatar from "/src/components/Avatar.vue";
import Inputs from "/src/components/Inputs.vue";
import BTN from "/src/components/Btn.vue";

export default {
  components: {
    defineEmits,
    Avatar,
    Inputs,
    BTN,
    Svg
  },
  setup(props, { emit }) {
    const closeModal = () => {
      emit("update:showModal", false);
    };
    return { closeModal };
  },
};
</script>

<style scoped></style>
