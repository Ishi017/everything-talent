import Navbar from "@/components/ui/navbar";
import Banner from "@/components/ui/banner";
import Story from "@/components/ui/story";
import Values from "@/components/ui/values";
import Team from "@/components/ui/team";
import Footer from "@/components/ui/footer";
import CultureCard from "@/components/ui/cultureCard";
import Journey from "@/components/ui/journey";


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
   <Journey/>
   <Footer/>

 </div>
  );
}
