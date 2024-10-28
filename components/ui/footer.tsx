
import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/footerLogo.png";
import Banner from "@/public/footerImage.png";

const Footer = () => {
  return (
    <footer className="w-full bg-black px-4 md:px-28 pt-16 flex flex-col gap-4">

      <div className="mb-6 flex flex-col items-start">
        <Link href="/">
          <Image src={Logo} alt="Everything Talent Logo" className="h-40 w-44" />
        </Link>
        <span className="text-3xl font-semibold text-white">Everything Talent</span>
      </div>

      <div className="container mx-auto grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">

        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/blog" className="hover:underline">
                Blogs
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/about/#our-story" className="hover:underline">
                Success Stories
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Case Studies
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Whitepapers
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/faqs" className="hover:underline">
                FAQs
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Hiring Guides
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/support" className="hover:underline">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Get Started */}
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">Get Started</h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/pricing" className="hover:underline">
                Pricing
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/use-cases/hiring-solutions" className="hover:underline">
                Hiring Solutions
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/use-cases/funded-startups" className="hover:underline">
                Funded Startups
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/login" className="hover:underline">
                Free Trial
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/support" className="hover:underline">
                Contact Support
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Request Demo
              </Link>
            </li>
            <li className="mb-4">
              <Link href="#" className="hover:underline">
                Trust
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="mb-6 text-sm font-semibold uppercase text-white">Legal</h2>
          <ul className="text-gray-400">
            <li className="mb-4">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms" className="hover:underline">
                Terms of Service
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms" className="hover:underline">
                Cookie Policy
              </Link>
            </li>
            <li className="mb-4">
              <Link href="/terms" className="hover:underline">
                CCPA Compliance
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Banner Section */}
      <section className="relative w-full mt-6">
        <Image
          alt="San Francisco skyline top hiring"
          loading="lazy"
          width={7003}
          height={2107}
          className="max-h-[26rem] h-full w-full"
          src={Banner}
        />
        <div className="pointer-events-none absolute h-[10rem] bottom-0 right-0 w-[6rem] bg-gradient-to-l from-[#000000]"></div>
        <div className="pointer-events-none absolute h-[10rem] bottom-0 left-0 w-[6rem] bg-gradient-to-r from-[#000000]"></div>
      </section>
    </footer>
  );
};

export default Footer;