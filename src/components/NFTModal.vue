<script setup lang="ts">
import { X } from '@lucide/vue'

defineProps<{
  nft: {
    videoUrl: string
    score: string
    name: string
    description: string
    artist: string
    collection: string
    blockchain: string
    price: string
    edition: string
  }
  t: any
}>()

const emit = defineEmits<{
  close: []
}>()
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      style="background: rgba(1, 8, 40, 0.85); backdrop-filter: blur(12px);"
      @click.self="emit('close')"
    >
      <!-- Modal Content -->
      <div
        class="liquid-glass w-full overflow-hidden"
        style="max-width: 900px; max-height: 90vh; border-radius: 32px; padding: 24px;"
      >
        <div class="flex flex-col lg:flex-row gap-6" style="max-height: calc(90vh - 48px); overflow-y: auto;">
          <!-- Video -->
          <div class="lg:w-1/2 flex-shrink-0">
            <div class="relative overflow-hidden" style="border-radius: 24px; padding-bottom: 100%;">
              <video
                class="absolute inset-0 w-full h-full object-cover"
                autoPlay loop muted playsInline
              >
                <source :src="nft.videoUrl" type="video/mp4" />
              </video>
            </div>
          </div>

          <!-- Info -->
          <div class="lg:w-1/2 flex flex-col justify-between">
            <div>
              <!-- Close Button -->
              <div class="flex justify-end mb-4">
                <button
                  @click="emit('close')"
                  class="flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer"
                  style="width: 40px; height: 40px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.15);"
                >
                  <X style="width: 18px; height: 18px;" class="text-cream" />
                </button>
              </div>

              <!-- Name -->
              <h3 class="font-grotesk uppercase text-cream mb-6" style="font-size: 28px; line-height: 1.1;">
                {{ nft.name }}
              </h3>

              <!-- Score -->
              <div class="flex items-center gap-3 mb-6">
                <div
                  class="flex items-center justify-center"
                  style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(to bottom right, #b724ff, #7c3aed);"
                >
                  <span class="font-grotesk" style="font-size: 13px; color: white;">{{ nft.score }}</span>
                </div>
                <span class="font-mono uppercase text-cream/60" style="font-size: 12px;">{{ t.collection.rarityScore }}</span>
              </div>

              <!-- Description -->
              <div class="mb-6">
                <p class="font-mono uppercase text-cream/50 mb-2" style="font-size: 11px;">{{ t.modal.description }}</p>
                <p class="font-mono text-cream" style="font-size: 14px; line-height: 1.6;">{{ nft.description }}</p>
              </div>

              <!-- Details Grid -->
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="font-mono uppercase text-cream/50 mb-1" style="font-size: 11px;">{{ t.modal.artist }}</p>
                  <p class="font-grotesk uppercase text-cream" style="font-size: 14px;">{{ nft.artist }}</p>
                </div>
                <div>
                  <p class="font-mono uppercase text-cream/50 mb-1" style="font-size: 11px;">{{ t.modal.collection }}</p>
                  <p class="font-grotesk uppercase text-cream" style="font-size: 14px;">{{ nft.collection }}</p>
                </div>
                <div>
                  <p class="font-mono uppercase text-cream/50 mb-1" style="font-size: 11px;">{{ t.modal.blockchain }}</p>
                  <p class="font-grotesk uppercase text-cream" style="font-size: 14px;">{{ nft.blockchain }}</p>
                </div>
                <div>
                  <p class="font-mono uppercase text-cream/50 mb-1" style="font-size: 11px;">{{ t.modal.edition }}</p>
                  <p class="font-grotesk uppercase text-cream" style="font-size: 14px;">{{ nft.edition }}</p>
                </div>
              </div>
            </div>

            <!-- Price & Buy -->
            <div class="mt-6 pt-6" style="border-top: 1px solid rgba(255,255,255,0.1);">
              <div class="flex items-center justify-between">
                <div>
                  <p class="font-mono uppercase text-cream/50 mb-1" style="font-size: 11px;">{{ t.modal.price }}</p>
                  <p class="font-grotesk text-neon" style="font-size: 22px;">{{ nft.price }}</p>
                </div>
                <button
                  class="font-grotesk uppercase text-cream flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer"
                  style="padding: 14px 32px; border-radius: 20px; background: linear-gradient(to bottom right, #b724ff, #7c3aed); font-size: 14px; letter-spacing: 0.05em;"
                >
                  {{ t.modal.buyNow }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>
