<template>
  <main class="px-2 pt-5 pb-20 sm:pt-8 sm:px-8 h-fit overflow-y-none ">
    <div v-if="viewportWidth <= 450" class="flex gap-2 pb-4">
      <p class="text-neutrals-400 text-2xl">Offers</p>
      <ChevronRightIcon class="-mr-1 h-6 w-6 text-russianViolet" aria-hidden="true" />
      <p class="text-russianViolet font-bold text-base">Stock List</p>
    </div>
    <section class="flex flex-col gap-8">
      <div class="flex flex-col items-start lg:flex-row lg:justify-between ">
        <div class="flex justify-between items-center w-full">
          <Avatar name="Stock list" url="/src/components/icons/Offerpurple.vue"
            :picSize="viewportWidth <= 450 ? '30px' : '32px'" fontSize="text-3xl" color="text-indigo-electric"
            class="flex-row-reverse justify-end remove-gap-5" />
          <div v-if="viewportWidth <= 450" class="flex flex-1 items-center justify-end gap-2">
            <Svg src="/src/components/icons/Search_white.vue" alt="search" class="w-[36px] h-[36px] cursor-pointer"
              @click="searchToggle" />
            <Svg src="/src/components/icons/More.vue" alt="more" class="w-[36px] h-[36px] cursor-pointer "
              @click="iMenusToggle" />
          </div>
          <div v-if="isShowIMenus" class="absolute inset-0 z-30 ">
            <IMenusModal @update:iMenus="isShowIMenus = $event" @update:AutoProd="isAutomaticNewProduct = $event"
              @update:Manualprod="isManualNewProduct = $event" />
          </div>
        </div>
        <div v-if="isShowSearch" class="transition-opacity ease-in-out duration-150 w-[83%]">
          <Inputs leftIcon="/src/components/icons/Search.vue" for="searchLink" id="searchLink" name="searchLink"
            height="50px" placeholder="Search product..." type="search" absoluteLeft="left-3"
            absoluteBottom="bottom-[16px]" borderColor="indigo-300" iconSize="h-16px] w-[16px]"
            class="searchModal placeholder:text-indigo-300" />
        </div>
        <div v-if="viewportWidth > 450"
          class="flex flex-1 flex-col w-full items-start mt-8 lg:mt-0 md:flex-row md:justify-start lg:justify-end md:items-center gap-5">
          <BTN bgColor="bg-indigo-electric" width="w-full md:w-fit" height="h-[40px]" label="Add Products"
            fontSize="text-sm" textColor="text-white" fontWeight="font-semibold" borderColor="border-indigo-300"
            borderWidth="border" radius="rounded" url="/src/components/icons/Addproduct.vue" class="px-5 py-2"
            @click="togglePopup('isAutomaticNewProduct')" />
          <BTN bgColor="bg-indigo-200" width="w-full md:w-fit" height="h-[40px]" label="Add Porduct Manually"
            fontSize="text-sm" textColor="text-white" fontWeight="font-semibold" radius="rounded"
            url="/src/components/icons/Addproductbox.vue"
            class="px-5 py-2 hover:bg-indigo-300 disabled:bg-indigo-200 disabled:text-white"
            @click="togglePopup('isManualNewProduct')" />
          <BTN bgColor="bg-russianViolet" width="w-full md:w-fit" height="h-[40px]" label="Export" fontSize="text-sm"
            textColor="text-white" fontWeight="font-semibold" radius="rounded" url="/src/components/icons/Export.vue"
            class="px-5 py-2" />
        </div>

      </div>
      <div v-if="viewportWidth >= 1024"
        class="xl:w-[90%] 0xl:w-full grid lg:grid-cols-[calc(60%-20px),auto,auto] xl:grid-cols-[calc(71%-20px),auto,auto] lg:gap-5 xl:gap-[30px] justify-between items-center">
        <div class="input-link relative">
          <Inputs leftIcon="/src/components/icons/Share.vue" for="offerLink" id="offerLink" name="offerLink"
            height="50px" placeholder="https://tradelot.io/pricelist/user/products" type="text" rightBTN="true"
            absoluteBTNRight="right-1" absoluteBTNBottom="bottom-[5px]" absoluteLeft="left-3" absoluteBottom="bottom-4"
            class="w-full" />
        </div>
        <div class="flex lg:flex-col lg:justify-center xl:flex-row xl:items-center min-w-[180px]">
          <div class="mr-2 w-[39px] h-[26.5px] rounded-2xl border border-indigo-300 bg-lavender50 relative">
            <Svg src="/src/components/icons/Ellipse2.vue" alt="ellipse " />
          </div>
          <p class="font-medium text-sm xl:text-[0.9375rem] leading-6">Hide without price</p>
        </div>
        <button class="font-medium text-[0.9375rem] underline min-w-[85px] ">
          Reset filters
        </button>
      </div>
      <div v-if="viewportWidth > 450"
        class="mx-auto w-full grid grid-cols-[100%] md:grid-cols-[83%,auto] gap-8 justify-between items-center">
        <div class="relative">
          <Inputs leftIcon="/src/components/icons/Search.vue" for="searchLink" id="searchLink" name="searchLink"
            height="50px" placeholder="Search product..." type="search" placeholderColor="indigo-300"
            absoluteLeft="left-3" absoluteBottom="bottom-4" borderColor="indigo-300" />
        </div>
        <BTN bgColor="bg-transparent" width="w-full" height="h-[50px]" label="Share" fontSize="text-sm"
          textColor="text-indigo-electric" fontWeight="font-semibold" radius="rounded"
          borderColor="border border-indigo-electric" url="/src/components/icons/Share.vue" class="px-5 py-2" />
      </div>
    </section>
    <section>
      <NewProductAutomaticModal v-show="isAutomaticNewProduct" @update:AutoProd="isAutomaticNewProduct = $event"
        @update:dataModal="isShowDataModal = $event" />
      <NewProductManualModal v-show="isManualNewProduct" @update:Manualprod="isManualNewProduct = $event" />
      <DataProcessModal v-show="isShowDataModal" :showModal="isShowDataModal"
        @update:dataModal="isShowDataModal = $event" @update:AutoProd="isAutomaticNewProduct = $event"
        @update:checkDetails="isShowCheckModal = $event" />
      <CheckDetailsModal v-show="isShowCheckModal" @update:checkDetails="isShowCheckModal = $event"
        :products="productsData" />
    </section>
    <!-- Data Tables -->
    <section class="table-section mt-8 h-[65vh] lg:h-[54vh] overflow-y-auto relative w-full ">
      <table class="bg-white text-left flex flex-col lg:table lg:h-[60%]">
        <thead class="z-10 sticky top-0 bg-white/90 w-full border-b-[2px] border-indigo-300 ">
          <tr class="h-[52px] py-3 lg:h-fit lg:py-5">
            <th class="lg:pl-8 max-w-[40%]">Product
              <span>
                <Svg
                  :src="viewportWidth < 1024 ? '/src/components/icons/Descending.vue' : '/src/components/icons/Default.vue'"
                  alt="icon" class="w-[20px] h-[20px] inline-block" />
              </span>
            </th>
            <th class="w-[23%] hidden lg:flex flex-col ">
              <p>EAN</p>
              <small class="text-xs">SKU</small>
            </th>
            <th class="w-[10%] hidden lg:table-cell">
              <div class="flex items-center">
                <span>Region</span>
                <Svg
                  :src="viewportWidth < 1024 ? '/src/components/icons/Descending.vue' : '/src/components/icons/Default.vue'"
                  alt="icon" class="w-[20px] h-[20px] ml-1" />
              </div>
            </th>
            <th class="w-[10%] hidden lg:table-cell">
              <div class="flex items-center">
                <span>Stock</span>
                <Svg
                  :src="viewportWidth < 1024 ? '/src/components/icons/Descending.vue' : '/src/components/icons/Default.vue'"
                  alt="icon" class="w-[20px] h-[20px] ml-1" />
              </div>
            </th>
            <th class="w-[10%] hidden lg:table-cell">
              <div class="flex items-center">
                <span>Price</span>
                <Svg
                  :src="viewportWidth < 1024 ? '/src/components/icons/Descending.vue' : '/src/components/icons/Default.vue'"
                  alt="icon" class="w-[20px] h-[20px] ml-1" />
              </div>
            </th>
            <th class="w-[10%] hidden lg:table-cell"></th>
          </tr>
        </thead>

        <tbody class="flex-1 w-full ">
          <tr v-for="item in productsData" :keys="item.id" class="border-b-[2px] border-indigo-300 h-[96px] p-5"
            :class="viewportWidth < 1024 && activeID === item.id ? 'bg-indigo-100' : 'bg - white'">
            <td class="lg:pl-8 w-full lg:max-w-[40%] lg:table-cell cursor-pointer" id="name"
              @click="toggleTableDetails(item.id)">
              <div class="flex gap-5 items-start justify-between">
                <p class="font-bold">{{ item.name }}</p>
                <Svg v-if="viewportWidth < 1024 && activeID !== item.id" src="/src/components/icons/Ichevron.vue"
                  alt="icon" class="w-[16px] h-[16px]" />
                <Svg v-if="viewportWidth < 1024 && activeID === item.id" src="/src/components/icons/Chevron-up.vue"
                  alt="icon" class="w-[16px] h-[16px]" />
              </div>
            </td>
            <td v-show="viewportWidth >= 1024 || activeID === item.id" :data-label="'SKU: ' + item.SKU"
              class="w-full lg:w-[20%] lg:table-cell" id="EANSKU">
              <p class="font-medium bg-lavender50 lg:bg-transparent p-2 lg:p-0 mb-2 lg:mb-0">EAN: {{ item.EAN }}</p>
              <small class="text-xs font-medium hidden lg:table-cell">SKU:
                {{ item.SKU }}</small>
            </td>
            <td v-show="viewportWidth >= 1024 || activeID === item.id" class="w-full lg:w-[8%] lg:table-cell ">
              <Svg v-if="viewportWidth < 1024" src="/src/components/icons/Location.vue"
                class="inline pr-1 w-[24px] h-[24px]" />{{ item.region }}
            </td>
            <td v-show="viewportWidth >= 1024" class=" lg:w-[10%] lg:table-cell">{{ item.stock }} pcs</td>
            <td v-show="viewportWidth >= 1024" class=" lg:w-[10%] lg:table-cell font-bold" id="price">{{ item.price }}
            </td>

            <div v-show="viewportWidth < 1024" class="flex justify-start items-center gap-2" id="StockPrice">
              <p class="bg-lavender50 px-2 py-2 w-1/2">{{ item.stock }} pcs</p>
              <p class="font-bold bg-lavender50 px-2 py-2 w-1/2" id="price">{{ item.price }}
              </p>
            </div>
            <td v-if="viewportWidth >= 1024 || activeID === item.id">
              <div class="flex justify-end gap-5 ml-5">
                <BTN iconSize="w-[20px] h-[20px]" :label="viewportWidth < 1024 ? 'Edit' : ''"
                  :url="viewportWidth < 1024 ? '/src/components/icons/Iedit.vue' : '/src/components/icons/Edit.vue'"
                  :class="(viewportWidth < 1024) ? 'px-5 py-2 bg-indigo-electric hover:bg-indigo-700 w-1/2 h-[50px] text-sm text-white font-semibold border border-indigo-300' : null" />
                <BTN iconSize="w-[20px] h-[20px]" :label="viewportWidth < 1024 ? 'Delete' : ''"
                  :url="viewportWidth < 1024 ? '/src/components/icons/ITrash.vue' : '/src/components/icons/Trash.vue'"
                  :class="(viewportWidth < 1024) ? 'px-5 py-2 bg-transparent hover:bg-indigo-100 w-1/2 h-[50px] text-sm text-indigo-electric font-semibold border border-indigo-300' : ''" />
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot class="z-20 sticky bottom-0 bg-white h-[75px]">
          <tr v-if="viewportWidth >= 1024">
            <td colspan="6">
              <Pagination />
            </td>
          </tr>
          <Pagination v-else=" viewportWidth < 1024" />
        </tfoot>
      </table>
    </section>

  </main>
</template>

<script>
import NewProductAutomaticModal from "/src/components/modals/NewProductAutomaticModal.vue";
import NewProductManualModal from "/src/components/modals/NewProductManualModal.vue";
import Avatar from "/src/components/Avatar.vue"
import BTN from "/src/components/Btn.vue"
import IMenusModal from "/src/components/modals/IMenusModal.vue"
import Inputs from "/src/components/Inputs.vue"
import DataProcessModal from "/src/components/modals/DataProcessModal.vue"
import CheckDetailsModal from "/src/components/modals/CheckDetailsModal.vue"
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import Pagination from "/src/components/Pagination.vue";
import Svg from "/src/components/icons/Svg.vue";

export default {
  components: {
    Avatar,
    BTN,
    Inputs,
    NewProductAutomaticModal,
    NewProductManualModal,
    ChevronRightIcon,
    IMenusModal,
    DataProcessModal,
    CheckDetailsModal,
    Pagination,
    Svg
  },

  data() {
    return {
      isAutomaticNewProduct: false,
      isManualNewProduct: false,
      viewportWidth: window.innerWidth,
      isShowSearch: false,
      isShowIMenus: false,
      isShowDataModal: false,
      isShowCheckModal: false,
      productsData: [],
      isShowTableDetails: false,
      activeID: '',
    }
  },

  mounted() {
    window.addEventListener("resize", this.updateViewportWidth);
    fetch("http://localhost:3000/productsData")
      .then(res => res.json())
      .then(data => this.productsData = data)
      .then(err => console.log(err.message));
  },
  destroyed() {
    window.removeEventListener("resize", this.updateViewportWidth);
  },

  methods: {
    togglePopup(btn) {
      btn === "isAutomaticNewProduct" ? this.isAutomaticNewProduct = !this.isAutomaticNewProduct
        : btn === "isManualNewProduct" ? this.isManualNewProduct = !this.isManualNewProduct : null
    },

    updateViewportWidth() {
      this.viewportWidth = window.innerWidth;
    },

    searchToggle() {
      this.isShowSearch = !this.isShowSearch;
      this.isShowIMenus = false;
    },

    iMenusToggle() {
      this.isShowIMenus = !this.isShowIMenus;
      this.isShowSearch = false;
    },

    toggleTableDetails(id) {
      if (this.activeID === id) {
        this.activeID = null;
      }
      else {
        this.activeID = id;
      }

    }
  }
};
</script>
<style scoped>
table thead tr,
table tbody tr {
  height: 86px;
}

table td,
table th {
  @apply pr-5 py-4 text-base lg:text-lg
}

table th:first-child {
  @apply pl-3 lg:pl-8 text-lg font-bold lg:font-medium
}

table th:nth-child(2) {
  @apply py-4
}

table th div span {
  @apply font-medium
}

table tbody tr:last-child {
  @apply border-none
}

.table-section::-webkit-scrollbar {
  width: 5px;
}

.table-section::-webkit-scrollbar-thumb {
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  @apply rounded-sm bg-indigo-electric;
}

@media only screen and (max-width:1023.9px) {

  table td,
  table th {
    @apply px-2 py-0
  }

  #EANSKU,
  table th:nth-child(2) {
    @apply py-0 px-0
  }

  table tbody tr {
    @apply flex flex-col gap-2 w-full h-full pl-5 pr-5 justify-center
  }

  table tbody td {
    @apply bg-lavender50 font-medium
  }

  table tbody tr td:last-child {
    @apply pl-0 pr-0
  }

  table tbody tr td:first-child, #EANSKU, table tbody tr td:last-child {
    @apply bg-transparent
  }

  #EANSKU::after {
    content: attr(data-label);
    @apply block w-full bg-lavender50 px-2 py-2
  }
}

@media only screen and (min-width:1024px) {

  tbody tr {
    @apply hover:bg-indigo-100
  }

  tbody tr:hover #name,
  tbody tr:hover #price {
    @apply text-indigo-electric
  }
}
</style>