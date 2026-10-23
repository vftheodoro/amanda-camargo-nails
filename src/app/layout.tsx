import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { business } from "@/content/business";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { JsonLd } from "@/components/json-ld";
import { businessSchema, isPreview } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.domain),
  title: {
    default: "Amanda Camargo Nails | Nail designer em Barnabés, Juquitiba",
    template: "%s | Amanda Camargo Nails",
  },
  description:
    "Alongamento em gel com molde F1, banho de gel, manicure e pedicure em Barnabés, Juquitiba. Conheça os trabalhos de Amanda Camargo e agende seu horário.",
  applicationName: business.name,
  icons: {
    icon: [{ url: "/favicon.png", sizes: "64x64", type: "image/png" }],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },
  robots: isPreview
    ? { index: false, follow: false }
    : { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <a className="skip-link" href="#conteudo">
          Pular para o conteúdo
        </a>
        <SiteHeader />
        <main id="conteudo">{children}</main>
        <SiteFooter />
        <JsonLd data={businessSchema()} />
      </body>
    </html>
  );
}
