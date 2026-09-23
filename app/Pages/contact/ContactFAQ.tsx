import { ChevronDown } from "lucide-react";

export default function ContactFAQ() {
  const faqs = [
    {
      question: "What is your typical project delivery timeline?",
      answer:
        "Most web and mobile applications launch within 6 to 12 weeks, while focused MVPs or AI automation setups can be completed in 2 to 4 weeks. We work in collaborative two-week milestones, so you see live, demonstrable progress regularly and can share feedback throughout.",
      defaultOpen: false,
    },
    {
      question: "How do you ensure data security and AI privacy?",
      answer:
        "Your business data and intellectual property remain 100% private and protected. We use secure private instances, encrypted database connections, and enterprise API configurations so your company's proprietary data is never used to train public models.",
      defaultOpen: true,
    },
    {
      question: "Do you offer ongoing maintenance and post-launch support?",
      answer:
        "Yes, we partner with clients long-term. We offer dedicated support packages that include proactive uptime monitoring, security updates, bug fixes, feature enhancements, and cloud infrastructure management.",
      defaultOpen: false,
    },
    {
      question: "How do we get started?",
      answer:
        "Simply fill out the inquiry form above with your project outline. We'll review your requirements, follow up with clarifying questions or a short discovery call, and provide a clear proposal with timelines and fixed pricing.",
      defaultOpen: false,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-24">
      <div className="max-w-3xl">
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-1.5 h-1.5 rounded-full bg-[#12C887]"></span>
          <span className="font-mono text-xs text-[#12C887] uppercase tracking-widest font-semibold">
            Common Inquiries
          </span>
        </div>
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-[#F5F7F7] mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group glass-card rounded-xl border border-[#1B2727] transition-colors"
              open={faq.defaultOpen}
            >
              <summary className="flex items-center justify-between p-5 sm:p-6 cursor-pointer list-none select-none">
                <span className="font-body text-base font-semibold text-[#F5F7F7] group-hover:text-[#12C887] transition-colors pr-4">
                  {faq.question}
                </span>
                <ChevronDown className="w-5 h-5 text-[#12C887] group-open:rotate-180 transition-transform shrink-0" />
              </summary>
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-[#A7B0B0] font-body text-sm leading-relaxed border-t border-[#1B2727]/50 pt-4">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
