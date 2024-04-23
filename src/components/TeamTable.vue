<template>
  <div>
    <table class="flex flex-col sm:table w-full ">
      <thead class="border-b border-neutrals-200">
        <tr class="h-[50px] px-5 pb-5 ">
          <th v-for="thItem in tableTh" :key="thItem.title" class="hidden sm:table-cell px-4 sm:px-8 font-bold">
            {{ thItem.title }}
          </th>
        </tr>
      </thead>
      <tbody class="flex-1 w-full">
        <tr v-for="trItem in tableTr" :key="trItem.id" class="border-b border-neutrals-200">
          <td class="py-5">
            <Avatar v-if="trItem.cardname" :url="trItem.url" :name="trItem.cardname" fontSize="text-lg"
              weight="font-bold" picSize="64px" efontSize="text-base" ecolor="text-neutrals-700" eweight="font-medium"
              class="pl-4 sm:pl-8 pr-1"></Avatar>
            <p v-if="trItem.name">{{ trItem.name }}</p>
          </td>
          <td class="pl-4 sm:pl-8 sm:text-right sm:pr-8 mb-5 sm:mb-0">
            <p>{{ trItem.date }}</p>
          </td>
          <td class="pl-4 sm:pl-0 mb-5 sm:mb-0">
            <Editors :cardname="trItem.cardname" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Editors from "/src/components/Editors.vue";
import Avatar from "/src/components/Avatar.vue";
export default {
  components: {
    Editors,
    Avatar,
  },

  props: {
    tableTh: {
      type: Object,
      default: () => ({}),
    },

    tableTr: {
      type: Object,
      default: () => ({}),
    },

    weight: {
      type: String,
      default: "font-bold",
    },
  },
};
</script>

<style scoped>
tbody tr:last-of-type {
  @apply border-none;
}

thead tr th:first-child {
  text-align: left;
}

thead tr th:nth-child(2) {
  @apply text-right;
}

thead tr th:last-child {
  @apply text-right;
}

tbody tr td:first-child {
  text-align: left;
}

tbody tr td:nth-child(2) {
  @apply text-right;
}

tbody tr td:last-child {
  @apply text-right;
}


@media only screen and (max-width:640px) {
  thead tr th:first-child {
    @apply table-cell
  }

  tbody tr {
    @apply flex flex-col gap-2 justify-center items-start w-full h-full lg:table-row lg:h-fit
  }


}
</style>
