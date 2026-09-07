import GameActivity from "../models/gameActivity.js";

const defaultGames = [
  {
    title: "Turmeric Tag",
    category: "Haldi",
    description:
      "A playful chase game where guests smeared with haldi try to tag each other before the couple gets covered in turmeric paste.",
    groupSize: { min: 6, max: 30 },
    durationMinutes: 15,
    propsNeeded: ["Haldi paste", "Old clothes"],
    energyLevel: "High",
  },
  {
    title: "Haldi Hunt",
    category: "Haldi",
    description:
      "Hide small haldi-themed tokens around the venue and let guests hunt for them — the first to find all wins a prize.",
    groupSize: { min: 4, max: 20 },
    durationMinutes: 20,
    propsNeeded: ["Haldi tokens", "Prize basket"],
    energyLevel: "Medium",
  },
  {
    title: "Mehndi Design Challenge",
    category: "Mehendi",
    description:
      "Split guests into teams and have them freehand mehndi designs on paper — the couple picks their favorite.",
    groupSize: { min: 4, max: 25 },
    durationMinutes: 25,
    propsNeeded: ["Paper", "Mehndi cones", "Sample designs"],
    energyLevel: "Low",
  },
  {
    title: "Bangle Toss",
    category: "Mehendi",
    description:
      "A ring-toss style game using colorful bangles thrown onto bottles or pegs — great for a relaxed mehendi afternoon.",
    groupSize: { min: 2, max: 20 },
    durationMinutes: 15,
    propsNeeded: ["Bangles", "Bottles or pegs"],
    energyLevel: "Low",
  },
  {
    title: "Dance Battle",
    category: "Sangeet",
    description:
      "Family teams prepare short dance performances and compete for the loudest cheer from the crowd.",
    groupSize: { min: 10, max: 60 },
    durationMinutes: 40,
    propsNeeded: ["Speaker system", "Choreography time"],
    energyLevel: "High",
  },
  {
    title: "Who Knows The Couple Best",
    category: "Sangeet",
    description:
      "A fun quiz where family and friends answer questions about the couple — the one who scores highest wins.",
    groupSize: { min: 8, max: 40 },
    durationMinutes: 20,
    propsNeeded: ["Question cards", "Microphone"],
    energyLevel: "Medium",
  },
  {
    title: "Lip Sync Battle",
    category: "Sangeet",
    description:
      "Guests lip-sync to popular Bollywood songs with full drama and props — judged by the couple.",
    groupSize: { min: 6, max: 30 },
    durationMinutes: 30,
    propsNeeded: ["Playlist", "Props/costumes"],
    energyLevel: "High",
  },
  {
    title: "Ring Hunt",
    category: "Engagement",
    description:
      "A light-hearted search game where guests look for a decoy ring hidden around the engagement venue.",
    groupSize: { min: 4, max: 20 },
    durationMinutes: 15,
    propsNeeded: ["Decoy ring", "Small prize"],
    energyLevel: "Medium",
  },
  {
    title: "The Shoe Game",
    category: "Reception",
    description:
      "The couple sits back-to-back holding each other's shoe and answers questions about their relationship by raising the correct shoe.",
    groupSize: { min: 2, max: 2 },
    durationMinutes: 15,
    propsNeeded: ["Couple's shoes", "Question list", "Microphone"],
    energyLevel: "Low",
  },
  {
    title: "Musical Chairs — Wedding Edition",
    category: "Reception",
    description:
      "A classic musical chairs game themed around the wedding, played by guests of all ages during the reception.",
    groupSize: { min: 8, max: 40 },
    durationMinutes: 15,
    propsNeeded: ["Chairs", "Music system"],
    energyLevel: "Medium",
  },
  {
    title: "Wedding Trivia",
    category: "Cocktail",
    description:
      "A relaxed trivia round about the couple's love story, played over cocktails and appetizers.",
    groupSize: { min: 6, max: 30 },
    durationMinutes: 20,
    propsNeeded: ["Trivia cards", "Microphone"],
    energyLevel: "Low",
  },
  {
    title: "Photo Booth Challenge",
    category: "General",
    description:
      "Set up a themed photo booth with props and challenge guests to recreate fun poses throughout the event.",
    groupSize: { min: 2, max: 100 },
    durationMinutes: 60,
    propsNeeded: ["Photo booth props", "Camera/backdrop"],
    energyLevel: "Low",
  },
];

export async function seedDefaultGames() {
  try {
    const count = await GameActivity.countDocuments({ isCustom: false });
    if (count === 0) {
      await GameActivity.insertMany(defaultGames);
      console.log("Seeded default wedding games catalog.");
    }
  } catch (error) {
    console.log("Game Seed Error:", error);
  }
}
