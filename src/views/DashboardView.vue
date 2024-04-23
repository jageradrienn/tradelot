<template>
  <div class="dashboard w-full px-8 pt-8 h-full lg:h-fit overscroll-y-auto">
    <h2 class="text-h2 font-bold pb-5">Statistics</h2>
    <div
      class=" grid grid-col-1 gap-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 sm:gap-8 w-[calc(100%+50px)] -mx-[25px] lg:mx-auto lg:w-fit">
      <DasboardCard v-for="item in cardData" :key="item.id" :cardData="item" />
    </div>
    <h2 class="text-h2 font-bold mb-5 mt-8">Top poducts</h2>
    <div class="flex flex-1 flex-col gap-8 mb-32 lg:flex-row lg:justify-evenly">
      <Top5Card :top5Data="model.top5IncData" title="Top 5 Biggest Price Increase"
        class="w-[calc(100%+50px)] -mx-[25px] mb-8 lg:w-1/2 lg:mx-0 h-fit" />
      <Top5Card :top5Data="model.top5DropData" title="Top 5 Biggest Price Drop"
        class="w-[calc(100%+50px)] -mx-[25px] lg:w-1/2 lg:mx-0 h-fit" />
    </div>
  </div>
</template>

<script>
import DasboardCard from "/src/components/cards/DashboardCard.vue";
import Top5Card from "/src/components/cards/Top5Card.vue";

export default {
  components: { DasboardCard, Top5Card },
  data() {
    return {
      cardData: [
        {
          id: "1",
          url: "/src/components/icons/WtSell.vue",
          title: "WTSell Offers",
          amount: "5000",
          arrow: "/src/components/icons/Up.vue",
          percent: "16.24%",
          graph: "/src/components/icons/GraphUP.vue",
        },
        {
          id: "2",
          url: "/src/components/icons/WtBuy.vue",
          title: "WTBuy Offers",
          amount: "2000",
          arrow: "/src/components/icons/Down.vue",
          percent: "3.57%",
          graph: "/src/components/icons/GraphDown.vue",
        },
        {
          id: "3",
          url: "/src/components/icons/OpenOpp.vue",
          title: "Open Opportunity",
          amount: "25",
          arrow: "/src/components/icons/Up.vue",
          percent: "29.08%",
          graph: "/src/components/icons/GraphUp2.vue",
        },
        {
          id: "4",
          url: "/src/components/icons/ProductWatch.vue",
          title: "Product Watch",
          amount: "0",
          arrow: "/src/components/icons/Upgray.vue",
          percent: "0.00%",
          graph: "/src/components/icons/Graygraph.vue",
        },
      ],

      model: {
        top5IncData: [
          {
            id: "1",
            product: "Xiaomi Redmi Note 12 5G 4GB RAM 128GB",
            price: "$12,863.08",
            percent: "22,20%",
            percentcolor: "text-green",
            url: "/src/components/icons/DiagramUp.vue",
            border: true,
          },

          {
            id: "2",
            product: "Samsung Galaxy A54 A546 5G Dual Sim 8GB RAM 128GB Violet",
            price: "$10,000.08",
            percent: "12,04%",
            percentcolor: "text-green",
            url: "/src/components/icons/DiagramUp.vue",
            border: true,
          },
          {
            id: "3",
            product: "Apple iPhone 15 Pro 128GB blue",
            price: "$111,222.08",
            percent: "3,65%",
            percentcolor: "text-green",
            url: "/src/components/icons/DiagramUp.vue",
            border: true,
          },
          {
            id: "4",
            product: "Apple iPhone 14 Plus 256GB",
            price: "$2,232.08",
            percent: "8,97%",
            percentcolor: "text-green",
            url: "/src/components/icons/DiagramUp.vue",
            border: true,
          },
          {
            id: "5",
            product: "Samsung S23 PLUS 256",
            price: "$2,232.08",
            percent: "8,97%",
            percentcolor: "text-green",
            url: "/src/components/icons/DiagramUp.vue",
            border: true,
          },
          {
            id: "6",
            product: "AMD Ryzen 5 7600",
            price: "$3,444.08",
            percent: "3,11%",
            percentcolor: "text-green",
            url: "/src/components/icons/DiagramUp.vue",
            border: false,
          },
        ],

        top5DropData: [
          {
            id: "1",
            product: "POCO M5s 4+128G grey",
            price: "$12,863.08",
            percent: "22,20%",
            percentcolor: "text-red",
            url: "/src/components/icons/DiagramDown.vue",
            border: true,
          },
          {
            id: "2",
            product: "POCO M5s 4+128G （No charger) grey",
            price: "$10,000.08",
            percent: "12,04%",
            percentcolor: "text-red",
            url: "/src/components/icons/DiagramDown.vue",
            border: true,
          },
          {
            id: "3",
            product: "Xiaomi Redmi Note 12 Pro 4G Dual Sim 6GB RAM 128GB Gray white blue",
            price: "$111,222.08",
            percent: "3,65%",
            percentcolor: "text-red",
            url: "/src/components/icons/DiagramDown.vue",
            border: true,
          },
          {
            id: "4",
            product: "Samsung Galaxy A54 A546 5G Dual Sim 8GB RAM 256GB Awesome Lime",
            price: "$2,232.08",
            percent: "8,97%",
            percentcolor: "text-red",
            url: "/src/components/icons/DiagramDown.vue",
            border: true,
          },
          {
            id: "5",
            product:
              "Samsung Galaxy Tab S6 Lite P613 (2022) 10.4 WiFi 4GB RAM 64GB Oxford Gray",
            price: "$2,232.08",
            percent: "8,97%",
            percentcolor: "text-red",
            url: "/src/components/icons/DiagramDown.vue",
            border: true,
            lastdrop: false,
          },
          {
            id: "6",
            product: "DeLonghi Vertuo Pop .ENV90.A Azur",
            price: "$3,444.08",
            percent: "3,11%",
            percentcolor: "text-red",
            url: "/src/components/icons/DiagramDown.vue",
            border: false,
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.dashboard {
  position: relative;
  z-index: 0;
}

.dashboard::after {
  content: "";
  background-image: url("/src/assets/svg/lavenderBG.svg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
  opacity: 0.5;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
}
</style>
<!--       class="top5-wrapper grid grid-cols-1 gap-y-20 lg:grid-cols-2  lg:justify-evenly lg:gap-10" -->