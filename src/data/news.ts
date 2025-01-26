export interface News {
  date: string;
  title: string;
  link?: string;
}

export const newsData: News[] = [
  // If you don't want to show news, just make the array empty.
  {
    date: "January 2025",
    title: "Our CHI paper was conditionally accepted at CHI 2025!",
    link: "https://chi2025.acm.org/",
  },
  {
    date: "December 2024",
    title: "A Graduate Student Consortium paper was accepted at TEI 2025!",
    link: "https://tei.acm.org/2025/",
  },
  {
    date: "November 2024",
    title: "I got IEEE TCH Innovation in Haptics Research Grant!",
    link: "https://www.ieee-ras.org/haptics/activities/research-proposals",
  }
];
