<script setup lang="ts">

import { Button } from '@/components/ui/button'
import { Icon } from '@iconify/vue';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
</script>

<template>
  <div class="flex w-full flex-col">
    <header class="bg-green-900 py-3 px-10 md:px-24">
      <!-- Navigation for larger screens -->
      <nav class="hidden md:flex md:justify-between md:gap-5 md:text-sm lg:gap-10">
        <div class="text-xl">RICHIECODING</div>
        <div class="flex gap-20">
          <NuxtLink to="/" class=""><div class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline">Home</div></NuxtLink>
            <NuxtLink to="/projects" class=""><div class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline">Projects</div></NuxtLink>
            <NuxtLink to="/aboutme" class=""><div class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline">About me</div></NuxtLink>
        </div>
        <div></div>
      </nav>

      <!-- Mobile menu with centered title -->
      <Sheet>
        <div class="flex items-center justify-between w-full md:hidden">
          <SheetTrigger as-child>
            <Button size="icon" class="bg-transparent shrink-0">
              <Icon icon="material-symbols:menu" class="hover:text-yellow-400" width="32" height="32"/>
            </Button>
          </SheetTrigger>
          <div class="text-xl">RICHIECODING</div>
          <div></div>
        </div>
        
        <SheetContent side="top" class="bg-green-900">
          <nav class="grid gap-4 text-center text-lg font-medium">
            <a href="#" class="flex items-center gap-2 text-lg font-semibold">
              <span class="sr-only">Acme Inc</span>
            </a>
            <NuxtLink to="/" class=""><div class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline"><SheetClose>Home</SheetClose></div></NuxtLink>
            <NuxtLink to="/projects" class=""><div class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline"><SheetClose>Projects</SheetClose></div></NuxtLink>
            <NuxtLink to="/aboutme" class=""><div class="text-xl hover:border-yellow-400 pb-1 hover:border-b-4 inline"><SheetClose>About me</SheetClose></div></NuxtLink>
          </nav>
        </SheetContent>
      </Sheet>

      <!-- Right side of the header -->
      <div class="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
        <form class="ml-auto flex-1 sm:flex-initial">
          <div class="relative"></div>
        </form>
      </div>
    </header>
  </div>
</template>
