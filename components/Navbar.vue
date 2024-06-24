<template>
  <div class="flex w-full flex-col">
    <header class="bg-green-900 py-5 px-4 sm:px-10 md:px-24">
      <!-- Navigation for larger screens -->
      <nav
        class="hidden md:flex md:justify-between md:gap-5 md:text-sm lg:gap-10"
      >
        <div class="text-xl lg:text-3xl font-medium">RICHIECODING</div>
        <div class="flex gap-20">
          <NuxtLink
            v-for="page in pages"
            :key="page.name"
            :to="page.path"
            class=""
            ><div
              class="text-xl lg:text-3xl hover:border-yellow-400 pb-1 hover:border-b-4 inline font-medium"
              :class="
                route.path === page.path ? 'border-yellow-400 border-b-4' : ''
              "
            >
              {{ page.name }}
            </div></NuxtLink
          >
        </div>
        <div><LanguageSelector/></div>
      </nav>

      <!-- Mobile menu with centered title -->
      <Sheet>
        <div class="flex items-center justify-between w-full md:hidden">
          <SheetTrigger as-child>
            <Button size="icon" class="bg-transparent shrink-0">
              <Icon
                icon="material-symbols:menu"
                class="hover:text-yellow-400"
                width="40"
                height="40"
              />
            </Button>
          </SheetTrigger>
          <div class="text-3xl font-medium">RICHIECODING </div>
          <div><LanguageSelector class="sm:hidden"/></div>
        </div>

        <SheetContent side="top" class="bg-green-900">
          <nav class="grid gap-4 text-center text-lg font-medium">
            <a href="#" class="flex items-center gap-2 text-lg font-semibold">
              <span class="sr-only">Acme Inc</span>
            </a>
            <NuxtLink
              v-for="page in pages"
              :key="page.name"
              :to="page.path"
              class=""
              ><div
                class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline" :class="page.path === route.path ? 'border-yellow-400 border-b-4' : ''"
              >
                <SheetClose>{{ page.name }}</SheetClose>
              </div></NuxtLink
            >
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  </div>
</template>
<script setup lang="ts">
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/vue";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Skills from "./Skills.vue";
import LanguageSelector from "./LanguageSelector.vue";


const route = useRoute();

const pages = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About me",
    path: "/aboutme",
  },
];
</script>
<style scoped>

</style>
