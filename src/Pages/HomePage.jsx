import ClimateSection from "../Components/ClimateSection"
import DecodingSection from "../Components/DecodingSection"
import FacialSection from "../Components/FacialSection"
import FragranceSection from "../Components/FragranceSection"
import HeroSection from "../Components/HeroSection"
import Navbar from "../Components/Navbar"
import NothingSection from "../Components/NothingSection"
import SkincareSection from "../Components/SkincareSection"
import StoreSection from "../Components/StoreSection"

const HomePage = () => {
  return (
    <>
     <Navbar/> 
     <HeroSection/>
     <FragranceSection/>
     <SkincareSection/>
     <DecodingSection/>
     <ClimateSection/>
     <StoreSection/>
     <FacialSection/>
     <NothingSection/>
    </>
  )
}

export default HomePage
