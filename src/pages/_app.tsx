import MainLayout from "@/layouts/MainLayout";
import ThemeLayout from "@/layouts/ThemeLayout";
import { hydrate } from "@/redux/config/config.slice";
import { persistor, store, useAppDispatch } from "@/redux/store";
import "@/styles/globals.css";
import { getIsVisited, getTheme } from "@/utils/localStorage";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const ReduxInitWrapper = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      hydrate({
        isVisited: getIsVisited(),
        theme: getTheme(),
      })
    );
  }, [dispatch]);
  return <>{children}</>;
};
export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ReduxInitWrapper>
          <ThemeLayout>
            <MainLayout>
              <Component {...pageProps} />
            </MainLayout>
          </ThemeLayout>
        </ReduxInitWrapper>
      </PersistGate>
    </Provider>
  );
}
