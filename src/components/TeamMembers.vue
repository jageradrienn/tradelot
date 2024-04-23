<template>
  <article class="min-h-[310px]">
    <div>
      <div class="w-full px-4 sm:px-8">
        <Avatar url="/src/components/icons/People.vue" picSize="48px" name="Benjamin's Team" email="Manage
          team informations, your team members and their account permissions here." fontSize="text-lg sm:text-2xl"
          weigth="font-bold" efontSize="text-sm sm:text-base" class="mt-8 mb-8 " />
      </div>

      <div class="w-full">
        <TeamHead title="Team Owner" desc="The team owner can rename the team." />
        <div class="flex flex-wrap flex-row gap-6 justify-between pt-6 px-4 sm:px-8 h-fit bg-white">
          <Avatar url="/src/assets/svg/benjamin-vass.svg" name="Benjamin Vass" email="benjamin.vass@tradelot.io"
            class="flex-col items-start remove-items-center xs:flex-row min-w-[100px]" />
          <div class="flex justify-center items-center">
            <Inputs label="Team name" placeholder="Benjamin’s Team" for="teamName" id="teamName" name="teamName"
              fontlabel="font-bold" rightIcon="/src/components/icons/Input Icon Right.vue" absoluteRight="right-3"
              absoluteBottom="bottom-[0.8rem]" height="40px" iconSize="h-[16px] w-[16px]" class="w-[190px] sm:w-fit" />
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import Avatar from "/src/components/Avatar.vue";
import Inputs from "/src/components/Inputs.vue";
import TeamHead from "/src/components/TeamHead.vue";

export default {
  components: {
    Avatar,
    Inputs,
    TeamHead,
  },

};
</script>

<style scoped></style>
