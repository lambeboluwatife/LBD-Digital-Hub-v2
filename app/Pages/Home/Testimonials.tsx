import { Star } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-24 px-6 bg-surface border-y border-border-tech">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <span className="font-mono text-xs uppercase tracking-widest text-primary mb-2 block">
            VERIFIED IMPACT
          </span>
        </div>
        <div className="bg-[#080D0E] border border-border-tech rounded-md p-8 sm:p-12 relative overflow-hidden">
          <div className="flex items-center gap-1 mb-8 text-primary">
            {[...Array(5)].map((_, i) => (
              <Star className="text-primary" fill="#12c887" key={i} />
            ))}
            <span className="ml-2 font-mono text-xs text-text-dim">
              ENTERPRISE AUDIT: 5.0
            </span>
          </div>
          <blockquote className="font-display text-xl sm:text-2xl lg:text-3xl text-text-white font-medium leading-snug mb-10">
            "L.B.D Digital Hub didn't just build us a website; they
            re-engineered our entire digital workflow. Our system throughput
            tripled within the first quarter after launch, eliminating technical
            debt and driving concrete revenue."
          </blockquote>
          <div className="flex items-center gap-4 pt-6 border-t border-border-tech">
            <div className="w-11 h-11 rounded-full bg-surface border border-border-tech flex items-center justify-center font-mono font-semibold text-primary">
              MC
            </div>
            <div>
              <div className="font-display font-semibold text-text-white text-base">
                Marcus Chen
              </div>
              <div className="font-mono text-xs text-text-muted uppercase">
                CTO, Vertex Global Infrastructure
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
