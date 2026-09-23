"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  ChevronDown,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import {
  TwitterXIcon,
  GithubIcon,
  LinkedinIcon,
} from "@/app/components/ui/SocialIcons";

const SERVICES_LIST = [
  "Web Development",
  "Mobile Apps",
  "Full-Stack Systems",
  "AI Automation & Agents",
];

const EMAIL_ADDRESS =
  process.env.NEXT_PUBLIC_EMAIL || "boluwatifelambe@gmail.com";

const socialLinks = {
  twitter: "https://twitter.com/Danibholie",
  github: "https://github.com/lambeboluwatife",
  linkedin: "https://www.linkedin.com/in/boluwatife-lambe-87b0b6136/",
  whatsapp: "https://wa.me/2348083647531",
};

export default function ContactSection() {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Web Development",
  ]);
  const [formState, setFormState] = useState({
    name: "",
    company: "",
    email: "",
    budget: "$1,000 - $5,000 (₦1.5M - ₦7.5M)",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc)
        ? prev.length > 1
          ? prev.filter((p) => p !== svc)
          : prev
        : [...prev, svc],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formState,
          service: selectedServices.join(", "),
          services: selectedServices,
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setSubmitStatus("success");
        setErrorMessage("");
        // Clear form
        setFormState({
          name: "",
          company: "",
          email: "",
          budget: "$1,000 - $5,000 (₦1.5M - ₦7.5M)",
          message: "",
        });
        setSelectedServices(["Web Development"]);
      } else {
        setSubmitStatus("error");
        setErrorMessage(
          data.error ||
            "Failed to send your request. Please try again or email us directly at boluwatifelambe@gmail.com.",
        );
      }
    } catch (err) {
      setSubmitStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Failed to send your request. Please try again or email us directly at boluwatifelambe@gmail.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 pb-20 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Channels & Reach */}
        <div className="lg:col-span-5 space-y-6 sm:space-y-8">
          <div className="glass-card rounded-xl p-6 md:p-8 space-y-6 sm:space-y-8 border border-[#1B2727]">
            <div>
              <h3 className="font-mono text-xs text-[#A7B0B0] uppercase tracking-widest mb-4 font-semibold">
                Direct Contact Channels
              </h3>
              <ul className="space-y-4">
                <li className="group">
                  <a
                    className="flex items-center gap-4 text-[#F5F7F7] hover:text-[#12C887] transition-colors duration-200"
                    href={`mailto:${EMAIL_ADDRESS}`}
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#080D0E] border border-[#1B2727] flex items-center justify-center group-hover:border-[#12C887]/50 text-[#12C887] transition-colors shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#A7B0B0] uppercase">
                        Email Us
                      </div>
                      <span className="font-body text-sm text-[#F5F7F7] group-hover:text-[#12C887] transition-colors break-all">
                        {EMAIL_ADDRESS}
                      </span>
                    </div>
                  </a>
                </li>
                <li className="group">
                  <a
                    className="flex items-center gap-4 text-[#F5F7F7] hover:text-[#12C887] transition-colors duration-200"
                    href="tel:+2348083647531"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#080D0E] border border-[#1B2727] flex items-center justify-center group-hover:border-[#12C887]/50 text-[#12C887] transition-colors shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#A7B0B0] uppercase">
                        Call Us
                      </div>
                      <span className="font-body text-sm text-[#F5F7F7] group-hover:text-[#12C887] transition-colors">
                        +234 808 364 7531
                      </span>
                    </div>
                  </a>
                </li>
                <li className="group">
                  <a
                    className="flex items-center gap-4 text-[#F5F7F7] hover:text-[#12C887] transition-colors duration-200"
                    href={socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#080D0E] border border-[#1B2727] flex items-center justify-center group-hover:border-[#12C887]/50 text-[#12C887] transition-colors shrink-0">
                      <MessageSquare className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-[#A7B0B0] uppercase">
                        WhatsApp Chat
                      </div>
                      <span className="font-body text-sm text-[#F5F7F7] group-hover:text-[#12C887] transition-colors">
                        Chat directly with our team
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-mono text-xs text-[#A7B0B0] uppercase tracking-widest mb-4 font-semibold">
                Connect With Us
              </h3>
              <div className="flex flex-wrap gap-3">
                <a
                  className="w-11 h-11 flex items-center justify-center bg-[#080D0E] border border-[#1B2727] rounded-lg text-[#A7B0B0] hover:border-[#12C887] hover:text-[#12C887] transition-all duration-200"
                  href={socialLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Twitter / X"
                  aria-label="Twitter profile"
                >
                  <TwitterXIcon size={18} />
                </a>
                <a
                  className="w-11 h-11 flex items-center justify-center bg-[#080D0E] border border-[#1B2727] rounded-lg text-[#A7B0B0] hover:border-[#12C887] hover:text-[#12C887] transition-all duration-200"
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View GitHub repositories"
                  aria-label="GitHub profile"
                >
                  <GithubIcon size={19} />
                </a>
                <a
                  className="w-11 h-11 flex items-center justify-center bg-[#080D0E] border border-[#1B2727] rounded-lg text-[#A7B0B0] hover:border-[#12C887] hover:text-[#12C887] transition-all duration-200"
                  href={socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Connect on LinkedIn"
                  aria-label="LinkedIn profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <Link
                  className="w-11 h-11 flex items-center justify-center bg-[#080D0E] border border-[#1B2727] rounded-lg text-[#A7B0B0] hover:border-[#12C887] hover:text-[#12C887] transition-all duration-200"
                  href="/projects"
                  title="Explore all case studies"
                  aria-label="View project portfolio"
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>

          {/* Global Reach Visual */}
          <div className="glass-card rounded-xl p-6 relative overflow-hidden border border-[#1B2727]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-headline text-lg font-bold text-[#F5F7F7]">
                  Global Reach
                </h3>
                <span className="font-mono text-[10px] text-[#12C887] bg-[#12C887]/10 px-2 py-0.5 rounded border border-[#12C887]/30 font-semibold">
                  NIGERIA &bull; USA &bull; WORLDWIDE
                </span>
              </div>
              <p className="font-body text-xs text-[#A7B0B0] mb-5">
                Technical digital studio engineering modern platforms for
                businesses and founders in Nigeria, New York, and across the globe.
              </p>
            </div>
            <div className="aspect-video bg-[#080D0E] rounded-lg overflow-hidden relative border border-[#1B2727] group">
              <Image
                alt="Global connectivity map showing client reach"
                className="w-full h-full object-cover grayscale contrast-125 opacity-40 group-hover:opacity-75 transition-opacity duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0AQK-l37h1hhbhjzASy3WysqpIc_IAHZPGFIzRtV24NeaKZya_dKcYF4CRgGGmw_pKBVBK8PS7U266cr6nO2SNxIt8PbPYh8-Pfun7sRyUzpWG-306bkIPkpW96KeFDZFfQsN04B1i08gmBCzpfuvm7fYGkRy3PtXBK9nnFGHwa9m2T_CpJGN2ozIO2DPbPJ9AAtzni3vizQzzCVbuv2gkPDrZySr9AIHIqs3FQRXVD7JSWx7eO1J_RXQ2Qrq_ZIskMNKVuDp6tI"
                width={600}
                height={340}
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101718] via-transparent to-transparent pointer-events-none" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <div className="p-3 bg-[#080D0E] border border-[#1B2727] rounded-lg">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#12C887] shadow-[0_0_8px_#12C887]"></span>
                  <span className="font-mono text-xs sm:text-sm text-[#F5F7F7] font-semibold">
                    Nigeria
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#A7B0B0] block">
                  Lagos Hub
                </span>
              </div>
              <div className="p-3 bg-[#080D0E] border border-[#1B2727] rounded-lg">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-2 h-2 rounded-full bg-[#12C887] shadow-[0_0_8px_#12C887]"></span>
                  <span className="font-mono text-xs sm:text-sm text-[#F5F7F7] font-semibold">
                    New York
                  </span>
                </div>
                <span className="font-mono text-[10px] sm:text-[11px] text-[#A7B0B0] block">
                  United States
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Business Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-xl p-6 sm:p-8 md:p-10 border-brand-gradient">
            <div className="mb-8">
              <h2 className="font-headline text-2xl md:text-3xl font-bold text-[#F5F7F7] mb-2">
                Start Your Project
              </h2>
              <p className="font-body text-sm text-[#A7B0B0]">
                Tell us about your project requirements and goals. We respond
                within 24 hours.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div className="space-y-2">
                  <label
                    htmlFor="full-name"
                    className="font-body text-xs font-semibold text-[#A7B0B0] uppercase tracking-wider block"
                  >
                    Your Full Name <span className="text-[#12C887]">*</span>
                  </label>
                  <input
                    id="full-name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    className="w-full bg-[#080D0E] border border-[#1B2727] focus:border-[#12C887] rounded-md py-3 px-4 text-[#F5F7F7] placeholder-[#526060] font-body text-sm neon-pulse transition-all"
                    placeholder="e.g. Alex Morgan"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="company"
                    className="font-body text-xs font-semibold text-[#A7B0B0] uppercase tracking-wider block"
                  >
                    Company or Organization
                  </label>
                  <input
                    id="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    className="w-full bg-[#080D0E] border border-[#1B2727] focus:border-[#12C887] rounded-md py-3 px-4 text-[#F5F7F7] placeholder-[#526060] font-body text-sm neon-pulse transition-all"
                    placeholder="e.g. Acme Studio"
                    type="text"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="work-email"
                  className="font-body text-xs font-semibold text-[#A7B0B0] uppercase tracking-wider block"
                >
                  Work Email Address <span className="text-[#12C887]">*</span>
                </label>
                <input
                  id="work-email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState({ ...formState, email: e.target.value })
                  }
                  className="w-full bg-[#080D0E] border border-[#1B2727] focus:border-[#12C887] rounded-md py-3 px-4 text-[#F5F7F7] placeholder-[#526060] font-body text-sm neon-pulse transition-all"
                  placeholder="name@company.com"
                  type="email"
                />
              </div>

              <div className="space-y-2.5">
                <label className="font-body text-xs font-semibold text-[#A7B0B0] uppercase tracking-wider block">
                  Services Needed
                </label>
                <div className="flex flex-wrap gap-2.5" id="services-container">
                  {SERVICES_LIST.map((svc) => {
                    const isSelected = selectedServices.includes(svc);
                    return (
                      <button
                        key={svc}
                        type="button"
                        onClick={() => toggleService(svc)}
                        className={`px-4 py-2 rounded-full border text-xs font-body font-medium transition-all cursor-pointer ${
                          isSelected
                            ? "border-[#12C887] bg-[#12C887]/15 text-[#12C887] shadow-[0_0_10px_rgba(18,200,135,0.15)]"
                            : "border-[#1B2727] bg-[#080D0E] hover:border-[#12C887]/60 text-[#A7B0B0]"
                        }`}
                      >
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="estimated-budget"
                  className="font-body text-xs font-semibold text-[#A7B0B0] uppercase tracking-wider block"
                >
                  Estimated Budget
                </label>
                <div className="relative">
                  <select
                    id="estimated-budget"
                    value={formState.budget}
                    onChange={(e) =>
                      setFormState({ ...formState, budget: e.target.value })
                    }
                    className="w-full bg-[#080D0E] border border-[#1B2727] focus:border-[#12C887] rounded-md py-3 px-4 pr-10 text-[#F5F7F7] font-body text-sm neon-pulse transition-all appearance-none cursor-pointer"
                  >
                    <option>Under $1,000 (Under ₦1.5M)</option>
                    <option>$1,000 - $5,000 (₦1.5M - ₦7.5M)</option>
                    <option>$5,000 - $15,000 (₦7.5M - ₦22.5M)</option>
                    <option>$15,000 - $50,000 (₦22.5M - ₦75M)</option>
                    <option>$50,000+ (Enterprise)</option>
                  </select>
                  <ChevronDown className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-[#A7B0B0] pointer-events-none" />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="project-details"
                  className="font-body text-xs font-semibold text-[#A7B0B0] uppercase tracking-wider block"
                >
                  Tell Us About Your Project{" "}
                  <span className="text-[#12C887]">*</span>
                </label>
                <textarea
                  id="project-details"
                  required
                  value={formState.message}
                  onChange={(e) =>
                    setFormState({ ...formState, message: e.target.value })
                  }
                  className="w-full bg-[#080D0E] border border-[#1B2727] focus:border-[#12C887] rounded-md py-3 px-4 text-[#F5F7F7] placeholder-[#526060] font-body text-sm neon-pulse transition-all resize-none"
                  placeholder="Describe your project goals, key features, target timeline, or any specific questions you have..."
                  rows={4}
                />
              </div>

              {submitStatus === "success" && (
                <div className="p-4 bg-[#12C887]/10 border border-[#12C887]/30 rounded-lg text-[#12C887] text-sm font-medium flex items-center justify-center gap-2 text-center">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span>
                    Message received! Thank you for reaching out. We will review
                    your project details and get back to you within 24 hours.
                  </span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm font-medium text-center">
                  {errorMessage ||
                    "Failed to send your request. Please try again or email us directly at boluwatifelambe@gmail.com."}
                </div>
              )}

              <button
                className="w-full group relative flex items-center justify-center gap-2.5 bg-[#12C887] text-[#080D0E] py-3.5 px-6 rounded-md font-headline font-bold text-base hover:bg-[#10b378] transition-all shadow-[0_0_20px_rgba(18,200,135,0.3)] active:scale-[0.99] disabled:opacity-75 cursor-pointer"
                type="submit"
                disabled={isSubmitting}
              >
                <span>
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
