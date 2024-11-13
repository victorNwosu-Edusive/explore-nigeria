import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Homepage from "./homepage";
import Navbar from "./components/navbar";
import ErrorPage from "./errorpage";
import Dest from "./pages/destinationpage";
import Experiences from "./pages/experiences";
import Plan from "./pages/planyourtrip";
import Gallery from "./pages/gallery";
import Contact from "./pages/contactus";
import ScrollToTop from "./components/scrolltotop";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [
        {
          index: true,
          element: <Homepage />, // Render Homepage for the index route
        },
        {
            path: "destinations",
            element: <Dest />,
          },
          {
            path: "experiences",
            element: <Experiences />,
          },
          {
            path: "plan-your-trip",
            element: <Plan />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
          {
            path: "contact-us",
            element: <Contact />,
          },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <ScrollToTop />
    </RouterProvider>
  </React.StrictMode>
);
