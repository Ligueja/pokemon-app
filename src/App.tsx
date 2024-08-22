import { Fragment } from "react/jsx-runtime";
import { AppRouter } from "./routes/AppRoutes";
import { CssBaseline } from "@mui/material";
import { Provider } from "react-redux";
import { persistor, store } from "./store";
import { PersistGate } from "redux-persist/integration/react";

export function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <CssBaseline />
          <AppRouter />
        </PersistGate>
      </Provider>
    </Fragment>
  );
}
