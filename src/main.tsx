import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const root = document.getElementById("root");

async function enableMocking() {
  const { worker } = await import("./infrastructure/api/browser");

  return worker.start();
}

enableMocking().then(() => {
  createRoot(root!).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
