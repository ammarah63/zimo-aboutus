import { useEffect } from "react";
import {
  AlertSection,
  HomeSection,
  OneSourceSection,
  OurCategories,
  RealStateSection,
  GlobalSection,
  ZimoPartnersSection,
  LastSection,
} from "../components";

export default function Home({ location }) {
  useEffect(() => {
    console.log("location api", location);
  }),
    [location];
  return (
    <>
      <HomeSection locationData={location} />
      <RealStateSection />
      <OurCategories />
      <OneSourceSection />
      <AlertSection />
      <GlobalSection />
      <ZimoPartnersSection />
      <LastSection />
    </>
  );
}

export async function getServerSideProps(context) {
  const clientIp =
    context.req.headers["x-forwarded-for"] ||
    context.req.connection.remoteAddress;

  try {
    const res = await fetch(`http://ip-api.com/json/${clientIp}`);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`Error: ${res.status}`);
    }

    const location = {
      city: data.city,
      country: data.country,
      countryCode: data.countryCode,
    };

    return {
      props: { location },
    };
  } catch (error) {
    console.error("Error fetching IP data:", error);

    return {
      props: { location: null },
    };
  }
}
