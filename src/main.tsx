import "@fontsource/inter/latin.css";
import "react-loading-skeleton/dist/skeleton.css";
import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { SkeletonTheme } from "react-loading-skeleton";
import { App } from "./App.tsx";

export const queryClient = new QueryClient();

declare global {
  interface Window {
    __TANSTACK_QUERY_CLIENT__: import("@tanstack/query-core").QueryClient;
  }
}

window.__TANSTACK_QUERY_CLIENT__ = queryClient;

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <SkeletonTheme baseColor="#2A1935" highlightColor="#4B2E60">
      <App />
    </SkeletonTheme>
  </QueryClientProvider>,
);
