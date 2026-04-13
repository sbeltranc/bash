<script setup lang="ts">
useHead({
  link: [
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Jeju+Gothic&family=Libre+Barcode+39+Text&family=Libre+Barcode+128&display=swap'
    }
  ]
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtPage />
</template>

<style>
html,
body,
#__nuxt {
  min-height: 100%;
}

body {
  margin: 0;
}

.font-jeju {
  font-family: 'Jeju Gothic', sans-serif;
}

.font-barcode39 {
  font-family: 'Libre Barcode 39 Text', cursive;
}

.font-barcode128 {
  font-family: 'Libre Barcode 128', cursive;
}

.paper-grain {
  opacity: 0.04;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.15' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='140' height='140' filter='url(%23n)' opacity='0.85'/%3E%3C/svg%3E");
  mix-blend-mode: multiply;
}

.fine-noise {
  opacity: 0.045;
  background-image:
    radial-gradient(circle at 20% 30%, rgb(0 0 0 / 0.22) 0 0.5px, transparent 0.8px),
    radial-gradient(circle at 80% 70%, rgb(0 0 0 / 0.18) 0 0.5px, transparent 0.8px);
  background-size: 5px 5px, 7px 7px;
  mix-blend-mode: multiply;
}
</style>
