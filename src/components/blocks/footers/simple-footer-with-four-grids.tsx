import Link from "next/link";
import React from "react";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Music } from "lucide-react";

export function SimpleFooterWithFourGrids() {
  const company = [
    {
      title: "About",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];

  const product = [
    {
      title: "Features",
      href: "#",
    },
  ];

  const resources = [
    {
      title: "Help Center",
      href: "#",
    },
    {
      title: "Community",
      href: "#",
    },
  ];

  const socials = [
    {
      title: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      title: "LinkedIn",
      href: "#",
      icon: Linkedin,
    },
  ];

  const legals = [
    {
      title: "Privacy Policy",
      href: "#",
    },
    {
      title: "Terms of Service",
      href: "#",
    },
  ];

  return (
    <div className="border-t border-border px-8 py-20 bg-background w-full relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-muted-foreground flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>
          <div className="mt-4 ml-2 text-muted-foreground">
            &copy; 2024 Rebel Audio. All rights reserved.
          </div>
          <div className="mt-2 ml-2 flex space-x-4">
            {legals.map((legal, idx) => (
              <Link
                key={"legal" + idx}
                className="text-muted-foreground hover:text-foreground transition-colors"
                href={legal.href}
              >
                {legal.title}
              </Link>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="text-foreground font-[var(--font-display)] font-semibold">
              Company
            </p>
            <ul className="list-none space-y-4">
              {company.map((item, idx) => (
                <li key={"company" + idx} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-foreground font-[var(--font-display)] font-semibold">
              Product
            </p>
            <ul className="list-none space-y-4">
              {product.map((item, idx) => (
                <li key={"product" + idx} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-foreground font-[var(--font-display)] font-semibold">
              Resources
            </p>
            <ul className="list-none space-y-4">
              {resources.map((item, idx) => (
                <li key={"resources" + idx} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-foreground font-[var(--font-display)] font-semibold">
              Social
            </p>
            <ul className="list-none space-y-4">
              {socials.map((social, idx) => (
                <li key={"social" + idx} className="list-none">
                  <Link
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center space-x-2"
                    href={social.href}
                  >
                    <social.icon className="w-4 h-4" />
                    <span>{social.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-1 -mb-12">
        <div 
          className="mx-auto w-full h-80 md:h-96 lg:h-[40rem] xl:h-[48rem] relative"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.8) 80%, transparent)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent, rgba(0,0,0,0.1) 20%, rgba(0,0,0,0.8) 80%, transparent)'
          }}
        >
          <Image
            src="/logo.png?v=2"
            alt="Rebel Audio Logo"
            fill
            className="object-contain opacity-20"
          />
        </div>
      </div>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex items-center text-sm mr-4 text-foreground px-2 py-1 relative z-20"
    >
      <div className="relative w-32 h-8">
        <Image
          src="/logo.png?v=2"
          alt="Rebel Audio"
          fill
          className="object-contain object-left"
        />
      </div>
    </Link>
  );
};