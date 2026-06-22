<script setup lang="ts">
import { ref, computed } from 'vue'
import NFTCard from './NFTCard.vue'
import NFTModal from './NFTModal.vue'

const props = defineProps<{ t: any }>()

const modalNft = ref<any>(null)

const videoUrls = [
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_053923_22c0a6a5-313c-474c-85ff-3b50d25e944a.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_054411_511c1b7a-fb2f-42ef-bf6c-32c0b1a06e79.mp4',
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260331_055427_ac7035b5-9f3b-4289-86fc-941b2432317d.mp4',
]

const scores = ['8.7/10', '9/10', '8.2/10']

const nfts = computed(() => {
  const translated = props.t.nfts
  return translated.map((nft: any, i: number) => ({
    ...nft,
    videoUrl: videoUrls[i],
    score: scores[i],
  }))
})
</script>

<template>
  <section id="collection" class="bg-background py-16 md:py-20 lg:py-24" style="scroll-margin-top: 80px;">
    <div class="mx-auto px-6 sm:px-10 md:px-16 lg:px-20" style="max-width: 1831px;">
      <!-- Header Row -->
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16 lg:mb-20">
        <!-- Left - Heading -->
        <h2 class="font-grotesk uppercase leading-[1.1]">
          <span class="block" style="font-size: 32px;">{{ t.collection.titleLine1 }}</span>
          <span class="hidden sm:block md:hidden" style="font-size: 40px; line-height: 1.1;">
            <span class="inline-block" style="margin-left: 96px;">
              <span class="font-condiment text-neon normal-case">{{ t.collection.titleLine2Space }}</span>
              {{ ' ' }}
              <span>{{ t.collection.titleLine2Objects }}</span>
            </span>
          </span>
          <span class="hidden md:block lg:hidden" style="font-size: 50px; line-height: 1.1;">
            <span class="inline-block" style="margin-left: 128px;">
              <span class="font-condiment text-neon normal-case">{{ t.collection.titleLine2Space }}</span>
              {{ ' ' }}
              <span>{{ t.collection.titleLine2Objects }}</span>
            </span>
          </span>
          <span class="hidden lg:block" style="font-size: 60px; line-height: 1.1;">
            <span class="inline-block" style="margin-left: 128px;">
              <span class="font-condiment text-neon normal-case">{{ t.collection.titleLine2Space }}</span>
              {{ ' ' }}
              <span>{{ t.collection.titleLine2Objects }}</span>
            </span>
          </span>
        </h2>

        <!-- Right - SEE ALL CREATORS Button -->
        <button class="text-left group cursor-pointer">
          <div class="flex items-end gap-2">
            <span class="font-grotesk uppercase leading-none" style="font-size: 32px;">
              <span class="sm:hidden">{{ t.collection.seeAllCreators }}</span>
              <span class="hidden sm:block md:hidden" style="font-size: 40px;">{{ t.collection.seeAllCreators }}</span>
              <span class="hidden md:block lg:hidden" style="font-size: 50px;">{{ t.collection.seeAllCreators }}</span>
              <span class="hidden lg:block" style="font-size: 60px;">{{ t.collection.seeAllCreators }}</span>
            </span>
            <div class="flex flex-col">
              <span class="font-grotesk uppercase leading-none" style="font-size: 20px;">
                <span class="sm:hidden">{{ t.collection.creators }}</span>
                <span class="hidden sm:block md:hidden" style="font-size: 24px;">{{ t.collection.creators }}</span>
                <span class="hidden md:block lg:hidden" style="font-size: 28px;">{{ t.collection.creators }}</span>
                <span class="hidden lg:block" style="font-size: 36px;">{{ t.collection.creators }}</span>
              </span>
            </div>
          </div>
          <div class="mt-2 w-full bg-neon group-hover:opacity-80 transition-opacity" style="height: 6px;">
            <div class="hidden sm:block lg:hidden w-full bg-neon" style="height: 8px;"></div>
            <div class="hidden lg:block w-full bg-neon" style="height: 10px;"></div>
          </div>
        </button>
      </div>

      <!-- NFT Card Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <NFTCard
          v-for="(nft, index) in nfts"
          :key="index"
          :videoUrl="nft.videoUrl"
          :score="nft.score"
          :rarityLabel="t.collection.rarityScore"
          :name="nft.name"
          :description="nft.description"
          :artist="nft.artist"
          :collection="nft.collection"
          :blockchain="nft.blockchain"
          :price="nft.price"
          :edition="nft.edition"
          @open="modalNft = nft"
        />
      </div>
    </div>

    <!-- Modal -->
    <NFTModal
      v-if="modalNft"
      :nft="modalNft"
      :t="t"
      @close="modalNft = null"
    />
  </section>
</template>
