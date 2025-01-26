export interface Education {
  year: string;
  institution: string;
  degree: string;
  advisor?: string;
  thesis?: string;
  thesisUrl?: string;
}

export const educationData: Education[] = [
  // If you don't want to show education, just make the array empty.
  // {
  //   year: "2022-2027",
  //   institution: "McGill University",
  //   degree: "Ph.D. in Music Technology",
  //   // advisor: "Asst. Prof. Zhixin Xu",
  // },
  // {
  //   year: "2019—2022",
  //   institution: "Shanghai Jiao Tong University",
  //   degree: "M.A. in Journalism and Mass Communications",
  //   // advisor: "Asst. Prof. Zhixin Xu",
  // },
  // {
  //   year: "2015—2019",
  //   institution: "Beijing University of Posts and Telecommunications",
  //   degree: "B.E. in Digital Media Technology",
  //   // thesis: "Algorithmic Approaches to Causal Discovery",
  //   // Optional links to thesis
  //   // thesisUrl: "https://dspace.mit.edu/handle/1721.1/149111"
  // },
];
