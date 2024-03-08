import Image from "next/image";
import { FloatingNav } from "./components/ui/floating-navbar";
import { HeroScrollDemo } from "./components/section/hero-section";
import { ParallaxScrollDemo } from "./components/section/parallax-section";
import { HeroParallaxDemo } from "./components/section/web-portofolio";
import { BackgroundBeamsDemo } from "./components/section/waiting-list";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      // icon: (
      //   <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      // ),
    },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <FloatingNav navItems={navItems} />
      <HeroScrollDemo />
      <ParallaxScrollDemo />
      <HeroParallaxDemo />
      <BackgroundBeamsDemo />
    </main>
  );
}
