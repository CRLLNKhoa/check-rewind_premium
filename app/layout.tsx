import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/header";
import ThemeProvider from "@/components/providers/theme-provider";
import "react-tooltip/dist/react-tooltip.css";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={cn(
            `poppins-thin h-screen bg-background font-icomoon flex flex-col`
          )}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="h-screen overflow-y-auto bg-[url('/bg-1.png')] object-fill bg-cover bg-center bg-no-repeat">
              {children}
            </div>
            {/* <Footer /> */}
            <Toaster position="top-right" reverseOrder={false} />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
