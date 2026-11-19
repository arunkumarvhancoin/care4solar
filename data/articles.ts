export interface ArticleItem {
  id: string;
  category:
    | "Residential Solar"
    | "Solar Maintenance"
    | "Solar Technology"
    | "Commercial & Industrial Solar"
    | "Solar Performance";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
}

export const articleCategories = [
  "All",
  "Residential Solar",
  "Solar Maintenance",
  "Solar Technology",
  "Commercial & Industrial Solar",
  "Solar Performance",
] as const;

export const sampleArticles: ArticleItem[] = [
  {
    id: "art-1",
    category: "Solar Performance",
    title: "How Long Do Modern Solar Panels Really Last?",
    excerpt:
      "A practical look at how quality solar panels age over 25 years, what warranties actually cover, and how to maintain high energy output.",
    readTime: "5 min read",
    date: "November 2024",
    author: "Technical Advisory",
    image:
      "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=1200&auto=format&fit=crop",
    featured: true,
  },
  {
    id: "art-2",
    category: "Solar Maintenance",
    title: "Why Washing Solar Panels with Tap Water Is a Mistake",
    excerpt:
      "Hard water leaves mineral scale on panel glass that blocks sunlight over time. Here is the right way to keep panels clean and generating peak power.",
    readTime: "4 min read",
    date: "October 2024",
    author: "Operations Team",
    image:
      "https://images.unsplash.com/photo-1754619880959-2b0528375883?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-3",
    category: "Residential Solar",
    title: "Net Metering Explained: How Solar Credits Lower Your Bill",
    excerpt:
      "A simple breakdown of how bi-directional meters work, what happens to extra power you send to the grid, and how your bill is calculated.",
    readTime: "5 min read",
    date: "September 2024",
    author: "Advisory Team",
    image:
      "https://images.unsplash.com/photo-1780445392417-68b9dccc45f2?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-4",
    category: "Solar Technology",
    title: "Thermal Inspections: Spotting Hidden Solar Issues Early",
    excerpt:
      "How thermal cameras spot invisible panel cracks, faulty wiring, and hotspots before they damage equipment or cause power loss.",
    readTime: "5 min read",
    date: "August 2024",
    author: "Diagnostics Team",
    image:
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-5",
    category: "Commercial & Industrial Solar",
    title: "Buying Solar vs Zero-Upfront: Which Is Right for Your Business?",
    excerpt:
      "A straightforward comparison between owning your solar plant outright and choosing a zero-investment power purchase agreement.",
    readTime: "6 min read",
    date: "July 2024",
    author: "Commercial Advisory",
    image:
      "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
  {
    id: "art-6",
    category: "Residential Solar",
    title: "What to Expect on Net Meter Connection Day",
    excerpt:
      "A simple step-by-step walkthrough of the power company inspection, meter replacement, and switching on your rooftop system.",
    readTime: "4 min read",
    date: "June 2024",
    author: "Operations Team",
    image:
      "https://images.unsplash.com/photo-1780445392792-556e5609c5ab?q=80&w=1000&auto=format&fit=crop",
    featured: false,
  },
];
