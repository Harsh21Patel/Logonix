import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import Provider from "./provider"
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner"

const host_Grotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
});

export const metadata = {
  title: "Logonix",
  description: "Ai logo generator",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${host_Grotesk.variable} `}
      >
        <Provider>
        {children}
        </Provider>
        <Toaster />
      </body>
    </html>
    </ClerkProvider>
  );
}
