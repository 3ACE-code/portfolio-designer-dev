import React from "react";
import { RouterProvider } from "react-router";
import { Toaster } from "sonner";
import { router } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-['Poppins',_sans-serif] selection:bg-[#00F0FF] selection:text-black scroll-smooth">
      <RouterProvider router={router} />
      <Toaster
        position="bottom-right"
        closeButton
        toastOptions={{
          classNames: {
            toast: "!bg-zinc-900 !text-white !border !border-[#00F0FF]/40",
            title: "!text-white",
            description: "!text-zinc-300",
            success: "!border-[#00F0FF]/60",
            error: "!border-red-400/60",
          },
        }}
      />
    </div>
  );
}
