<template>
  <div class="home-page">
    <NavBar />
    
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SolutionsSection />
      <CasesSection />
      <NewsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import NavBar from '@/components/NavBar.vue'
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import ServicesSection from '@/components/ServicesSection.vue'
import SolutionsSection from '@/components/SolutionsSection.vue'
import CasesSection from '@/components/CasesSection.vue'
import NewsSection from '@/components/NewsSection.vue'
import ContactSection from '@/components/ContactSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.home-page {
  min-height: 100vh;
  background-color: var(--color-bg-primary);
  overflow-x: hidden;
}
</style>
