<template>
  <form @submit.prevent="submitForm">
    <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 mt-8 gap-5 mb-10 px-8">
      <Inputs label="Default" fontlabel="font-semibold" for="default" id="default" name="default" type="text"
        placeholder="Placeholder Text" />
      <div></div>
      <Inputs label="New Password*" fontlabel="font-semibold" for="newpassword" id="newpassword" name="newpassword"
        type="password" placeholder="Enter new password" required="required" v-model="newpassword" />
      <Inputs label="Confirm Password*" fontlabel="font-semibold" for="confirmpassword" id="confirmpassword"
        name="confirmpassword" type="password" placeholder="Enter new password" required="required"
        v-model="confirmpassword" />
      <p v-if="!isMatch" class="p-2 text-red box">A jelszavak nem egyeznek meg!</p>
    </div>

    <div class="flex flex-col w-full md:flex-row md:justify-start md:items-start gap-5 px-8">
      <BTN buttonType="submit" bgColor="bg-indigo-electric" width="w-full md:w-fit" height="h-[40px]"
        label="Change Password" fontSize="text-sm" textColor="text-white" fontWeight="font-semibold" radius="rounded"
        class="px-3 xs:px-5 py-2" />
      <BTN bgColor="bg-white" width="w-full md:w-fit" height="h-[40px]" label="Cancel" fontSize="text-sm"
        textColor="text-indigo-electric" fontWeight="font-semibold" borderColor="border-indigo-300" borderWidth="border"
        radius="rounded" class="px-10 py-2" />
    </div>
  </form>


</template>

<script>
import Inputs from "/src/components/Inputs.vue";
import BTN from "/src/components/Btn.vue";
export default {
  components: {
    Inputs,
    BTN,
  },
  data() {
    return {
      isMatch: true,
      newPassword: '',
      confirmPassword: '',
    }
  },

  methods: {
    isMatched() {
      this.isMatch = (this.newpassword === this.confirmpassword);
      return this.isMatch;
    },
    submitForm() {
      this.isMatched();
      if (this.isMatch) {
        this.sendData();
        return;
      }
    },
    sendData() {
      window.location.reload();
    }
  }
};
</script>

<style scoped></style>
