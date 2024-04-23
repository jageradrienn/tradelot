<template>
  <nav class="sidebar-nav flex flex-col nav-transform" :class="{
    'p-2 mt-4': isClose || isMobileSize || (!isClose && isMobileSize),
    'p-6 mt-0': !isClose && !isMobileSize,
    'popup-sidebar': (!isClose && isMobileSize),
  }">
    <RouterLink to="/dashboard" class="flex flex-1 items-start gap-1 pl-3 flex-nowrap">
      <TradelotIcon class="mb-10 mt-3 h-[40px] w-[40px]" />
      <transition name="fade">
        <p v-if="(!isClose && !isMobileSize) || (!isClose && isMobileSize)"
          class="text-white text-4xl pt-3 tracking-tighter w-[250px]">
          Tradelot
        </p>
      </transition>
    </RouterLink>

    <div>
      <div v-for="(item, index) in menuData" :key="index">
        <template v-if="item.menuhead">
          <transition name="fade">
            <p v-if="(!isClose && !isMobileSize) || (!isClose && isMobileSize)"
              class="px-4 pt-6 pb-3 text-xs text-indigo-tropical">
              {{ item.menuhead }}
            </p>
          </transition>
        </template>

        <template v-else>
          <RouterLink :to="item.link">
            <MenuItem :isClose="isClose" :src="item.src" :label="item.title" :isMobileSize="isMobileSize"
              class="hover:bg-indigo-800" />
          </RouterLink>
        </template>
      </div>
      <transition name="fade">
        <p v-if="(!isClose && !isMobileSize) || (!isClose && isMobileSize)"
          class="mt-[3.75rem] px-4 pb-3 text-lavender50 text-base">
          Product Manager
        </p>
      </transition>
    </div>
  </nav>
</template>

<script>
import MenuICONItem from "/src/components/MenuICONItem.vue";
import MenuItem from "/src/components/MenuItem.vue";
import { RouterLink } from "vue-router";
import Svg from "/src/components/icons/Svg.vue";
import TradelotIcon from '/src/components/icons/Tradelot.vue'
export default {
  components: {
    MenuItem,
    RouterLink,
    MenuICONItem,
    Svg,
    TradelotIcon
  },

  props: {
    isClose: Boolean,
    isMobileSize: Boolean,
  },

  data() {
    return {
      menuData: [
        {
          src: "/src/components/icons/Dashboard.vue",
          title: "Dashboard",
          link: "/dashboard",
        },
        { menuhead: "OFFERS" },
        { src: "/src/components/icons/Offer.vue", title: "Stock List", link: "/offers" },
        { menuhead: "FOCUS" },
        {
          src: "/src/components/icons/Mobile.vue",
          title: "Product Watch",
          link: "/productWatch",
        },
        {
          src: "/src/components/icons/Opportunities.vue",
          title: "Opportunities",
          link: "/opportunities",
        },
        { menuhead: "CRM" },
        {
          src: "/src/components/icons/Company.vue",
          title: "Companies",
          link: "/companies",
        },
        {
          src: "/src/components/icons/Contacts.vue",
          title: "Contacts ",
          link: "/contacts",
        },
        { menuhead: "CHANNELS" },
        { src: "/src/components/icons/Mail-fill.vue", title: "Email", link: "/email" },
        {
          src: "/src/components/icons/Whatsapp.vue",
          title: "WhatsApp",
          link: "/whatsApp",
        },
      ],

    };
  },

};
</script>

<style scoped>
.slide-leave-active {
  transition: transform 0.5s ease-out;
}

.slide-enter-active {
  transition: transform 0.5s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(-150%);
}

.slide-enter-to,
.slide-leave-from {
  transform: translateX(0);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.6s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
