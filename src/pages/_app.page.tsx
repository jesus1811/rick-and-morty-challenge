import "../scss/_globals.scss";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { Store } from "@/redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={Store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
