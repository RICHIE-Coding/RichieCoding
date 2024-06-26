<template>
  <div>
    <div class="text-center text-6xl mb-6">Skills</div>
    <div class="flex flex-wrap gap-10">
      <div
        v-for="(tech, index) in technology"
        :key="tech.key"
        class="w-1/4 max-w-[150px] f"
      >
        <div class="flex flex-col items-center">
          <Icon class="w-[50px] h-[100px]" :icon="tech" />
          <p>{{ index }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { reactive } from 'vue';

const technology = reactive({
  html: 'skill-icons:html',
  css: 'skill-icons:css',
  javascript: 'logos:javascript',
  typescript: 'skill-icons:typescript',
  vue: 'logos:vue',
  nuxt: 'skill-icons:nuxtjs-light',
  go: 'logos:go',
  python: 'logos:python',
  java: 'logos:java',
  bash: 'logos:bash',
  docker: 'logos:docker',
  c: 'skill-icons:c',
  'c++': 'skill-icons:cpp',
  tailwindcss: 'skill-icons:tailwindcss-dark',
  springboot: 'skill-icons:spring-light',
  fastapi: 'skill-icons:fastapi',
  vite: 'skill-icons:vite-light',
  linux: 'skill-icons:linux-light',
  apple: 'logos:apple',
  maven: 'skill-icons:maven-light',
  git: 'skill-icons:git',
  matlab: 'skill-icons:matlab-light',
  eclipse: 'skill-icons:eclipse-light',
  bootstrap: 'skill-icons:bootstrap',
  node: 'skill-icons:nodejs-light',
  npm: 'skill-icons:npm-light',
  latex: 'skill-icons:latex-light',
});
</script>
