<template>
  <div
    class="relative overflow-x-auto shadow-md sm:rounded-lg md:w-3/4 mx-auto"
  >
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-3">{{ $t('projects') }}</th>
          <th scope="col" class="px-6 py-3">{{ $t('programminglanguage') }}</th>
          <th scope="col" class="px-6 py-3">{{ $t('updated at') }}</th>
          <th scope="col" class="px-6 py-3">{{ $t('stars') }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="d in sortedProjects"
          :key="d.id"
          class="bg-white border-b dark:bg-gray-800"
        >
          <td class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
            <a class="cursor-pointer hover:text-blue-500" :href="d.svn_url">
              {{ d.name }}</a
            >
          </td>
          <td class="px-6 py-4 text-gray-900 whitespace-nowrap">
            <div v-if="!d.language">
              <span class="text-red-500">No Language</span>
            </div>
            <div v-else>
              {{ d.language }}
            </div>
          </td>
          <td class="px-6 py-4 text-gray-900 whitespace-nowrap">
            {{ formatDate(d.updated_at) }}
          </td>
          <td class="px-6 py-4 text-gray-900 whitespace-nowrap">
            {{ d.stargazers_count }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Definiere die Typen für die von der API zurückgegebenen Daten
interface GitHubRepo {
  id: number;
  name: string;
  language: string | null;
  updated_at: string;
  stargazers_count: number;
  svn_url: string;
}

// Verwende useFetch, um die Daten abzurufen
const { data, error } = await useFetch<GitHubRepo[]>(
  'https://api.github.com/users/RICHIE-CODING/repos',
);

// Sortiere die Daten basierend auf stargazers_count
const sortedProjects = computed(() => {
  return data.value
    ? [...data.value].sort((a, b) => b.stargazers_count - a.stargazers_count)
    : [];
});

// Nutze vue-i18n, um die aktuelle Sprache zu ermitteln
const { locale } = useI18n();

// Funktion zur Formatierung des Datums basierend auf der Spracheinstellung
const formatDate = (dateStr: string): string => {
  const date = new Date(dateStr);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  };

  if (locale.value === 'de') {
    return date.toLocaleDateString('de-DE', options);
  } else {
    return date.toLocaleDateString('en-US', options);
  }
};
</script>
