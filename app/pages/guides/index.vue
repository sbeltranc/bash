<script setup lang="ts">
import { getGuidesByCategory, guideCategories, guides } from '../../data/guides'

useHead({
  title: 'Guides | Bash'
})

const assets = {
  flag: 'https://www.figma.com/api/mcp/asset/6495d6a1-a872-47f5-848b-c16ca622ce11',
  dino: 'https://www.figma.com/api/mcp/asset/9d334e78-78f4-4fb0-8147-e68bc5c59c3a'
} as const

const categoryDescriptions: Record<string, string> = {
  'Read This': 'Still dont understand how Bash works?',
  Requirements: 'What do we ask before submitting a project?',
}

const featuredGuide = guides[0]

const guideGroups = guideCategories.map((category) => ({
  category,
  description: categoryDescriptions[category] ?? 'Everything useful in one pile.',
  guides: getGuidesByCategory(category)
}))
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip bg-[#f7f4ed] text-black">
    <div class="paper-grain pointer-events-none absolute inset-0" />
    <div class="fine-noise pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute inset-y-0 left-[12%] w-px bg-black/[0.08]" />
    <div class="pointer-events-none absolute inset-y-0 right-[12%] w-px bg-black/[0.08]" />

    <header class="relative z-10 mx-auto flex w-full max-w-[1380px] items-start justify-between px-[20px] py-[14px] sm:px-[28px] md:px-[40px] lg:px-[56px]">
      <NuxtLink to="/" aria-label="Bash home" class="inline-flex items-start">
        <img :src="assets.flag" alt="Hack Club" class="w-[58px] select-none sm:w-[74px]">
      </NuxtLink>

      <nav class="font-jeju flex items-center gap-[10px] text-[14px] uppercase leading-none sm:text-[18px]">
        <NuxtLink to="/" class="inline-flex h-[36px] items-center border-[3px] border-black bg-white/30 px-[12px] sm:h-[44px] sm:px-[16px]">
          Home
        </NuxtLink>
        <button type="button" class="inline-flex h-[36px] items-center bg-black px-[14px] text-white sm:h-[44px] sm:px-[18px]">
          SIGN IN
        </button>
      </nav>
    </header>

    <main class="relative z-10">
      <section class="mx-auto grid w-full max-w-[1380px] gap-[28px] px-[20px] pb-[54px] pt-[18px] sm:px-[28px] md:px-[40px] lg:grid-cols-[minmax(0,1fr)_380px] lg:items-end lg:px-[56px] lg:pb-[72px]">
        <div>
          <p class="font-jeju text-[20px] leading-none text-[#757575] sm:text-[24px] md:text-[26px]">
            Need a map?
          </p>
          <h1 class="font-jeju mt-[6px] max-w-[900px] text-[50px] uppercase leading-none text-black sm:text-[72px] md:text-[96px]">
            Guides
          </h1>
          <p class="font-jeju mt-[18px] max-w-[760px] text-[19px] leading-[1.08] text-[#4c4c4c] sm:text-[24px] md:text-[28px]">
            Quick tips and notes in how to pick your first project idea, logging the work you do on it, and submitting something real before the week runs away.
          </p>

          <div v-if="featuredGuide" class="mt-[28px] max-w-[720px] border-[3px] border-black bg-white/45 p-[18px] sm:p-[22px]">
            <p class="font-jeju text-[13px] uppercase leading-none tracking-[0.08em] text-[#666666] sm:text-[15px]">
              Read this first
            </p>
            <NuxtLink :to="`/guides/${featuredGuide.slug}`" class="mt-[8px] block">
              <h2 class="font-jeju text-[32px] uppercase leading-none text-black sm:text-[44px]">
                {{ featuredGuide.title }}
              </h2>
              <p class="font-jeju mt-[8px] text-[17px] leading-[1.08] text-[#555555] sm:text-[20px]">
                {{ featuredGuide.summary }}
              </p>
              <span class="font-jeju mt-[14px] inline-flex bg-black px-[14px] py-[10px] text-[15px] uppercase leading-none text-white sm:text-[18px]">
                Open the path
              </span>
            </NuxtLink>
          </div>
        </div>
      </section>

      <section class="mx-auto grid w-full max-w-[1380px] gap-[28px] px-[20px] pb-[88px] sm:px-[28px] md:px-[40px] lg:grid-cols-[250px_minmax(0,1fr)] lg:px-[56px]">
        <aside class="font-jeju lg:sticky lg:top-[24px] lg:self-start">
          <div class="border-[3px] border-black bg-[#f7f4ed]/80 p-[14px]">
            <p class="text-[16px] uppercase leading-none text-[#6d6d6d]">Directory</p>
            <nav class="mt-[14px] space-y-[10px] text-[18px] leading-none">
              <a
                v-for="group in guideGroups"
                :key="group.category"
                :href="`#${group.category.toLowerCase().replaceAll(' ', '-')}`"
                class="block border-l-[3px] border-black/30 pl-[10px] hover:border-black"
              >
                {{ group.category }}
              </a>
            </nav>
          </div>
        </aside>

        <div class="space-y-[48px]">
          <section
            v-for="group in guideGroups"
            :id="group.category.toLowerCase().replaceAll(' ', '-')"
            :key="group.category"
            class="scroll-mt-[32px]"
          >
            <div class="flex flex-col gap-[6px] sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p class="font-jeju text-[18px] leading-none text-[#757575] sm:text-[22px]">
                  {{ group.description }}
                </p>
                <h2 class="font-jeju mt-[4px] text-[38px] uppercase leading-none sm:text-[54px]">
                  {{ group.category }}
                </h2>
              </div>
              <p class="font-jeju text-[18px] uppercase leading-none text-[#686868] sm:text-[22px]">
                {{ group.guides.length }} guides
              </p>
            </div>

            <div class="mt-[20px] grid gap-[16px] md:grid-cols-2 xl:grid-cols-3">
              <NuxtLink
                v-for="guide in group.guides"
                :key="guide.slug"
                :to="`/guides/${guide.slug}`"
                class="group flex min-h-[220px] flex-col border-[3px] border-black bg-white/45 p-[18px] transition-transform hover:-translate-y-[3px] sm:p-[20px]"
              >
                <div class="flex items-start justify-between gap-[14px]">
                  <p class="font-jeju text-[14px] uppercase leading-none tracking-[0.08em] text-[#696969]">
                    {{ guide.eyebrow }}
                  </p>
                  <span class="font-jeju shrink-0 border-[2px] border-black px-[8px] py-[5px] text-[13px] uppercase leading-none">
                    {{ guide.readingTime }}
                  </span>
                </div>

                <h3 class="font-jeju mt-[18px] text-[30px] uppercase leading-[0.94] text-black sm:text-[36px]">
                  {{ guide.title }}
                </h3>
                <p class="font-jeju mt-[10px] text-[17px] leading-[1.08] text-[#555555] sm:text-[19px]">
                  {{ guide.summary }}
                </p>

                <span class="font-jeju mt-auto pt-[20px] text-[17px] uppercase leading-none text-black underline decoration-black/70 underline-offset-[3px]">
                  Read guide
                </span>
              </NuxtLink>
            </div>
          </section>
        </div>
      </section>
    </main>
  </div>
</template>
