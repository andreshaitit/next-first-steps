import { Navbar } from "@/components";
import React from "react";

export default function GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar />
    <div>
        {children}
      <h1>Hello Root Layout Root Name</h1>
    </div>
    </>
  );
}