import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import { cn } from "@/lib/utils";
import Header from "@/components/layouts/header";
import ThemeProvider from "@/components/providers/theme-provider";
import "react-tooltip/dist/react-tooltip.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Kiểm Tra Cost Rewind",
  description: "Website Check Cost coded by Carolo Lương Khoa. Đây là một trang web hỗ trợ bạn trong việc chơi game DBG. Các danh mục hàng đầu bao gồm: Single Rewind, Double Rewind, Time Rewind, Push day, Đội hình, World tree, Tính dame, Blogs, và các bài viết khác.",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.webmanifest",
  keywords: ["Lương Khoa", "Carolo Lương Khoa", "Day bygone","Check Cost", "Check Rewind","Code by Lương Khoa"],
  authors: [{ name: "Carolo Lương Khoa" }],
  creator: "Carolo Lương Khoa",
  publisher: "Carolo Lương Khoa",
  openGraph: {
    title: "Check Cost DBG",
    description: "Website Check Cost coded by Carolo Lương Khoa",
    url: "https://check-rewind.vercel.app",
    siteName: "Check rewind",
    images: [
      {
        url: "https://i.ibb.co/JsjvtJn/www-check-rewind-vercel-app.png", // Must be an absolute URL
      },
    ],
    locale: "vi",
    type: "website",
  },
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
