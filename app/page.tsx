import Image from "next/image";
import { Button } from "@/components/ui/button"
import Navbar from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";
import Story from "@/components/ui/story";
import Values from "@/components/ui/values";
import Team from "@/components/ui/team";
import Footer from "@/components/ui/footer";
import CultureCard from "@/components/ui/cultureCard";


export default function Home() {
  return (
 <div>
   <Navbar/>
   <hr/>
   <Banner/>
   <Story/>
   <Values/>
   <Team/>
   <CultureCard/>
   <Footer/>

 </div>
  );
}
