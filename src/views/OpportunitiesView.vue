<template>
  <main class="p-2 mb-8 sm:p-8 h-fit">
    <section>
      <Avatar direction="flex-row-reverse" name="Opportunities" fontSize="text-3xl" weight="font-bold" padding="pr-2"
        color="text-indigo-electric" url="/src/components/icons/Shop.vue" picSize="width: 40px, height: 40px"
        class="justify-end " />
      <div class="w-full">
        <Inputs leftIcon="/src/components/icons/Search.vue" for="searchLink" id="searchLink" name="searchLink"
          height="50px" placeholder="Search product or seller..." type="search" placeholderColor="indigo-300"
          absoluteLeft="left-3" absoluteBottom="bottom-[18px]" borderColor="indigo-300" iconSize="h-[16px] w-[16px]"
          class="searchModal placeholder:text-indigo-300 my-8 " />
      </div>
    </section>
    <section class="mb-5">
      <h1 class="text-xl font-bold mb-2 sm:text-3xl ">Buyers</h1>
    </section>
    <BuyersCard url="/src/assets/svg/yamoto.svg" name="Joe Yamoto" contact="+36 30 012 7610" date="07-12-2023 11:59"
      buyer="/src/components/icons/BuyerWTB.vue" />
    <section>
      <article v-for="item in joeProducts" :keys="item.id" class="bg-white box mb-5">
        <BuyedProductsCard :dataItem=item @update:toggleActive="toggleActive(item.id)"
          :isOpen="activeId === item.id ? true : false" />
        <div v-if="activeId === item.id">
          <Avatar name="Top 3 Sellers" weight="font-bold" fontSize="text-2xl" url="/src/components/icons/Ranking.vue"
            picSize="32px" class="px-8 py-5 bg-lavender50" />
          <div v-for="item in top3" :keys="item.id" class="odd:bg-lavender50 even:bg-white">
            <TopSellersCard :dataItem=item />
          </div>
          <div class="pt-5 pb-5 pl-8 bg-lavender50">
            <a href="#"><u class="font-medium">Show more</u></a>
          </div>
        </div>
      </article>
    </section>

    <div class="mt-8 mb-10 pl-8">
      <a href="#"><u class="font-medium">Show more</u></a>
    </div>
    <BuyersCard url="/src/assets/svg/christofer.svg" name="Christofer Smith" contact="christofer.smith@tradelot.hu"
      date="07-12-2023 11:59" buyer="/src/components/icons/BuyerWTB.vue" />
    <section>
      <article v-for="item in christoferProducts" :keys="item.id" class="bg-white box mb-5">
        <BuyedProductsCard :dataItem=item @update:toggleActive="toggleActive(item.id)"
          :isOpen="activeId === item.id ? true : false" />
        <div v-if="activeId === item.id">
          <Avatar name="Top 3 Sellers" weight="font-bold" fontSize="text-2xl" url="/src/components/icons/Ranking.vue"
            picSize="32px" class="px-8 py-5 bg-lavender50" />
          <div v-for="item in top3" :keys="item.id" class="odd:bg-lavender50 even:bg-white">
            <TopSellersCard :dataItem=item />
          </div>
          <div class="pt-5 pb-5 pl-8 bg-lavender50">
            <a href="#" target="_blank"><u class="font-medium">Show more</u></a>
          </div>
        </div>
      </article>
    </section>


  </main>
</template>

<script>
import Avatar from "/src/components/Avatar.vue"
import Inputs from "/src/components/Inputs.vue"
import BTN from "/src/components/Btn.vue"
import BuyedProductsCard from "/src/components/cards/BuyedProductsCard.vue"
import BuyersCard from "/src/components/cards/BuyersCard.vue"
import TopSellersCard from "/src/components/cards/TopSellersCard.vue"
export default {
  components: {
    Avatar,
    Inputs,
    BTN,
    BuyedProductsCard,
    BuyersCard,
    TopSellersCard,
  },

  data() {
    return {
      activeId: '',
      isOpen: false,
      joeProducts: [
        {
          id: "0",
          name: "Xiaomi Redmi Note 12 5G Dual Sim 4GB RAM 128GB",
          EAN: "8806094837698",
          SKU: "SM-A54 6BZKDE UE",
          quantity: "400",
          target: "134,65",
          price: "113-128 EUR",
        },
        {
          id: "1",
          name: "Xiaomi TV Stick 4K",
          EAN: "45673567674756",
          SKU: "26919",
          quantity: "100",
          target: "50",
          price: "40-45 EUR",
        },
        {
          id: "2",
          name: "Apple iPhone 15 Pro 256GB",
          EAN: "45673567674756",
          SKU: "26919",
          quantity: "3000",
          target: "550",
          price: "600-650 EUR",
        },
      ],

      christoferProducts: [
        {
          id: "3",
          name: "Apple iPhone 15 Pro Max 256GB Natural titanium",
          EAN: "34563457645745",
          SKU: "DRGE34535",
          quantity: "100",
          target: "650",
          price: "600-630 EUR",
        },
      ],

      top3: [
        {
          id: "0",
          url: "/src/assets/svg/samantha.svg",
          buyer: "/src/components/icons/SellerWTS.vue",
          name: "Samantha Perkins",
          tel: "+36 30 012 7610",
          email: "",
          quantity: "50",
          price: "142",
          priceIcon: "/src/components/icons/Dislike.vue",
          priceColor: "text-red",
          date: "07-12-2023 11:59",
          contact: "Abraham Royal",
          contactIcon: '',
        },
        {
          id: "1",
          name: "Abigel Smith",
          url: "/src/assets/svg/abigal.svg",
          buyer: "/src/components/icons/SellerWTS.vue",
          tel: "",
          email: "abigel.smith@tradelot.io",
          quantity: "1200",
          price: "110",
          priceIcon: "/src/components/icons/Greenlike.vue",
          priceColor: "text-green",
          date: "08-12-2023 08:22",
          contact: "Message",
          contactIcon: "/src/components/icons/Mail-fill.vue",
        },
        {
          id: "2",
          name: "Anonymus Price",
          url: "/src/components/icons/Profile.vue",
          buyer: "/src/components/icons/SellerWTS.vue",
          tel: "+36 00 000 000",
          email: "",
          quantity: "300",
          price: "125",
          priceIcon: "/src/components/icons/LikeDislike.vue",
          priceColor: "text-orange",
          date: "30-11-2023 10:27",
          contact: "Message",
          contactIcon: "/src/components/icons/Whatsapp-fill-white.vue",
        }
      ]
    }
  },

  methods: {
    toggleActive(id) {
      if (this.activeId === id) {
        this.activeId = null;
      }
      else {
        this.activeId = id;
      }
    }
  },

};
</script>

<style scoped></style>
