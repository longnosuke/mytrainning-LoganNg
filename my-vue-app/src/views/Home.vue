<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>

<template>
  <DefaultLayout>
    <section class="py-5">
      <div class="container px-5">
        <div class="text-center">
          <h1 class="fw-bolder">{{ $t('home.title') }}</h1>
          <p class="lead">{{ $t('home.subtitle') }}</p>
        </div>
      </div>
    </section>
  </DefaultLayout>
</template>