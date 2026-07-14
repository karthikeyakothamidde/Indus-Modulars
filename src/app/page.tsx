import React from "react";
import Hero from "@/components/sections/Hero";
import ServicesOverview from "@/components/sections/ServicesOverview";
import BeforeAfterSlider from "@/components/sections/BeforeAfterSlider";
import IndividualServices from "@/components/sections/IndividualServices";
import DesignProcess from "@/components/sections/DesignProcess";
import PortfolioGallery from "@/components/sections/PortfolioGallery";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Materials from "@/components/sections/Materials";
import Faq from "@/components/sections/Faq";
import ConsultationBanner from "@/components/sections/ConsultationBanner";
import ContactForm from "@/components/sections/ContactForm";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <BeforeAfterSlider />
      <IndividualServices />
      <DesignProcess />
      <PortfolioGallery />
      <WhyChooseUs />
      <Testimonials />
      <Materials />
      <Faq />
      <ConsultationBanner />
      <ContactForm />
    </>
  );
}
