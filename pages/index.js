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
  MultiStepform,
  ReactTable,
} from "../components";

export default function Home(props) {
  const { products } = props.data;
  // useEffect(() => {
  //   console.log("location api", location);
  // }, [location]);
useEffect(() => {
  console.log(props.data);
}, [props.data]);
  return (
    <>
      <ReactTable data={props.data} totalProducts={props.totalProducts} />
      {/* <HomeSection locationData={location} />
      <RealStateSection />
      <OurCategories />
      <OneSourceSection />
      <AlertSection />
      <MultiStepform /> */}
      {/* <GlobalSection />
      <ZimoPartnersSection />
      <LastSection /> */}
    </>
  );
}
export async function getServerSideProps({ query }) {
  if (query.page) {
    console.log("context", query.page);
    const skip = (parseInt(query.page) - 1) * query.pageSize;
    console.log("skip", skip);

    const res = await fetch(
      `https://dummyjson.com/products?limit=${query.pageSize}&skip=${skip}`
    );
    const data = await res.json();
    //console.log("data", data);
    const totalProducts = data.total;
    //console.log("totalProducts", totalProducts);
    return {
      props: {
        data,
        totalProducts,
      },
    };
  }
  const res = await fetch("https://dummyjson.com/products?limit=12");
  const data = await res.json();
 // console.log("data", data);
  const totalProducts = data.total;
  return {
    props: {
      data,
      totalProducts,
    },
  };
}

// export async function getServerSideProps(context) {
//   const clientIp =
//     context.req.headers["x-forwarded-for"] ||
//     context.req.connection.remoteAddress;

//   try {
//     const res = await fetch(`http://ip-api.com/json/${clientIp}`);
//     // const res = await fetch(`http://ip-api.com/json/154.192.1.32`);
//     const data = await res.json();

//     if (!res.ok) {
//       throw new Error(`Error: ${res.status}`);
//     }
//     console.log(data);

//     const location = {
//       city: data.city || null,
//       country: data.country || null,
//       countryCode: data.countryCode || null,
//     };

//     return {
//       props: { location },
//     };
//   } catch (error) {
//     console.error("Error fetching IP data:", error);

//     return {
//       props: { location: null },
//     };
//   }
// }
