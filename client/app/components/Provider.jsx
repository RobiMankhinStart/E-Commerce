"use client"; // This is REQUIRED for Redux and Context providers

import { Provider } from "react-redux";
// import { store } from "@/store";
import { Toaster } from "sonner";

export function Providers({ children }) {
  return (
    <>
      {/* Uncomment the line below and the import above 
         once your store file is fixed! 
      */}
      {/* <Provider store={store}> */}
      {children}
      <Toaster position="top-center" richColors />
      {/* </Provider> */}
    </>
  );
}
