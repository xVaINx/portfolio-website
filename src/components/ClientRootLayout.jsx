"use client"
import React from "react";
import { Providers } from "./Providers";
import Header from "./Header";
import "../styles/main.scss";

const ClientRootLayout = ({ children }) => {
  return (
    <html lang="en" className="sr">
      <body
        style={{
          backgroundColor: "#02001E",
        }}
      >
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
};

export default ClientRootLayout;