<script setup lang="ts">
import { getGuideBySlug, getGuidesByCategory, guideCategories, guides } from '~/data/guides'

const route = useRoute()
const guideNameParam = route.params.guide_name
const guideName = Array.isArray(guideNameParam) ? guideNameParam[0] : guideNameParam
const guide = getGuideBySlug(String(guideName ?? ''))

if (!guide) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Guide not found'
  })
}

useHead({
  title: `${guide.title} | Bash Guides`,
  meta: [
    {
      name: 'description',
      content: guide.summary
    }
  ]
})

const assets = {
  flag: 'https://www.figma.com/api/mcp/asset/6495d6a1-a872-47f5-848b-c16ca622ce11'
} as const

const guideGroups = guideCategories.map((category) => ({
  category,
  guides: getGuidesByCategory(category)
}))

const guideIndex = guides.findIndex((guideItem) => guideItem.slug === guide.slug)
const previousGuide = guideIndex > 0 ? guides[guideIndex - 1] : undefined
const nextGuide = guideIndex < guides.length - 1 ? guides[guideIndex + 1] : undefined
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
        <NuxtLink to="/guides" class="inline-flex h-[36px] items-center border-[3px] border-black bg-white/30 px-[12px] sm:h-[44px] sm:px-[16px]">
          Guides
        </NuxtLink>
        <button type="button" class="inline-flex h-[36px] items-center bg-black px-[14px] text-white sm:h-[44px] sm:px-[18px]">
          Sign In
        </button>
      </nav>
    </header>

    <main class="relative z-10 mx-auto grid w-full max-w-[1380px] gap-[28px] px-[20px] pb-[86px] pt-[18px] sm:px-[28px] md:px-[40px] lg:grid-cols-[285px_minmax(0,820px)] lg:px-[56px]">
      <aside class="font-jeju lg:sticky lg:top-[24px] lg:max-h-[calc(100svh-48px)] lg:self-start lg:overflow-y-auto">
        <div class="border-[3px] border-black bg-[#f7f4ed]/90 p-[14px]">
          <NuxtLink to="/guides" class="block border-b-[2px] border-black/25 pb-[14px] text-[18px] leading-none text-black">
            <- Back to the Path
          </NuxtLink>

          <nav class="mt-[14px] space-y-[18px]">
            <div v-for="group in guideGroups" :key="group.category">
              <p class="text-[16px] uppercase leading-none text-[#6d6d6d]">
                {{ group.category }}
              </p>
              <div class="mt-[8px] space-y-[5px]">
                <NuxtLink
                  v-for="guideItem in group.guides"
                  :key="guideItem.slug"
                  :to="`/guides/${guideItem.slug}`"
                  class="block px-[10px] py-[8px] text-[17px] leading-[1.05]"
                  :class="guideItem.slug === guide.slug ? 'bg-black text-white' : 'border-l-[3px] border-black/25 hover:border-black hover:bg-white/45'"
                >
                  {{ guideItem.title }}
                </NuxtLink>
              </div>
            </div>
          </nav>
        </div>
      </aside>

      <article class="min-w-0">
        <div class="border-b-[4px] border-black pb-[24px]">
          <NuxtLink to="/guides" class="font-jeju text-[17px] uppercase leading-none text-[#646464] underline decoration-black/60 underline-offset-[3px]">
            Guides directory
          </NuxtLink>

          <div class="mt-[22px] flex flex-col gap-[16px] sm:flex-row sm:items-start sm:justify-between">
            <div>
              <p class="font-jeju text-[18px] uppercase leading-none text-[#757575] sm:text-[22px]">
                {{ guide.eyebrow }} / {{ guide.readingTime }}
              </p>
              <h1 class="font-jeju mt-[8px] text-[48px] uppercase leading-[0.92] text-black sm:text-[70px] md:text-[86px]">
                {{ guide.title }}
              </h1>
            </div>
            <div
              class="font-jeju flex size-[78px] shrink-0 items-center justify-center border-[4px] border-black text-[34px] uppercase leading-none sm:size-[94px] sm:text-[42px]"
              :style="{ backgroundColor: guide.accent, color: '#ffffff' }"
            >
              {{ guideIndex + 1 }}
            </div>
          </div>

          <p class="font-jeju mt-[18px] max-w-[760px] text-[20px] leading-[1.08] text-[#4c4c4c] sm:text-[25px] md:text-[28px]">
            {{ guide.summary }}
          </p>
        </div>

        <nav class="font-jeju mt-[24px] border-[3px] border-black bg-white/40 p-[16px]">
          <p class="text-[15px] uppercase leading-none tracking-[0.08em] text-[#696969]">
            On this page
          </p>
          <div class="mt-[12px] flex flex-wrap gap-[8px]">
            <a
              v-for="section in guide.sections"
              :key="section.id"
              :href="`#${section.id}`"
              class="border-[2px] border-black px-[10px] py-[8px] text-[15px] uppercase leading-none hover:bg-black hover:text-white sm:text-[17px]"
            >
              {{ section.title }}
            </a>
          </div>
        </nav>

        <div class="mt-[42px] space-y-[48px]">
          <section
            v-for="section in guide.sections"
            :id="section.id"
            :key="section.id"
            class="scroll-mt-[28px]"
          >
            <h2 class="font-jeju text-[36px] uppercase leading-none text-black sm:text-[52px]">
              {{ section.title }}
            </h2>

            <div class="font-jeju mt-[14px] space-y-[16px] text-[19px] leading-[1.18] text-[#4f4f4f] sm:text-[23px]">
              <p v-for="paragraph in section.body" :key="paragraph">
                {{ paragraph }}
              </p>
            </div>

            <ul v-if="section.checklist" class="font-jeju mt-[18px] space-y-[10px] border-l-[5px] border-black pl-[16px] text-[18px] leading-[1.12] text-black sm:text-[21px]">
              <li v-for="item in section.checklist" :key="item" class="flex gap-[10px]">
                <span aria-hidden="true">[]</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </section>
        </div>

        <div class="font-jeju mt-[64px] grid gap-[14px] border-t-[4px] border-black pt-[20px] sm:grid-cols-2">
          <NuxtLink
            v-if="previousGuide"
            :to="`/guides/${previousGuide.slug}`"
            class="border-[3px] border-black bg-white/40 p-[16px] hover:bg-black hover:text-white"
          >
            <span class="text-[15px] uppercase leading-none text-inherit opacity-70">Previous</span>
            <span class="mt-[8px] block text-[25px] uppercase leading-none sm:text-[30px]">{{ previousGuide.title }}</span>
          </NuxtLink>
          <div v-else />

          <NuxtLink
            v-if="nextGuide"
            :to="`/guides/${nextGuide.slug}`"
            class="border-[3px] border-black bg-white/40 p-[16px] text-left hover:bg-black hover:text-white sm:text-right"
          >
            <span class="text-[15px] uppercase leading-none text-inherit opacity-70">Next</span>
            <span class="mt-[8px] block text-[25px] uppercase leading-none sm:text-[30px]">{{ nextGuide.title }}</span>
          </NuxtLink>
        </div>
      </article>
    </main>
  </div>
</template>
