import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "../src/Components/Pages/MainPage.jsx";

import NavBar from "../src/Components/Fragment/NavBar.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className=" pt-0 lg:pt-4 ">
      <NavBar></NavBar>
      <MainPage></MainPage>
    </div>
  </StrictMode>
);
