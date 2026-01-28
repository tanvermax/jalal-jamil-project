import { Card, CardContent, CardFooter} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Import images
import constructionNewsImg from "@/assets/images/construction-news.jpg";
import manpowerNewsImg from "@/assets/images/manpower-news.jpg";
import foodNewsImg from "@/assets/images/food-news.jpg";

const newsData = [
  {
    id: 1,
    title: "New Construction Project Launched in Riyadh",
    summary:
      "Jalal Jamil Project Company has officially started a new commercial construction project in Riyadh, supporting Saudi Vision 2030.",
    date: "Jan 2026",
    category: "Projects",
    image: constructionNewsImg,
  },
  {
    id: 2,
    title: "Manpower Supply Agreement Signed",
    summary:
      "We signed a strategic manpower supply agreement to support logistics and food service companies across KSA.",
    date: "Dec 2025",
    category: "Partnership",
    image: manpowerNewsImg,
  },
  {
    id: 3,
    title: "Expanding Food Services Operations",
    summary:
      "Our food services division is expanding to serve more corporate clients with high-quality catering solutions.",
    date: "Nov 2025",
    category: "Business",
    image: foodNewsImg,
  },
];

export default function News() {
  return (
    <section
      className="py-24 bg-white"
      aria-labelledby="news-heading"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* SEO-friendly heading */}
        <h2
          id="news-heading"
          className="text-3xl md:text-4xl font-bold text-center mb-14"
        >
          Latest News & Updates
        </h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {newsData.map((item) => (
            <Card
              key={item.id}
              className="flex flex-col hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={item.image}
                  alt={`${item.title} image`}
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              <CardContent className="p-6 flex-1">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="secondary">{item.category}</Badge>
                  <span className="text-xs text-muted-foreground">
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-3 leading-snug">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.summary}
                </p>
              </CardContent>

              <CardFooter className="px-6 pb-6">
                <Button
                  variant="outline"
                  className="w-full"
                  aria-label={`Read more about ${item.title}`}
                >
                  Read More
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
