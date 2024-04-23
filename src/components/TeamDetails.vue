<template>
  <div class="flex flex-col w-full md:flex-row md:justify-between md:items-start gap-3 mt-4">
    <div class="flex flex-col items-start justify-center pl-4 sm:pl-8 mb-8 ">
      <p class="text-xl sm:text-2xl text-indigo-electric font-bold">Team Members</p>
      <p class="text-sm sm:text-base">
        Add a new team member to your team, allowing them to collaborate with you.
      </p>
    </div>
    <BTN bgColor="bg-indigo-electric" label="Add team member" textColor="text-white"
      url="/src/components/icons/Profile-add.vue" wrapReverse="flex flex-row flex-wrap" radius="rounded"
      width="min-w-[calc(100%-40px)] md:min-w-[200px]" class="px-5 py-3 cursor-pointer md:mr-8 mb-8 font-medium mx-auto"
      @click="toggleAddmodal" />
  </div>
  <TeamHead title="Admin users" desc="Administrator users perform any action." class="mb-5" />
  <TeamTable :tableTh="model.ThItems" :tableTr="model.TrItems1" />
  <TeamHead title="Editor users" desc="Editor users have the ability to read, create and update." class="mt-8" />
  <TeamTable :tableTh="model.ThItems" :tableTr="model.TrItems2" />
  <AddModal v-show="isShowing" @update:showModal="isShowing = $event" />
</template>

<script>
import TeamHead from "/src/components/TeamHead.vue";
import BTN from "/src/components/Btn.vue";
import TeamTable from "/src/components/TeamTable.vue";
import AddModal from "/src/components/modals/AddMembersModal.vue";

export default {
  components: {
    TeamHead,
    BTN,
    TeamTable,
    AddModal,
  },

  data() {
    return {
      model: {
        ThItems: [
          { title: "Name" },
          { title: "Date added" },
          { title: "Edit" },
        ],
        TrItems1: [
          {
            id: "1",
            url: "/src/assets/svg/abigal.vue",
            cardname: "Abigal Smith",
            email: "abigal.smith@tradelot.hu",
            name: "",
            date: "Jan 22, 2024",
          },
          {
            id: "2",
            url: "/src/assets/svg/christofer.vue",
            cardname: "Christofer Smith",
            nametd: "",
            date: "Jan 22, 2024",
          },
        ],
        TrItems2: [
          {
            id: "1",
            url: "/src/assets/svg/samantha.svg",
            cardname: "Samantha Perkins",
            name: "",
            date: "Jan 22, 2024",
          },
        ],
      },
      isShowing: false,
    };
  },

  methods: {
    toggleAddmodal() {
      this.isShowing = !this.isShowing;
    },
  },
};
</script>

<style scoped></style>
