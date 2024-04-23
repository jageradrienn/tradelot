<template>
  <transition name="fade">

    <div
      class="settings-modal absolute top-[45px] sm:top-[55px] w-[200px] h-[80px] px-8 py-1 bg-lavender50 flex flex-col items-center justify-evenly z-30 rounded-b-xl"
      @click.stop>
      <RouterLink to="/settings" class="text-indigo400" @click="this.$emit('update:profilModal', false)"> Settings
      </RouterLink>
      <RouterLink to="/login" class="text-indigo400" @click="this.$emit('update:profilModal', false)"> Log In
      </RouterLink>
    </div>

  </transition>
</template>

<script>
import { RouterLink } from "vue-router";
import LineIndigo from "/src/components/icons/LineIndigo.vue";

export default {
  components: {
    RouterLink,
    LineIndigo,
  },
};
</script>

<style scoped>
.settings-modal {
  left: 0px;
}

@media only screen and (min-width:1024px) {
  .settings-modal {
    right: 0px;
    left: initial;
  }
}
</style>
