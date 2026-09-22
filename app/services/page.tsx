import ServiceHero from "@/app/Pages/services/ServiceHero";
import ServiceProcess from "@/app/Pages/services/ServiceProcess";
import ServiceCTA from "../Pages/services/ServiceCTA";

export default function Services() {
  return (
    <main className="relative">
      <ServiceHero />
      <ServiceProcess />
      <ServiceCTA />
    </main>
  );
}
