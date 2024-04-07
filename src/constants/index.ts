import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Telegram Shiller",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: "Axie Infinity Worker",
    companyName: "Axie Infinity",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Earning 22 cents per hour as an Axie Infinity player, a modest but joyful achievement that helped support my family.",
      "Immersing myself in the world of NFT gaming, where each victory in Axie Infinity contributed to our livelihood.",
      "Harnessing gaming skills to earn from NFTs, bringing both financial aid and joy to my family with every small success.",
      "Treasuring the ability to provide through gaming, celebrating every cent earned as a step towards stability.",
    ],
  },
  {
    title: "Telegram Shiller",
    companyName: "Doge",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2022 - April 2023",
    points: [
      "Engaging with crypto-focused Telegram groups to promote specific cryptocurrency projects, using persuasive language and calls to action like BUY NOW! to capture attention and stimulate interest.",
      "Utilizing a variety of engaging and humorous GIFs, memes, and emotive language to create a lively atmosphere and foster excitement around the crypto projects, aiming to artificially increase conversation volume and interest.",
      "Strategically planning and executing shilling campaigns across multiple Telegram channels, coordinating timing and messages to maximize impact and project visibility within the crypto community.",
      "Monitoring group reactions and adapting strategies in real-time to maintain engagement levels, using feedback to fine-tune messaging and ensure the promotional content resonates with the target audience.",
    ],
  },
  {
    title: "Whitelist Grinding",
    companyName: "Self Employeed",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "May 2023 - Feb 2024",
    points: [
      "Spending countless hours in Discord chats and engaging with Twitter posts to secure a spot on NFT whitelists, leveraging the peak NFT craze for a chance at lucrative investments.",
      "Diligently following and interacting with multiple NFT projects online, demonstrating commitment and enthusiasm to be selected for whitelist opportunities, which could lead to early access to promising NFTs.",
      "Crafting engaging and thoughtful responses in community chats and on social media platforms, aiming to stand out among thousands of hopefuls vying for a limited number of whitelist spots.",
      "Celebrating each successful whitelist entry as a significant achievement, knowing it represents a potential for financial gain and exclusive access to high-demand NFT drops during the height of the digital art and collectibles market.",
    ],
  },
  {
    title: "Solana Memecoin Drainer",
    companyName: "Dexscreener",
    icon: meta,
    iconBg: "#383E56",
    date: "March 2014 - Preset",
    points: [
      "Scouring the Solana blockchain for the next big memecoin, armed with a win rate of 60% but averaging gains of just 0.1 to 0.01 SOL per trade, a testament to the gritty reality of chasing digital dreams on a shoestring budget.",
      "Living on the edge of the volatile memecoin market, where each trade is a mix of hope and desperation, barely scraping enough profits to contribute to the family's finances, one small win at a time.",
      "Celebrating each successful trade, no matter how modest, as it means being able to provide for my family, even if it's just the basics, in the unpredictable world of Solana memecoin trading.",
      "Enduring the highs and lows of memecoin speculation, where even a small victory of 0.01 SOL feels like a lifeline, underscoring the relentless pursuit to support my loved ones through the chaotic dance of crypto trading.",
    ],
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "Despite the stench being unbearing, and the lack of english, jeet dev is an affordable option to hire for your crypto scams.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Axie Infinity",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Jeet is relentless in his telegram shilling, constantly typing in all caps, sending voice messages, does everything he can to help you out.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Sometimes I can here his kids and wife in the background, maybe its due to the closet sized house but he is a very hard worker and does anything to make 20 cents",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Landing Page for Rug",
    description:
      "Web-based platform that allowed solana meme coin devs to instantly drain the liquidity and siphon all funds from buyers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Telegram Gifs",
    description:
      "Created an extensive library of telegram gifs for project admins to use to shill their crypto scams.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
