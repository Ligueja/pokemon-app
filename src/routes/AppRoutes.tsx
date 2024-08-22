import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Details } from "../pages/Details";
import { Favorites } from "../pages/Favorites";
import { DefaultLayout } from "../configs/layout/DefaultLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/details/:id",
    element: (
      <DefaultLayout>
        <Details />
      </DefaultLayout>
    ),
  },
  {
    path: "/favorites",
    element: (
      <DefaultLayout>
        <Favorites />
      </DefaultLayout>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
