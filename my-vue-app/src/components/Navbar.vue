<script setup lang="ts">
import { ref, watchEffect } from "vue";

const isDark = ref<boolean>(false);

watchEffect(() => {
  document.documentElement.setAttribute(
      "data-bs-theme",
      isDark.value ? "dark" : "light"
  );
});
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary py-3">
    <div class="container px-5">
      <a class="navbar-brand fw-bolder text-primary" href="index.html">
        Start Bootstrap
      </a>
      <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Nav links -->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li class="nav-item">
            <router-link to="/" class="nav-link">{{
                $t("navbar.home")
              }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">{{
                $t("navbar.about")
              }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/projects" class="nav-link">{{
                $t("navbar.projects")
              }}</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/contact" class="nav-link">{{
                $t("navbar.contact")
              }}</router-link>
          </li>
        </ul>
      </div>

      <!-- Right actions -->
      <div class="d-flex align-items-center gap-2">
        <button class="btn btn-outline-primary" @click="$i18n.locale = 'vi'">
          VI
        </button>
        <button class="btn btn-outline-primary" @click="$i18n.locale = 'en'">
          EN
        </button>
        <button class="btn btn-outline-primary" @click="isDark = !isDark">
          {{ isDark ? "🔆" : "🔅" }}
        </button>
      </div>
    </div>
  </nav>
</template>
