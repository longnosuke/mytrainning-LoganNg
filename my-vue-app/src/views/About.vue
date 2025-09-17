<script setup lang="ts">
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>
<template>
  <DefaultLayout>
    <section class="py-5">
      <div class="container px-5">
        <div class="row gx-5 justify-content-center">
          <div class="col-xxl-8">
            <div class="text-center my-5">
              <h2 class="display-5 fw-bolder">
                <span class="text-gradient d-inline">{{ $t('about.title') }}</span>
              </h2>
              <p class="lead fw-light mb-4">{{ $t('about.subtitle') }}</p>
              <p class="text-muted">{{ $t('about.description') }}</p>
              <div class="d-flex justify-content-center fs-2 gap-4">
                <a class="text-gradient text-decoration-none" href="#" aria-label="Twitter">
                  <i class="bi bi-twitter"></i>
                </a>
              <a class="text-gradient" href="#!"><i class="bi bi-linkedin"></i></a>
              <a class="text-gradient" href="#!"><i class="bi bi-github"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </DefaultLayout>
</template>
<script setup lang="ts">
</script>