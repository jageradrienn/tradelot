<template>
  <main class="bg-neutrals-50 h-full">
    <aside class="fixed bottom-0 left-0 top-0 bg-gray-800 z-30 overflow-y-auto overscroll-y-auto">
      <Sidebar :isClose="isClose" :isMobileSize="isMobileSize" />
    </aside>
    <transition name="slide-content">
      <div class="content"
        :class="{ 'pl-close': isClose, 'pl-[250px]': (viewportWidth >= 641 && viewportWidth <= 930) && !isClose }">
        <Header :isSidebar="isClose" @toggle-hamburgerEvent="toggleHamburger" />
        <RouterView />
        <Footer />
      </div>
    </transition>
  </main>
</template>

<script>
import { RouterView } from "vue-router";
import Sidebar from "/src/components/layout/Sidebar.vue";
import Header from "/src/components/layout/Header.vue";
import Footer from "/src/components/layout/Footer.vue";
import Avatar from "/src/components/Avatar.vue";

export default {
  name: "App",
  components: {
    Sidebar,
    Header,
    Footer,
    Avatar,
  },

  data() {
    return {
      isClose: false,
      viewportWidth: window.innerWidth,
    }
  },

  computed: {
    isMobileSize() {
      return this.viewportWidth <= 900;
    },
  },

  mounted() {
    this.isClose = this.isMobileSize;
    window.addEventListener("resize", this.updateViewportWidth);
  },

  destroyed() {
    window.removeEventListener("resize", this.updateViewportWidth);
  },

  methods: {
    updateViewportWidth() {
      this.viewportWidth = window.innerWidth;
      this.isClose = this.isMobileSize;
    },

    toggleHamburger() {
      this.isClose = !this.isClose;
    }
  },
}
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.slide-content-leave-active {
  transition-delay: 0.5s;
  transition: all 0.5s ease-out;
}

.slide-content-enter-active {
  transition: all 0.5s ease-out;
}

.slide-content-enter-from,
.slide-content-leave-to {
  width: calc(100%+180px);
  transform: translateX(-180px);
}

.slide-content-enter-to,
.slide-content-leave-from {
  width: calc(100%);
  transform: translateX(0px);
}

aside::-webkit-scrollbar {
  width: 5px;
}

aside::-webkit-scrollbar-thumb {
  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);
  @apply rounded-sm bg-indigo-electric;
}
</style>
