import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ParallaxLayout from "./components/ParallaxLayout";
import PortfolioSinglePage from "./components/PortfolioSinglePage";

import LoadingPage from "./components/LoadingPage";
import FooterElement from "./components/FooterElement";

export default function App() {
  const router = createBrowserRouter([
    { path: "/", element: <MainLayoutWrapper /> },
    { path: "/dashboard", element: <LayoutWrapperAfterLoading /> },
    { path: "/portfolio/:portfolioId", element: <PortfolioSinglePage /> },
  ]);

  return (
    <div className="app-wrapper">
      <RouterProvider router={router} />
    </div>
  );
}

function MainLayoutWrapper() {
  return (
    <div className="main-layout">
      <LoadingPage />
      <ParallaxLayout />
      <FooterElement />
    </div>
  );
}

function LayoutWrapperAfterLoading() {
  return (
    <div className="main-layout">
      <ParallaxLayout />
      <FooterElement />
    </div>
  );
}
