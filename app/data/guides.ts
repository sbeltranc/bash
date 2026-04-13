export type GuideCodeBlock = {
  title: string
  language: string
  code: string
}

export type GuideSection = {
  id: string
  title: string
  body: string[]
  codeBlocks?: GuideCodeBlock[]
  checklist?: string[]
}

export type Guide = {
  slug: string
  title: string
  category: string
  summary: string
  eyebrow: string
  readingTime: string
  accent: string
  sections: GuideSection[]
}

export const guides: Guide[] = [
  {
    slug: 'start-here',
    title: 'Start Here',
    category: 'Read This',
    summary: 'Understand how Bash works and Hack Club programs!',
    eyebrow: 'First stop',
    readingTime: '4 min',
    accent: '#111111',
    sections: [
      {
        id: 'what-bash-is',
        title: 'What Bash is',
        body: [
          'Bash is a program where you make one themed project each week, track the time you spend on it, and ship before the deadline.',
          'You can get matched with a friend or someone across the world and compete to see who earns more points that week.',
        ]
      },
      {
        id: 'how-points-work',
        title: 'How points work',
        body: [
          'Every approved project hour gives you 50 points. So if you ship 10 hours into your projects, that starts as 500 points before streaks or matchups change the final payout.',
          'Your Hackatime streak works like a multiplier. It starts at 1.0x, goes up by 0.1 each day you keep building, and caps at 1.7x.',
          'If you get matched against someone for the week, whoever earns more points wins the matchup and gets 10% from the other persons weekly project payout.'
        ]
      },
      {
        id: 'guick-tip',
        title: 'A quick tip',
        body: [
          'If you are stuck, start with a tiny stuff. Make something silly with the theme, or even maybe make a small automations which counts if the theme allows to.',
          'Your first project should be something not so big at first! Bigger ideas get easier once you do some easier projects before.'
        ]
      }
    ]
  },
  {
    slug: 'make-a-slack-bot',
    title: 'Make a Slack Bot',
    category: 'Weeks Guide',
    summary: 'Make a small Slack bot that replies when people mention it.',
    eyebrow: 'Week theme',
    readingTime: '12 min',
    accent: '#F2C94C',
    sections: [
      {
        id: 'what-you-will-make',
        title: 'What you will make',
        body: [
          'You will make a small Slack bot. When someone mentions it, it sends one message back.',
          'The bot runs on your computer while you build. Later, you can put it on a server if you want it to stay online all day.'
        ],
        checklist: [
          'It only replies when someone mentions it.',
          'It waits before replying again, so it does not send too many messages.',
          'It keeps Slack tokens in a .env file.'
        ]
      },
      {
        id: 'create-the-project',
        title: 'Create the project',
        body: [
          'Open your terminal. Run these commands in the folder where you keep your projects.',
          'I personally use bun as my package manager, but if you use npm, you can do the same idea with npm commands.'
        ],
        codeBlocks: [
          {
            title: 'Terminal commands',
            language: 'sh',
            code: [
              'mkdir slack-bot',
              'cd slack-bot',
              'bun init -y',
              'bun add @slack/bolt dotenv',
              'bun add -d typescript @types/node',
              'mkdir src',
              'touch src/index.ts .env .env.example .gitignore'
            ].join('\n')
          }
        ]
      },
      {
        id: 'create-the-slack-app',
        title: 'Create the Slack app',
        body: [
          'Go to api.slack.com/apps and make a new app. Choose "From scratch". Give it a name like Bash Bot and choose your test workspace.',
          'Turn on Socket Mode. Make an app-level token with the connections:write scope. This token starts with xapp-.',
          'Go to OAuth & Permissions. Add the bot scopes app_mentions:read and chat:write. Then install the app to your workspace. The bot token starts with xoxb-.',
          'Go to Event Subscriptions. Subscribe to the app_mention bot event. Then invite the bot to a test channel.'
        ],
        checklist: [
          'Socket Mode is on.',
          'SLACK_APP_TOKEN starts with xapp-.',
          'SLACK_BOT_TOKEN starts with xoxb-.',
          'Bot scopes are app_mentions:read and chat:write.',
          'Bot event is app_mention.'
        ]
      },
      {
        id: 'add-the-files',
        title: 'Add the files',
        body: [
          'Your project should look like this. Put your real tokens only in .env. Do not commit .env to GitHub.',
          'Open package.json and add the scripts below. Keep the dependencies that Bun wrote when you ran bun add.'
        ],
        codeBlocks: [
          {
            title: '.env.example',
            language: 'dotenv',
            code: [
              'SLACK_BOT_TOKEN=xoxb-your-bot-token',
              'SLACK_APP_TOKEN=xapp-your-app-token'
            ].join('\n')
          },
          {
            title: '.gitignore',
            language: 'gitignore',
            code: [
              '.env'
            ].join('\n')
          },
          {
            title: 'package.json',
            language: 'json',
            code: [
              '{',
              '  "type": "module",',
              '  "scripts": {',
              '    "dev": "bun --watch src/index.ts",',
              '    "start": "bun src/index.ts"',
              '  }',
              '}'
            ].join('\n')
          },
          {
            title: 'src/index.ts',
            language: 'ts',
            code: [
              "import 'dotenv/config'",
              "import { App } from '@slack/bolt'",
              '',
              'const botToken = process.env.SLACK_BOT_TOKEN',
              'const appToken = process.env.SLACK_APP_TOKEN',
              '',
              'if (!botToken || !appToken) {',
              "  throw new Error('Missing Slack tokens in .env')",
              '}',
              '',
              'const app = new App({',
              '  token: botToken,',
              '  appToken,',
              '  socketMode: true',
              '})',
              '',
              'const waitTimeMs = 2 * 60 * 1000',
              'const lastReplyByChannel = new Map<string, number>()',
              '',
              "app.event('app_mention', async ({ event, say }) => {",
              '  const now = Date.now()',
              '  const lastReply = lastReplyByChannel.get(event.channel) ?? 0',
              '',
              '  if (now - lastReply < waitTimeMs) {',
              '    return',
              '  }',
              '',
              '  lastReplyByChannel.set(event.channel, now)',
              '',
              "  await say(`<@${event.user}> Hello. I am working.`)",
              '})',
              '',
              'await app.start()',
              '',
              "console.log('Slack bot is running')"
            ].join('\n')
          }
        ]
      },
      {
        id: 'run-and-test',
        title: 'Run and test',
        body: [
          'Copy the example env file. Then open .env and paste your real Slack tokens.',
          'Start the bot. In Slack, invite the bot to your test channel and mention it. It should reply with one message.'
        ],
        codeBlocks: [
          {
            title: 'Terminal commands',
            language: 'sh',
            code: [
              'cp .env.example .env',
              '# Now edit .env and paste your real tokens.',
              'bun run dev'
            ].join('\n')
          },
          {
            title: 'Test in Slack',
            language: 'text',
            code: [
              '/invite @Bash Bot',
              '@Bash Bot hello'
            ].join('\n')
          }
        ],
        checklist: [
          'The terminal says Slack bot is running.',
          'The bot replies when you mention it.',
          'The bot does not reply again right away because of the wait time.',
          'You can stop the bot with Ctrl+C.'
        ]
      },
      {
        id: 'change-the-reply',
        title: 'Change the reply',
        body: [
          'After the bot works, change the text inside say(). This is the message your bot sends back.',
          'Keep the wait time in the code. It helps stop the bot from sending too many messages.'
        ],
        codeBlocks: [
          {
            title: 'Line to edit',
            language: 'ts',
            code: [
              "await say(`<@${event.user}> Hello. I am working.`)"
            ].join('\n')
          }
        ],
        checklist: [
          'Only change the message text first.',
          'Run bun run dev again after editing.',
          'Mention the bot in Slack to test the new reply.',
          'Take a screenshot or short video for your Bash submission.'
        ]
      }
    ]
  },
  {
    slug: 'choose-a-project',
    title: 'Choose a Project',
    category: 'Requirements',
    summary: 'What project could work the best for the week?',
    eyebrow: 'Project shape',
    readingTime: '5 min',
    accent: '#D93025',
    sections: [
      {
        id: 'make-it-shippable',
        title: 'Make it shippable',
        body: [
          'A shippable project has a clear user, a public way to experience it, and a finish line you can reach in the week.',
          'Avoid ideas that only work after a really complex setup process. Pick a version that runs from a playable link without requiring someone to compile code or understand your dev setup.'
        ],
        checklist: [
          'One sentence explains what it does.',
          'A stranger can open the playable link and experience the result.',
          'The project has at least one real technical challenge.',
          'The first version can be finished this week.'
        ]
      },
      {
        id: 'simplicity',
        title: 'Make it simple',
        body: [
          'Cut the idea until it has one main promise. Keep the most exciting part and remove anything that only makes the project sound impressive.',
          'You can always add a second feature after the first one works. A small deployed project beats a giant idea that only exists as source code.'
        ]
      },
      {
        id: 'not-projects',
        title: 'What does not count',
        body: [
          'A GitHub release with only source code is not a playable project. Neither is something that requires someone to build from source before they can use it.',
          'Google Colab, Jupyter notebooks, LeetCode solutions, competitive programming answers, and algorithm challenge repositories are development artifacts, not deployable project demos.'
        ]
      }
    ]
  },
  {
    slug: 'track-time',
    title: 'Track Time',
    category: 'Requirements',
    summary: 'Set up Hackatime, connect it to the right project, and keep your hours believable.',
    eyebrow: 'Hours',
    readingTime: '4 min',
    accent: '#0066CC',
    sections: [
      {
        id: 'setup-hackatime',
        title: 'Set up Hackatime first',
        body: [
          'Before you start building, go through the Hackatime setup page and install the integration for the editor you are actually using.',
          'The setup command includes your Hackatime key, so treat it like a private login. Run it in your own terminal or PowerShell and do not paste the full command in Slack or a public channel.'
        ],
        checklist: [
          'Open hackatime.hackclub.com/my/wakatime_setup.',
          'Install the supported editors or terminal integration.',
          'Run the setup command on the computer you will code.',
          'Restart your editor if the status bar still does not change.'
        ]
      },
      {
        id: 'make-a-project-folder',
        title: 'Use a project folder',
        body: [
          'Hackatime projects are not something you usually create by hand. They show up when you start coding in a project folder that your editor can recognize.',
          'Make a folder for the project, open that folder in your editor, and make it a git repo. The folder or repo name becomes the Hackatime project name.'
        ],
        checklist: [
          'Create one folder for the Bash project.',
          'Open that folder directly in VS Code, Godot, terminal, or your editor.',
          'Run git init in that folder if it is not already a repo.',
          'Keep your code, commits, journal, and demo tied to that same project.'
        ]
      },
      {
        id: 'check-that-it-appears',
        title: 'Check that it appears',
        body: [
          'After setup, start coding for a few minutes and check Hackatime. Your project should appear automatically once heartbeats are coming from the right folder.',
          'If Bash asks you to choose a Hackatime project for a journal or submission and the dropdown is empty. It usually means you have not started coding in the tracked folder yet, the folder is not a git repo, or the editor setup is not actually running.'
        ],
        checklist: [
          'Look at your editor status bar for Hackatime or Wakatime activity.',
          'Check hackatime.hackclub.com/my/projects for the project name.',
          'If it says Unknown, make sure the folder is a git repo.',
          'If nothing moves, ask for help in #hackatime-help on the Slack.'
        ]
      },
      {
        id: 'when-hackatime-cannot-see-it',
        title: 'When Hackatime cannot see it',
        body: [
          'For code, use Hackatime through supported editor, game engine, or terminal integrations. The Wakatime Desktop app is not a reliable way to add Hackatime hours.',
          'If the work you are doing is for example making art, Hackatime cannot track it well, use Lapse or another program-approved timelapse tool and explain it in your journal. Do this before you build up hours, not after review because it gets confusing.'
        ],
        checklist: [
          'Use Hackatime whenever your editor or engine supports it.',
          'Use Lapse for legitimate project work Hackatime cannot see.',
          'Ask before relying on a weird tool, unsupported platform, or custom tracker.',
          'Keep timelapse proof near the same dates as your journal entries.'
        ]
      }
    ]
  },
  {
    slug: 'journal-your-progress',
    title: 'Journal Your Progress',
    category: 'Requirements',
    summary: 'Write your war histories trying to debug and make your project work.',
    eyebrow: 'Build log',
    readingTime: '6 min',
    accent: '#246B45',
    sections: [
      {
        id: 'write-for-context',
        title: 'Write for context',
        body: [
          'A useful journal entry says what you tried, what changed, what broke, and what you will do next.',
          'Screenshots and photos are great, but they need a sentence or two explaining why they matter.'
        ]
      },
      {
        id: 'entry-template',
        title: 'Entry template',
        body: [
          'Use the same tiny structure when you do not know what to write. It keeps the journal fast and easy to follow later.'
        ],
        checklist: [
          'Today I worked on...',
          'The hardest part was...',
          'I changed or learned...',
          'Next I need to...'
        ]
      },
      {
        id: 'dont-be-perfect',
        title: 'Try not to be perfect',
        body: [
          'A failed attempt is still useful if you explain what happened. Your journal does not need a perfect story and allows us to know what was your thought process behind your project.',
          'So, go ahead and mention you were trying to run a script outside of the project folder for 5 minutes, and couldnt figure out why it didnt run.'
        ]
      }
    ]
  },
  {
    slug: 'submit-your-build',
    title: 'Submitting Your Project',
    category: 'Requirements',
    summary: 'How to ensure your project doesnt get denied by common reasons',
    eyebrow: 'Deadline',
    readingTime: '7 min',
    accent: '#8D4B2F',
    sections: [
      {
        id: 'submission-basics',
        title: 'Submission basics',
        body: [
          'A strong submission has a playable URL, a public code URL, a screenshot, a clear description, the journal, tracked hours, and a short explanation of what changed during the week.',
          'Pretend someone has five minutes and no context. Put the important proof where they can find it quickly.'
        ],
        checklist: [
          'Playable URL where anyone can experience the project.',
          'Public version-control repository with a README.',
          'Screenshot or photo that shows what the project looks like.',
          'Concise description of what the project is for.',
          'Journal entries for the week.',
          'Time logs connected to the project.',
          'Credits for templates, tutorials, libraries, or collaborators.'
        ]
      },
      {
        id: 'playable-url',
        title: 'Playable URL',
        body: [
          'The playable URL must be a public link where someone can experience the project without significant technical knowledge.',
          'Good playable links include a browser game, a web app, a hosted interactive prototype, or a downloadable executable for at least one platform. It does not need to run everywhere.'
        ],
        checklist: [
          'Do not submit only source code as the playable URL.',
          'Do not require someone to compile or build from source.',
          'Do not use a hosted notebook as the demo.',
          'Do not submit LeetCode or algorithm challenge solutions.'
        ]
      },
      {
        id: 'code-url',
        title: 'Code URL',
        body: [
          'The code URL should point to a public version-control repository, preferably GitHub, though GitLab, Bitbucket, and similar hosts are fine.',
          'The repo must be accessible without authentication, contain a README, and show development progress through multiple commits. A single-commit repo does not support a serious hour claim.'
        ],
        checklist: [
          'Public repository.',
          'README explains what it is, setup, and how to run it.',
          'Multiple commits that reflect real progress.',
          'Open-source license encouraged.'
        ]
      },
      {
        id: 'screenshot-description',
        title: 'Screenshot and description',
        body: [
          'The screenshot should visually demonstrate the project. Use a screenshot of the running app, a game screen, a hardware photo, a 3D model render, or any image that clearly shows the project.',
          'The description should say what the project is and what it is intended for. Keep it concise, but make sure someone can understand the purpose and functionality.'
        ]
      },
      {
        id: 'before-submit',
        title: 'Before you submit',
        body: [
          'Open your playable URL and code URL in a private window, play your demo, check your screenshot, and skim the journal from top to bottom.',
          'If something needs setup after download, say exactly what to do. A working local project is still hard to try if the instructions are missing.'
        ]
      },
      {
        id: 'after-submit',
        title: 'After you submit',
        body: [
          'Keep the repo and demo available at all times. If a link breaks after submission, update it as soon as you can.',
          'If your project gets rejected in a week, try to understand what did you do wrong.'
        ]
      }
    ]
  },
  {
    slug: 'how-review-works',
    title: 'Know What Counts',
    category: 'Requirements',
    summary: 'Understand how your hours, AI help, time proof, and asset work are handled.',
    eyebrow: 'Rules',
    readingTime: '6 min',
    accent: '#5D4A99',
    sections: [
      {
        id: 'default-deflation',
        title: 'Why did my hours get cut?',
        body: [
          'Your hours can be reduced when the time you claim is not backed up by your project, commits, journal, and Hackatime.',
          'Intent matters, but the number still needs proof. If the proof is unclear, only claim the hours you can stand behind.'
        ],
        checklist: [
          'Project complexity matches the time you claim.',
          'Your commits show incremental progress.',
          'Your Hackatime data looks like real work.',
          'Your journal explains what happened.'
        ]
      },
      {
        id: 'fraud',
        title: 'Fraud & Time Inflation',
        body: [
          'Do not fake time or ownership. Clear fraud or time inflation can get your submission rejected outright and can put future Hack Club participation at risk.',
          'That includes fabricated Hackatime data, copied projects submitted as your own, fake commit histories, or trying to defraud Hack Club.'
        ]
      },
      {
        id: 'ai-code',
        title: 'Vibe Coding',
        body: [
          'AI tools are allowed. What matters is the work you put into building, debugging, and learning from your project.',
          'A one prompt project with no soul on it is not eligible for approval. If a reviewer cant confirm what parts of your project are AI or not, expect hour deflation or project rejection.'
        ]
      },
      {
        id: 'art-limit',
        title: 'Art hours limit',
        body: [
          'Art and CAD creation can count when they are important to the project, such as sprites, 3D models, sound design, or level design for a game.',
          'Keep that work under 25% of the total hours from your project, as your project is intended to be technological not art.'
        ]
      }
    ] 
  }
]

export const guideCategories = Array.from(new Set(guides.map((guide) => guide.category)))

export const getGuideBySlug = (slug: string) => guides.find((guide) => guide.slug === slug)

export const getGuidesByCategory = (category: string) => guides.filter((guide) => guide.category === category)
