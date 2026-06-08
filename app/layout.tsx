import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coastalkeyproperties.com"),
  title: "Coastal Key Properties | Find Your Place in Paradise",
  description:
    "Florida's premier condominium specialists. Discover premium Florida condos with expert guidance that makes buying simple, stress-free, and rewarding. Book your free consultation today.",
  keywords:
    "Florida condos, luxury condominiums, Miami Beach real estate, Fort Lauderdale condos, Naples condos, Florida real estate agent, condo buying, waterfront property",
  authors: [{ name: "Coastal Key Properties" }],
  openGraph: {
    title: "Coastal Key Properties | Find Your Place in Paradise",
    description:
      "Florida's premier condominium specialists. Expert guidance for condo buyers.",
    type: "website",
    images: [{ url: "/images/hero-collage.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coastal Key Properties | Find Your Place in Paradise",
    description:
      "Florida's premier condominium specialists.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </head>
      <body className="bg-sand font-opensans antialiased overflow-x-hidden">
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
