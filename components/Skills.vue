<script setup>
const { locale, setLocale } = useI18n()

</script>

<template>
  <div>
    <div>
      <button @click="setLocale('en')">en</button>
      <button @click="setLocale('de')">fr</button>
      <p>{{ $t('hello') }}</p>
    </div>

  </div>
</template>
