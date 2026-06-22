<script setup lang="ts">
import { ChevronRight } from '@lucide/vue'

defineProps<{
  videoUrl: string
  score: string
  rarityLabel: string
  name: string
  description: string
  artist: string
  collection: string
  blockchain: string
  price: string
  edition: string
}>()

const emit = defineEmits<{
  open: []
}>()
</script>

<template>
  <div
    class="liquid-glass hover:bg-white/10 transition-colors group cursor-pointer relative"
    style="border-radius: 32px; padding: 18px;"
  >
    <!-- Video Container -->
    <div class="relative overflow-hidden" style="padding-bottom: 100%; border-radius: 24px;">
      <video
        class="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source :src="videoUrl" type="video/mp4" />
      </video>
    </div>

    <!-- Overlay Bar -->
    <div
      class="liquid-glass flex items-center justify-between z-10"
      style="position: absolute; bottom: 18px; left: 18px; right: 18px; border-radius: 20px; padding: 16px 20px;"
    >
      <div>
        <p class="font-mono uppercase" style="font-size: 11px; color: rgba(239, 244, 255, 0.7);">{{ rarityLabel }}:</p>
        <p class="font-grotesk uppercase" style="font-size: 16px; color: #EFF4FF;">{{ score }}</p>
      </div>
      <button
        @click.stop="emit('open')"
        class="flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
        style="width: 48px; height: 48px; border-radius: 50%; background: linear-gradient(to bottom right, #b724ff, #7c3aed); box-shadow: 0 10px 15px -3px rgba(168, 85, 247, 0.5);"
      >
        <ChevronRight style="width: 20px; height: 20px; color: white;" />
      </button>
    </div>
  </div>
</template>
