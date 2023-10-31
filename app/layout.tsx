import "./globals.css";
import { getAuthSession } from "@/lib/auth";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import { GeistSans } from "geist/font";

export const metadata: Metadata = {
  title: "Cognite",
  description: "Chat with any website",
  icons: {
    icon: "/favicon.ico",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getAuthSession();

  return (
    <html lang="en" className={GeistSans.className}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>

          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
