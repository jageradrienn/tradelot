<template>
  <header>
    <div
      class="flex flex-row-reverse lg:flex-row justify-between items-center flex-1 bg-white sm:py-3 px-8 h-[48px] sm:h-[64px]">
      <Hamburger class="cursor-pointer" @click="toggleHamburger" />
      <div class="relative px-5 cursor-pointer" @click="toggleSubMenu">
        <Avatar direction="flex-row" :name="viewportWidth < 767 ? '' : 'Benjamin Vass'" weight="font-medium"
          :picSize="viewportWidth < 767 ? '40px' : '48px'" />
        <Profile v-show="showSubMenu" @update:profilModal="showSubMenu = $event" />
      </div>
    </div>
  </header>
</template>

<script>
import Avatar from "/src/components/Avatar.vue";
import Profile from "/src/components/Profile.vue";
import Hamburger from "/src/components/icons/Menu.vue"

export default {
  components: {
    Avatar,
    Profile,
    Hamburger,
  },
  props: {
    isSidebar: Boolean,
  },

  data() {
    return {
      showSubMenu: false,
      isClose: Boolean,
      viewportWidth: window.innerWidth,
    };
  },

  methods: {
    toggleSubMenu() {
      this.showSubMenu = !this.showSubMenu;
    },
    toggleHamburger() {
      this.$emit('toggle-hamburgerEvent');
    },


    updateViewport() {
      this.viewportWidth = window.innerWidth;
    }
  },
  mounted() {
    window.addEventListener("resize", this.updateViewport)
  },

  destroyed() {
    window.removeEventListener("resize", this.updateViewport)
  },
};
</script>

<style scoped></style>
