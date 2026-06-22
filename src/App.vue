<script setup lang="ts">
import { useI18n } from './composables/useI18n'
import SectionHero from './components/SectionHero.vue'
import SectionAbout from './components/SectionAbout.vue'
import SectionCollection from './components/SectionCollection.vue'
import SectionCTA from './components/SectionCTA.vue'

const { t, currentLocale, toggleLocale } = useI18n()

const navLinks = [
  { key: 'homepage', href: '#hero' },
  { key: 'gallery', href: '#collection' },
  { key: 'faq', href: '#about' },
  { key: 'contact', href: '#cta' },
]
</script>

<template>
  <div class="bg-background min-h-screen overflow-x-hidden">
    <!-- Texture Overlay -->
    <div class="texture-overlay" />

    <!-- Fixed Navbar -->
    <header
      class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between mx-auto px-6 sm:px-10 md:px-16 lg:px-20"
      style="max-width: 1831px; padding-top: 20px; padding-bottom: 20px;"
    >
      <!-- Logo -->
      <div class="font-grotesk uppercase tracking-wide" style="font-size: 16px;">
        Orbis.Nft
      </div>

      <!-- Navigation -->
      <nav class="hidden lg:flex items-center" style="gap: 12px;">
        <div class="liquid-glass flex items-center" style="border-radius: 28px; padding: 24px 52px; gap: 32px;">
          <a
            v-for="link in navLinks"
            :key="link.key"
            :href="link.href"
            class="font-grotesk uppercase text-cream hover:text-neon transition-colors duration-300"
            style="font-size: 13px;"
          >
            {{ t.nav[link.key as keyof typeof t.nav] }}
          </a>
        </div>

        <!-- Language Toggle -->
        <button
          @click="toggleLocale"
          class="liquid-glass flex items-center justify-center hover:bg-white/20 transition-all font-grotesk uppercase text-cream cursor-pointer"
          style="width: 52px; height: 52px; border-radius: 28px; font-size: 13px; letter-spacing: 0.05em; flex-shrink: 0;"
        >
          {{ currentLocale.toUpperCase() }}
        </button>
      </nav>

      <!-- Mobile: Language Toggle only -->
      <button
        @click="toggleLocale"
        class="lg:hidden liquid-glass flex items-center justify-center hover:bg-white/20 transition-all font-grotesk uppercase text-cream cursor-pointer"
        style="width: 44px; height: 44px; border-radius: 22px; font-size: 12px; letter-spacing: 0.05em;"
      >
        {{ currentLocale.toUpperCase() }}
      </button>
    </header>

    <SectionHero :t="t" />
    <SectionAbout :t="t" />
    <SectionCollection :t="t" />
    <SectionCTA :t="t" />
  </div>
</template>
