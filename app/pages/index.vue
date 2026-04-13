<script setup lang="ts">
useHead({
  title: 'Bash'
})

const assets = {
  flag: 'https://www.figma.com/api/mcp/asset/6495d6a1-a872-47f5-848b-c16ca622ce11',
  bashLogo: 'https://cdn.hackclub.com/019d854d-b0b1-7167-8aa8-841721c3a023/image.png',
  footerBarcode: 'https://cdn.hackclub.com/019d8570-fc7d-7087-ba88-892a5a438cee/image.png',
  heroPrizes: 'https://cdn.hackclub.com/019d8545-1fda-7d62-acca-f7136a4f8282/image.png',
  dino: 'https://www.figma.com/api/mcp/asset/9d334e78-78f4-4fb0-8147-e68bc5c59c3a',
  vertScreenshot: 'https://www.figma.com/api/mcp/asset/e7da94d6-aab7-4f12-b3eb-1cb87ee1be15',
  vertLogo: 'https://www.figma.com/api/mcp/asset/5d9c0f78-83fe-4635-98f5-7483246455ac',
  librePodsLogo: 'https://www.figma.com/api/mcp/asset/d0ee87f6-4459-4341-a47a-b6ff51fb749b',
  librePodsScreenshot: 'https://www.figma.com/api/mcp/asset/a9d0f73f-b815-4864-9665-4412b02acdf7',
  doomScreenshot: 'https://www.figma.com/api/mcp/asset/05d1f805-1a04-4374-bec7-51231e39fee9',
  doomLogo: 'https://www.figma.com/api/mcp/asset/84536b4a-77bd-4440-841e-93a3859c2a5d'
} as const

type Step = {
  number: string
  title: string
  description: string
}

type Project = {
  title: string
  screenshot: string
  logo: string
  logoClass: string
  description: string
  repoUrl: string
}

type WeekTheme = {
  eyebrow: string
  title: string
  description: string
  details: string[]
}

type Faq = {
  question: string
  answer: string
}

type FooterLinkGroup = {
  title: string
  items: {
    label: string
    href: string
  }[]
}

const steps: Step[] = [
  {
    number: '1',
    title: 'CREATE YOUR PROJECT',
    description: 'BRAINSTORM IDEAS WITH THE WEEK THEME, GIVE IT A NAME, DESCRIPTION AND A GITHUB REPOSITORY'
  },
  {
    number: '2',
    title: 'GET MATCHED',
    description: 'BE MATCHED WITH SOMEONE AROUND THE WORLD OR WITH A FRIEND FOR THE WEEK, AND COMPETE WHO GETS THE MOST POINTS'
  },
  {
    number: '3',
    title: 'BUILD YOUR PROJECT',
    description: 'LOG YOUR PROJECT HOURS WITH HACKATIME AND JOURNAL YOUR PROGRESS'
  },
  {
    number: '4',
    title: 'SUBMIT YOUR PROJECT',
    description: 'MAKE SURE TO SUBMIT IT BEFORE THE WEEK DEADLINE TO CLAIM POINTS AND BUYING SWAG!'
  }
]

const projects: Project[] = [
  {
    title: 'VERT',
    screenshot: assets.vertScreenshot,
    logo: assets.vertLogo,
    logoClass: 'w-[98px]',
    description: 'File conversion utility that convert files on your device instead of a cloud',
    repoUrl: 'https://github.com/VERT-sh/vert'
  },
  {
    title: 'LibrePods',
    screenshot: assets.librePodsScreenshot,
    logo: assets.librePodsLogo,
    logoClass: 'w-[120px]',
    description: "AirPods liberated from Apple's ecosystem.",
    repoUrl: 'https://github.com/kavishdevar/librepods'
  },
  {
    title: 'Doom PDF',
    screenshot: assets.doomScreenshot,
    logo: assets.doomLogo,
    logoClass: 'w-[122px]',
    description: 'A port of Doom (1993) that runs inside a PDF file',
    repoUrl: 'https://github.com/ading2210/doompdf'
  }
]

const weekTheme: WeekTheme = {
  eyebrow: "This week's build prompt",
  title: 'MAKE AN ANNOYING SLACK BOT',
  description: 'This week, build a bot that barges into Slack with a tiny joke, weird reminders, dramatic reactions, or another harmless bit that people can actually try.',
  details: [
    'Pick one annoying behavior',
    'Build it as a Slack app',
    'Ship a demo people can invite'
  ]
}

const faqs: Faq[] = [
  {
    question: 'What are the requirements for a project?',
    answer: 'Your project must log at least 5 hours in Hackatime.'
  },
  {
    question: "What happens if I didn't complete a week?",
    answer: "If you miss a week, you'll lose your streak and multipliers, meaning you'll have a reduced payout."
  },
  {
    question: 'Do I need to be an expert to join?',
    answer: 'No. Bash is beginner friendly and provides a weekly guide in the given theme so you can learn how to build something new.'
  },
  {
    question: 'Can I skip competing for a week?',
    answer: 'You can skip a week, but competing gives bonus points. Not competing reduces your total payout for that week as a penalization.'
  },
  {
    question: 'How does matching work? Can I match with a friend?',
    answer: 'You are matched each week with another participant. You can match randomly or with a friend. Both of you build projects during the week and whoever earns more points wins the week.'
  },
  {
    question: 'What kind of projects can I make?',
    answer: 'You can build any software project you want, but you have to follow the weeks theme.'
  },
  {
    question: 'Is all of this real and actually free?',
    answer: 'Yes. Hack Club is a nonprofit which has partnered with GitHub and Open Sauce in the past, running events like Summer of Making and 200 hackathons in different cities.'
  },
  {
    question: 'How much points do I earn in a week?',
    answer: 'Points depend on how many hours you work on your project and how long your streak lasts, as these factors are multiplied when calculating your payout.'
  },
  {
    question: 'How are projects reviewed?',
    answer: 'Projects are reviewed using your journals, commits and tracked hours from Hackatime or Lapse, checking how you managed your time during the creation of your project.'
  }
]

const footerLinks: FooterLinkGroup[] = [
  {
    title: 'Hack Club',
    items: [
      { label: 'Philosophy', href: 'https://hackclub.com/philosophy/' },
      { label: 'Our Team & Board', href: 'https://hackclub.com/team/' },
      { label: 'Branding', href: 'https://hackclub.com/brand/' },
      { label: 'Donate', href: 'https://hackclub.com/donate/' },
      { label: 'Finances', href: 'https://bank.hackclub.com/hq/' }
    ]
  },
  {
    title: 'Resources',
    items: [
      { label: 'Guides', href: '/guides' },
      { label: 'Community Events', href: 'https://events.hackclub.com/' },
      { label: 'Jams', href: 'https://jams.hackclub.com/' },
      { label: 'Workshops', href: 'https://workshops.hackclub.com/' },
      { label: 'Code of Conduct', href: 'https://hackclub.com/conduct/' }
    ]
  }
]
</script>

<template>
  <div class="relative min-h-screen overflow-x-clip bg-[#f7f4ed] text-black">
    <div class="paper-grain pointer-events-none absolute inset-0" />
    <div class="fine-noise pointer-events-none absolute inset-0" />
    <div class="pointer-events-none absolute inset-y-0 left-[12%] w-px bg-black/[0.08]" />
    <div class="pointer-events-none absolute inset-y-0 right-[12%] w-px bg-black/[0.08]" />

    <main class="relative">
      <section class="relative flex min-h-[100svh] flex-col">
        <div class="mx-auto flex w-full max-w-[1180px] flex-1 flex-col px-[16px] pb-[10px] pt-[10px] sm:px-[28px] sm:pb-[16px] sm:pt-[16px] md:px-[40px] lg:px-[56px]">
          <div class="relative flex min-h-[38px] items-start justify-center sm:min-h-[48px]">
            <img
              :src="assets.flag"
              alt="Hack Club"
              class="w-[58px] select-none sm:w-[74px] md:w-[82px]"
            >

            <div class="absolute right-0 top-0 flex items-center gap-[8px] sm:gap-[10px]">
              <NuxtLink
                to="/guides"
                class="font-jeju inline-flex h-[36px] w-[82px] items-center justify-center border-[3px] border-black bg-white/35 text-[14px] uppercase leading-none text-black sm:h-[48px] sm:w-[110px] sm:text-[18px]"
              >
                GUIDES
              </NuxtLink>

              <button
                type="button"
                class="font-jeju inline-flex h-[36px] w-[92px] items-center justify-center bg-black text-[14px] uppercase leading-none text-white sm:h-[48px] sm:w-[124px] sm:text-[18px]"
              >
                SIGN IN
              </button>
            </div>
          </div>

          <div class="flex flex-1 flex-col items-center pb-[2px] pt-0 sm:pb-[4px] md:pb-[8px]">
            <div class="relative flex flex-col items-center">
              <img
                :src="assets.bashLogo"
                alt="Bash"
                class="w-[125px] select-none sm:w-[180px] md:w-[220px] lg:w-[255px]"
              >
            </div>

            <p
              class="font-jeju mt-[5px] max-w-[780px] text-center text-[17px] leading-[1.03] text-[#434343] sm:mt-[8px] sm:text-[26px] md:text-[30px] lg:text-[34px]"
            >
              Build and submit projects every week, compete with others and earn free prizes
            </p>

            <div class="mt-[6px] flex w-full justify-center sm:mt-[10px] md:mt-[12px]">
              <img
                :src="assets.heroPrizes"
                alt=""
                class="pointer-events-none w-[74%] max-w-[220px] select-none sm:max-w-[360px] md:max-w-[430px] lg:max-w-[500px]"
              >
            </div>

            <div class="mt-[0px] flex w-full max-w-[620px] flex-col items-center sm:mt-[4px]">
              <p class="font-jeju text-[18px] uppercase leading-none text-black sm:text-[28px] md:text-[32px]">
                READY TO BUILD?
              </p>
              <p class="font-jeju mt-[2px] text-[10px] uppercase leading-none tracking-[0.06em] text-[#5a5a5a] sm:mt-[3px] sm:text-[14px] md:text-[15px]">
                x weeks are left
              </p>

              <div class="mt-[8px] grid w-full max-w-[520px] gap-[7px] sm:mt-[10px] sm:grid-cols-[1fr_140px] sm:gap-[12px] md:max-w-[620px] md:grid-cols-[1fr_160px]">
                <label class="sr-only" for="hero-email">Email address</label>
                <input
                  id="hero-email"
                  type="email"
                  placeholder="orpheus@hackclub.com"
                  class="font-jeju h-[40px] border-[3px] border-black bg-white/35 px-[14px] text-[15px] text-black outline-none placeholder:text-[#9f9f9f] sm:h-[54px] sm:text-[20px] md:h-[58px] md:text-[22px]"
                >
                <button
                  type="button"
                  class="font-jeju h-[40px] bg-black text-[15px] uppercase leading-none text-white sm:h-[54px] sm:text-[20px] md:h-[58px] md:text-[22px]"
                >
                  SIGN UP
                </button>
              </div>

              <p class="font-jeju mt-[5px] w-full max-w-[620px] text-[10px] leading-[1.05] text-[#6e6e6e] sm:mt-[6px] sm:text-[13px] md:text-[14px]">
                For high schoolers aged 13-18.<br>
                Already signed up?
                <span class="text-black underline"> Sign in with Hack Club Auth</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-[88px] sm:py-[110px] lg:py-[128px]">
        <div class="mx-auto grid w-full max-w-[1380px] gap-[36px] px-[20px] sm:px-[28px] md:px-[40px] lg:grid-cols-[minmax(0,1.25fr)_minmax(340px,0.95fr)] lg:items-center lg:px-[56px]">
          <div class="min-w-0">
            <p class="font-jeju text-[20px] leading-none text-[#757575] sm:text-[24px] md:text-[26px]">Skeptical? Here's</p>
            <h2 class="font-jeju mt-[6px] text-[42px] uppercase leading-none text-black sm:text-[58px] md:text-[72px]">
              HOW IT WORKS
            </h2>

            <div class="mt-[30px] space-y-[24px] sm:mt-[40px] sm:space-y-[30px]">
              <article
                v-for="step in steps"
                :key="step.number"
                class="grid grid-cols-[56px_1fr] gap-[16px] sm:grid-cols-[72px_1fr] sm:gap-[20px]"
              >
                <div class="font-jeju flex size-[56px] items-center justify-center bg-black text-[38px] leading-none text-white sm:size-[72px] sm:text-[48px]">
                  {{ step.number }}
                </div>

                <div>
                  <h3 class="font-jeju whitespace-nowrap text-[26px] uppercase leading-[0.9] text-black sm:text-[34px] md:text-[40px]">
                    {{ step.title }}
                  </h3>
                  <p class="font-jeju mt-[6px] max-w-[640px] text-[12px] uppercase leading-[0.98] tracking-[0.02em] text-[#4c4c4c] sm:text-[15px] md:text-[17px]">
                    {{ step.description }}
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div class="mx-auto w-full max-w-[380px] sm:max-w-[500px] lg:max-w-none">
            <img :src="assets.dino" alt="" class="pointer-events-none w-full rotate-[-8deg] select-none">
          </div>
        </div>
      </section>

      <section class="relative py-[88px] sm:py-[110px] lg:py-[128px]">
        <div class="mx-auto w-full max-w-[1380px] px-[20px] sm:px-[28px] md:px-[40px] lg:px-[56px]">
          <div class="grid gap-[30px] border-y-[4px] border-black py-[34px] sm:py-[42px] lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p class="font-jeju text-[20px] leading-none text-[#757575] sm:text-[24px] md:text-[26px]">
                {{ weekTheme.eyebrow }}
              </p>
              <h2 class="font-jeju mt-[6px] text-[42px] uppercase leading-none text-black sm:text-[58px] md:text-[72px]">
                WEEK'S THEME
              </h2>
            </div>

            <div class="font-jeju">
              <p class="inline-flex bg-black px-[12px] py-[8px] text-[24px] uppercase leading-none text-white sm:text-[34px] md:text-[42px]">
                {{ weekTheme.title }}
              </p>
              <p class="mt-[18px] max-w-[720px] text-[18px] leading-[1.08] text-[#4c4c4c] sm:text-[22px] md:text-[26px]">
                {{ weekTheme.description }}
              </p>

              <ul class="mt-[24px] grid gap-[10px] sm:grid-cols-3">
                <li
                  v-for="detail in weekTheme.details"
                  :key="detail"
                  class="border-[3px] border-black bg-white/35 px-[12px] py-[10px] text-[16px] uppercase leading-[1.02] text-black sm:text-[18px] md:text-[20px]"
                >
                  {{ detail }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="relative py-[88px] sm:py-[110px] lg:py-[128px]">
        <div class="mx-auto w-full max-w-[1380px] px-[20px] sm:px-[28px] md:px-[40px] lg:px-[56px]">
          <div class="flex flex-col items-start sm:items-end">
            <p class="font-jeju text-[20px] leading-none text-[#757575] sm:text-right sm:text-[24px] md:text-[26px]">
              Need some inspiration?
            </p>
            <h2 class="font-jeju mt-[6px] text-[42px] uppercase leading-none text-black sm:text-right sm:text-[58px] md:text-[72px]">
              SEE WHAT OTHER TEENS BUILT
            </h2>
          </div>

          <div class="mt-[32px] grid gap-x-[26px] gap-y-[34px] md:mt-[40px] md:grid-cols-3">
            <article v-for="project in projects" :key="project.title" class="flex flex-col items-center">
              <img
                :src="project.screenshot"
                :alt="`${project.title} screenshot`"
                class="aspect-[1.39/1] w-full max-w-[420px] object-cover md:max-w-none"
                loading="lazy"
                decoding="async"
              >

              <div class="mt-[14px] flex justify-center">
                <img
                  :src="project.logo"
                  :alt="project.title"
                  :class="project.logoClass"
                  class="sm:scale-[1.25]"
                  loading="lazy"
                  decoding="async"
                >
              </div>

              <p class="font-jeju mt-[14px] max-w-[360px] px-[8px] text-center text-[16px] leading-[1.08] text-[#696969] sm:text-[18px] md:max-w-none">
                {{ project.description }}
              </p>
              <a
                :href="project.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="font-jeju mt-[10px] text-[16px] uppercase leading-none text-black underline decoration-black underline-offset-[3px] sm:text-[18px]"
              >
                Check GitHub
              </a>
            </article>
          </div>
        </div>
      </section>

      <section class="relative py-[88px] sm:py-[110px] lg:py-[128px]">
        <div class="mx-auto w-full max-w-[1380px] px-[20px] sm:px-[28px] md:px-[40px] lg:px-[56px]">
          <p class="font-jeju text-[20px] leading-none text-[#757575] sm:text-[24px] md:text-[26px]">Have some questions? We have</p>
          <h2 class="font-jeju mt-[6px] text-[42px] uppercase leading-none text-black sm:text-[58px] md:text-[72px]">
            SOME ANSWERS
          </h2>

          <div class="mt-[34px] grid gap-x-[28px] gap-y-[28px] md:grid-cols-2 xl:grid-cols-3">
            <article v-for="faq in faqs" :key="faq.question" class="max-w-[410px]">
              <h3 class="font-jeju text-[28px] leading-[1.02] text-black sm:text-[32px] md:text-[36px]">
                {{ faq.question }}
              </h3>
              <p class="font-jeju mt-[10px] text-[15px] leading-[1.08] text-[#555555] sm:text-[18px] md:text-[20px]">
                {{ faq.answer }}
              </p>
            </article>
          </div>

          <p class="font-jeju mt-[48px] text-center text-[18px] leading-[1.15] text-[#5d5d5d] sm:text-[22px] md:text-[24px]">
            We didn't have your question?<br>
            <a href="mailto:santiago@events.hackclub.com" class="text-black underline">
              Send us an email at bash@hackclub.com
            </a>
          </p>
        </div>
      </section>

      <footer class="relative pb-[56px] pt-[44px] sm:pb-[72px]">
        <div class="mx-auto w-full max-w-[980px] px-[20px] sm:px-[28px] md:px-[40px]">
          <img
            :src="assets.footerBarcode"
            alt=""
            class="w-full max-w-[440px] select-none sm:max-w-[560px] md:max-w-[640px]"
            loading="lazy"
            decoding="async"
          >

          <h2 class="font-jeju mt-[8px] text-[42px] leading-none text-black sm:text-[50px] md:text-[56px]">
            A project by Hack Club
          </h2>

          <div class="font-jeju mt-[24px] space-y-[18px] text-[18px] leading-[1.2] text-[#484848] sm:text-[20px] md:text-[22px]">
            <p>
              Hack Club is a 501(c)(3) nonprofit and network of 60k+ technical high schoolers. We believe
              you learn best by building so we're creating community and providing grants so you can make
              awesome projects. In the past few years, we've partnered with
              <a href="https://github.com/" class="text-black underline"> GitHub</a>
              to run
              <a href="https://summer.hackclub.com/" class="text-black underline"> Summer of Making</a>,
              hosted
              <a href="https://www.youtube.com/watch?v=2BID8_pGuqA" class="text-black underline"> the world's longest hackathon on land</a>,
              and ran
              <a href="https://www.youtube.com/watch?v=QvCoISXfcE8" class="text-black underline"> Canada's largest high school hackathon</a>.
            </p>

            <p class="text-black">At Hack Club, students aren't just learning, they're shipping.</p>
          </div>

          <div class="mt-[36px] grid gap-[28px] min-[480px]:grid-cols-2">
            <div v-for="group in footerLinks" :key="group.title" class="font-jeju">
              <h3 class="text-[18px] leading-none text-black sm:text-[22px]">{{ group.title }}</h3>
              <ul class="mt-[12px] space-y-[6px] text-[18px] leading-[1.06] text-[#5b5b5b] sm:text-[20px]">
              <li v-for="item in group.items" :key="item.label">
                <a :href="item.href" class="underline decoration-black/70 underline-offset-[2px]">
                  {{ item.label }}
                </a>
              </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  </div>
</template>
