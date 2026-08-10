export type JourneyStep = {
  title: string;
  body: string;
  /**
   * Trailing clause rendered as one unbreakable inline block, so the linked
   * sentence always starts on its own line — as it does in the design.
   */
  bodyTail?: { lead: string; link: { label: string; href: string } };
  meta: string;
  state: "done" | "upcoming";
  icon: "check" | "heart" | "calendar" | "sparkle";
};

export type Supporter = {
  name: string;
  amount: number;
  when: string;
};

export const campaign = {
  currency: "A$",
  name: "Sarah",
  age: 32,
  location: "Sydney, Australia",
  verified: true,
  photo: "/sarah.jpg",
  quote:
    "“I’ve wanted to feel confident in my skin for so long. This is my step towards a new chapter.”",

  procedure: "Upper Blepharoplasty",
  clinic: "Bangkok Clinic",
  date: "To be confirmed",

  raised: 8150,
  goal: 12000,
  supporterCount: 156,
  daysLeft: 24,

  about: [
    "I’m a mum of two beautiful girls and a full-time teacher. After years of putting everyone else first, I’m ready to do something for me.",
    "This procedure isn’t just about how I look – it’s about how I feel when I look in the mirror.",
  ],
  aboutClosing: "Thank you to everyone who supports me on this journey.",

  journey: [
    {
      title: "Quote Verified",
      body: "Quote for Upper Blepharoplasty verified by Glow.",
      meta: "A$12,000",
      state: "done",
      icon: "check",
    },
    {
      title: "Fundraising",
      body: "Sarah’s Glow Goal is being funded by kind supporters like you.",
      meta: "A$8,150",
      state: "done",
      icon: "heart",
    },
    {
      title: "Procedure",
      body: "The date will be set once ",
      bodyTail: {
        lead: "Sarah’s ",
        link: { label: "Glow Goal is reached.", href: "#glow-goal" },
      },
      meta: "To be confirmed",
      state: "upcoming",
      icon: "calendar",
    },
    {
      title: "Glow Story",
      body: "Sarah will share her story and results to inspire others.",
      meta: "Coming soon",
      state: "upcoming",
      icon: "sparkle",
    },
  ] satisfies JourneyStep[],

  supporters: [
    { name: "Amy", amount: 50, when: "2 hours ago" },
    { name: "Jess", amount: 25, when: "5 hours ago" },
    { name: "Megan", amount: 100, when: "1 day ago" },
    { name: "Sophia", amount: 30, when: "1 day ago" },
  ] satisfies Supporter[],

  giftAmounts: [25, 50, 100],
  defaultGiftAmount: 50,
};

export const formatMoney = (value: number) =>
  `${campaign.currency}${value.toLocaleString("en-AU")}`;

/** 8,150 of 12,000 -> 68 */
export const percentFunded = Math.round((campaign.raised / campaign.goal) * 100);

/** Amount still needed to reach the Glow Goal. */
export const remaining = Math.max(campaign.goal - campaign.raised, 0);
