import Navbar from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";
import Story from "@/components/ui/story";
import Values from "@/components/ui/values";
import Footer from "@/components/ui/footer";
import CultureCard from "@/components/ui/cultureCard";
import Journey from "@/components/ui/journey";
import { TextGenerateEffect } from "@/components/text-generate-effect";
import { SparklesCore } from "@/components/sparkles";
import { CardHoverEffectDemo } from "@/components/Cards";
import { InfiniteMovingCardsDemo } from "@/components/ui/teams";
import WhyChooseUs from "@/components/ui/WhyChooseUs";
import { Languages } from "@/components/ui/Languages";

export default function Home() {
  const words = `Empowering Careers ! At Everything Talent, we believe that every individual has the potential to excel. Our mission is to empower careers by connecting talent with opportunities that align with their skills and aspirations.”`;

  return (
    <div>
     <Navbar />
      <div className="relative w-ful h-full  flex flex-col items-center justify-center rounded-md">
      <div className="w-full h-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#000"
        />
      </div>
      <Banner />
      <CardHoverEffectDemo/>
      <div className="my-10 px-20 md:px-40"> {/* Decreased bottom margin */}
        <TextGenerateEffect 
          words={words} 
        />
      </div>
      <hr></hr>
      
      <Story />
      <Values />
      <InfiniteMovingCardsDemo />
      <WhyChooseUs/>
    </div>
      <Languages/>
 
      <CultureCard />
    
      <Journey />
      <Footer />
    </div>
  );
}