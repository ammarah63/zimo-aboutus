import {
  AlertSection,
  HomeSection,
  OneSourceSection,
  OurCategories,
  RealStateSection,
  GlobalSection,
  ZimoPartnersSection,
  LastSection
} from "../components";

export default function Home() {
  return (
    <>
      <HomeSection/>
      <RealStateSection />
      <OurCategories />
      <OneSourceSection />
      <AlertSection />
      <GlobalSection/>
      <ZimoPartnersSection/>
      <LastSection/>
    </>
  );
}

