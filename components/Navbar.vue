<template>
  <div class="sm:flex sm:flex-col">
    <div class="flex bg-green-950 py-3 justify-between items-center w-full">
      <div class="flex items-center">
        <Icon 
          v-if="!menuOpen"
          @click="toggleMenu"
          icon="material-symbols:menu"
          class="hidden sm:block hover:text-yellow-400 ml-3"
          width="32"
          height="32"
        />
        <Icon 
          @click="toggleMenu"
          v-else
          icon="carbon:close-outline"
          class="hidden sm:block hover:text-yellow-400 ml-3"
          width="32"
          height="32"
        />
      </div>
      <div class="text-2xl flex-grow text-center">RICHIECODING</div>
      <div class="sm:w-8"></div> 
    </div>
    <div
      class="flex absolute bottom-0 bg-green-950 w-full justify-center text-xl gap-24 py-3 sm:static sm:flex-col sm:gap-3 sm:justify-center sm:items-center" :class="menuOpen ? '' : 'sm:hidden'"
    >
      <div>Home</div>
      <div>Project</div>
      <div>About me</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";

const menuOpen= ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

</script>

<style scoped>
.custom-shadow {
  box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
}
</style>
