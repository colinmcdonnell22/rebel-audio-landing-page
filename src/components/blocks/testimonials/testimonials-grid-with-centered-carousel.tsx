"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";

export function TestimonialsGridWithCenteredCarousel() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 md:px-8 pt-20 overflow-hidden h-full bg-background">
      <div className="pb-20">
        <h1 className="pt-4 font-bold text-foreground text-lg md:text-2xl font-[var(--font-display)]">
          Trusted by podcast creators worldwide
        </h1>
        <p className="text-base text-muted-foreground font-[var(--font-body)]">
          Rebel Audio powers the workflow of professional podcasters and content creators.
        </p>
      </div>

      <div className=" relative">
        <TestimonialsSlider />
        <div className="h-full max-h-screen md:max-h-none overflow-hidden w-full bg-background opacity-30 [mask-image:radial-gradient(circle_at_center,transparent_10%,white_99%)]">
          <TestimonialsGrid />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 h-40 w-full bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
}

export const TestimonialsGrid = () => {
  const first = testimonials.slice(0, 3);
  const second = testimonials.slice(3, 6);
  const third = testimonials.slice(6, 9);
  const fourth = testimonials.slice(9, 12);

  const grid = [first, second, third, fourth];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto ">
      {grid.map((testimonialsCol, index) => (
        <div key={`testimonials-col-${index}`} className="grid gap-4">
          {testimonialsCol.map((testimonial) => (
            <Card key={`testimonial-${testimonial.src}-${index}`}>
              <Quote>{testimonial.quote}</Quote>
              <div className="flex gap-2 items-center mt-8">
                <Image
                  src={testimonial.src}
                  alt="Manu Arora"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="flex flex-col">
                  <QuoteDescription>{testimonial.name}</QuoteDescription>
                  <QuoteDescription className="text-[10px]">
                    {testimonial.designation}
                  </QuoteDescription>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-8 rounded-xl border border-border bg-card shadow-[2px_4px_16px_0px_rgba(245,245,245,0.06)_inset] group",
        className
      )}
    >
      {children}
    </div>
  );
};

export const Quote = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-xs font-semibold text-foreground py-2 font-[var(--font-display)]",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const QuoteDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-xs font-normal text-muted-foreground max-w-sm font-[var(--font-body)]",
        className
      )}
    >
      {children}
    </p>
  );
};

interface Testimonial {
  src: string;
  quote: string;
  name: string;
  designation?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    quote:
      "Rebel Audio transformed my podcast workflow. What used to take hours now takes minutes. The AI-powered clip generation is incredible!",
    src: "https://i.pravatar.cc/150?img=1",
    designation: "Podcast Host, Tech Talk Weekly",
  },
  {
    name: "Marcus Rodriguez",
    quote:
      "My social media engagement increased 300% after using Rebel Audio's automated clips. The quality is always professional-grade.",
    src: "https://i.pravatar.cc/150?img=2",
    designation: "Social Media Manager, StartupCo",
  },
  {
    name: "Emily Watson",
    quote:
      "The platform is incredibly intuitive. Even complex editing tasks feel effortless, and the results are always broadcast-quality.",
    src: "https://i.pravatar.cc/150?img=3",
    designation: "Content Creator, Daily Motivation",
  },
  {
    name: "James Kim",
    quote:
      "Rebel Audio's transcription accuracy is unmatched. It's saved me countless hours of manual editing and improved my content quality.",
    src: "https://i.pravatar.cc/150?img=4",
    designation: "Podcast Producer, News Today",
  },
  {
    name: "Rachel Green",
    quote:
      "The automated social media clips feature is a game-changer. My audience engagement has never been higher.",
    src: "https://i.pravatar.cc/150?img=5",
    designation: "Marketing Director, LifeStyle Brand",
  },
  {
    name: "David Park",
    quote:
      "From recording to publishing, Rebel Audio streamlines everything. It's like having a full production team in one platform.",
    src: "https://i.pravatar.cc/150?img=6",
    designation: "Independent Podcaster, True Stories",
  },
  {
    name: "Lisa Thompson",
    quote:
      "The AI understands context better than any tool I've used. It consistently picks the best moments for clips.",
    src: "https://i.pravatar.cc/150?img=7",
    designation: "Content Strategist, Digital Agency",
  },
  {
    name: "Alex Johnson",
    quote:
      "My podcast downloads doubled after implementing Rebel Audio's content optimization features. The results speak for themselves.",
    src: "https://i.pravatar.cc/150?img=8",
    designation: "Podcast Host, Business Insights",
  },
  {
    name: "Maya Patel",
    quote:
      "The automated editing suggestions are spot-on. It's like having an experienced editor reviewing every episode.",
    src: "https://i.pravatar.cc/150?img=9",
    designation: "Audio Producer, Creative Minds",
  },
  {
    name: "Tom Wilson",
    quote:
      "Rebel Audio's analytics helped me understand my audience better. My content strategy is now data-driven and effective.",
    src: "https://i.pravatar.cc/150?img=10",
    designation: "Podcast Analytics Specialist",
  },
  {
    name: "Sophie Brown",
    quote:
      "The collaboration features make working with my team seamless. Everyone can contribute without technical barriers.",
    src: "https://i.pravatar.cc/150?img=11",
    designation: "Team Lead, Media Production",
  },
  {
    name: "Ryan Carter",
    quote:
      "Customer support is exceptional, and the platform keeps getting better. It's clear they understand creators' needs.",
    src: "https://i.pravatar.cc/150?img=12",
    designation: "Podcast Network Manager",
  },
  {
    name: "Nina Rodriguez",
    quote:
      "The mobile app keeps me productive on the go. I can review and approve clips from anywhere, anytime.",
    src: "https://i.pravatar.cc/150?img=13",
    designation: "Travel Podcast Host",
  },
  {
    name: "Chris Lee",
    quote:
      "Rebel Audio's integration with major platforms saves me hours of manual uploads. Everything is automated and reliable.",
    src: "https://i.pravatar.cc/150?img=14",
    designation: "Multi-Platform Content Creator",
  },
];

export const TestimonialsSlider = () => {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const testimonialsRef = useRef<HTMLDivElement>(null);

  const slicedTestimonials = testimonials.slice(0, 3);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(
        active + 1 === slicedTestimonials.length ? 0 : (active) => active + 1
      );
    }, 7000);
    return () => clearInterval(interval);
  }, [active, autorotate, slicedTestimonials.length]);

  const heightFix = () => {
    if (testimonialsRef.current && testimonialsRef.current.parentElement)
      testimonialsRef.current.parentElement.style.height = `${testimonialsRef.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        heightFix();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <section className="absolute inset-0 mt-20 md:mt-60">
      <div className="max-w-3xl mx-auto  relative z-40 h-80">
        <div className="relative pb-12 md:pb-20">
          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-40 [mask-image:_linear-gradient(0deg,transparent,#FFFFFF_30%,#FFFFFF)] md:[mask-image:_linear-gradient(0deg,transparent,#FFFFFF_40%,#FFFFFF)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-muted/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-secondary after:m-px before:-z-20 after:-z-20">
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -translate-x-10"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-10"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="absolute inset-0 h-full -z-10">
                      <Image
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={item.src}
                        width={56}
                        height={56}
                        alt={item.name}
                      />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out px-8 sm:px-6">
              <div className="relative flex flex-col" ref={testimonialsRef}>
                {slicedTestimonials.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}
                    as="div"
                  >
                    <div className="text-base text-foreground md:text-xl font-bold font-[var(--font-display)]">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5 px-8 sm:px-6">
              {slicedTestimonials.map((item, index) => (
                <button
                  className={cn(
                    `px-2 py-1 rounded-full m-1.5 text-xs border border-transparent text-muted-foreground transition duration-150 ease-in-out [background:linear-gradient(theme(colors.background),_theme(colors.background))_padding-box,_conic-gradient(theme(colors.accent),_theme(colors.border)_25%,_theme(colors.border)_75%,_theme(colors.accent)_100%)_border-box] relative before:absolute before:inset-0 before:bg-secondary/30 before:rounded-full before:pointer-events-none font-[var(--font-body)] ${
                      active === index
                        ? "border-accent/50"
                        : "border-transparent opacity-70"
                    }`
                  )}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}
                >
                  <span className="relative">
                    <span className="text-foreground font-bold">
                      {item.name}
                    </span>{" "}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};