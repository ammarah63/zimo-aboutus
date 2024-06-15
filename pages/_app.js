import "@/styles/globals.css";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Providers } from "@/redux/providers";
import store, { persistor } from "@/redux/store";
import { PersistGate } from "redux-persist/integration/react";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 0,
    });
  }, []);
  return (
    <Providers store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Providers>
  );
}
