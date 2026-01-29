import ServiceCTA from "./ServiceCTA";
import ServiceHero from "./ServiceHero";
import ServiceList from "./ServiceList";
import ServiceProcess from "./ServiceProcess";

export default function HService() {
  return (
<main className="overflow-hidden">
      <ServiceHero />
      <ServiceList />
      <ServiceCTA />
      <ServiceProcess />
      
    </main>
  )
}