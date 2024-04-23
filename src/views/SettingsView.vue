<template>
  <div class="settings relative">
    <div class="h-[6.25rem] w-full bg-lavender50 py-3 px-8 flex justify-center items-center absolute inset-0">
      <BTN type="button" bgColor="bg-lavender50" borderStyle="border-dashed" borderWidth="border"
        borderColor="border-disabledBtn" radius="rounded-[3px]" width="w-full" height="h-full">
        <Avatar url="/src/components/icons/Gallery.svg" name="Upload Company Logo" email="FORMAT .PNG, MAX SIZE 2 MB"
          weight="font-medium" color="text-indigo-400" fontSize="text-base" efontSize="text-xs" ecolor="text-indigo-200"
          eweight="font-semibold" class="justify-center remove-gap-5 " />
      </BTN>
    </div>
    <h1 class="text-h1 font-bold">Account Settings</h1>
    <div class="account-settings flex flex-col sm:flex-row justify-between gap-8 w-full">
      <article class="account px-8 w-[320px] h-fit">
        <section class="profil pb-5 border-b border-indigo-100">
          <Avatar direction="flex-col" picSize="65px" fontSize="text-[24px]" weight="font-bold" name="Benjamin Vass"
            email="benjamin.vass@tradelot.io" efontSize="text-[14px]" />
          <div class="flex flex-col justify-center">
            <p class="text-neutrals-600">Team Manager</p>
            <p class="text-neutrals-600 text-xs">Company Name</p>
          </div>
        </section>

        <section>
          <p class="text-xs uppercase font-semibold py-5">Channels</p>
          <Avatar url="/src/components/icons/Whatsup-electric.vue" name="+36 20 124 1729" class="pb-4" />
          <Avatar url="/src/components/icons/Mail-electric.vue" name="tradelot@mail.hu " />
        </section>
      </article>
      <div class="w-full flex flex-col gap-8">
        <article class="multi w-full min-w-[410px] flex flex-col">
          <nav class="flex flex-1 flex-wrap gap-8 pl-8 pb-3 border-b border-lavender50 w-full left-0 px-8">
            <RouterLink :to="{ name: 'myprofile' }"
              :class="isActive === 'myprofile' ? 'text-indigo-electric font-bold' : 'text-russianViolet font-normal'"
              @click="isActive = 'myprofile'">My Profile</RouterLink>
            <RouterLink :to="{ name: 'changepw' }"
              :class="isActive === 'changepw' ? 'text-indigo-electric font-bold' : 'text-russianViolet font-normal'"
              @click="isActive = 'changepw'">Change Password</RouterLink>
            <RouterLink :to="{ name: 'teammembers' }"
              :class="isActive === 'teammembers' ? 'text-indigo-electric font-bold' : 'text-russianViolet font-normal'"
              @click="isActive = 'teammembers'">
              Team Members</RouterLink>
          </nav>
          <RouterView />
        </article>
        <article v-if="isActive === 'teammembers'" class="change px-0 w-full">
          <TeamDetails />
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "/src/components/Avatar.vue";
import BTN from "/src/components/Btn.vue";
import TeamDetails from "/src/components/TeamDetails.vue";
import { RouterView, RouterLink } from "vue-router";
export default {
  components: {
    Avatar,
    RouterView,
    RouterLink,
    TeamDetails,
    BTN,
  },
  data() {
    return {
      isActive: 'myprofile'
    }
  },

};
</script>

<style scoped>
.account,
.multi,
.change {
  box-shadow: 0px 2px 4px -2px rgba(18, 8, 63, 0.02), 0px 4px 4px 0px rgba(0, 0, 0, 0.04);
  @apply py-5 mb-3 bg-white relative;
}

.multi nav>* {
  @apply pb-1 hover:text-indigo-electric hover:font-bold hover:border-b-2 hover:border-indigo-electric
}

@media only screen and (max-width:1050px) {
  .account-settings {
    @apply flex-col gap-5 items-center
  }

  .account {
    @apply w-full max-w-full
  }

  .multi {
    @apply w-full min-w-full
  }

  .multi nav {
    @apply gap-4
  }
}
</style>
