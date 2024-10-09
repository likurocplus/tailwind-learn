import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Color from "./Color.jsx";
import ContainerSpacing from "./ContainerSpacing.jsx";
import Typhography from "./Typhography.jsx";
import Sizing from "./Sizing.jsx";
import Display_Position from "./Display_Position.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Display_Position />
  </StrictMode>,
);
