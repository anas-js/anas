<script setup lang="ts">
useTextAnime();
useMoveTopAnime();
useSvgPathAnime();
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
