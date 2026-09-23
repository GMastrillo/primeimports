import type { Metadata } from "next";
import "./globals.css";
import { SmoothScroll } from "@/components/providers/smooth-scroll";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Prime Imports SP · Showroom de Supercarros & Veículos Exclusivos",
  description:
    "Referência nacional na curadoria e comercialização de supercarros, exóticos e veículos blindados de alto padrão. Showroom privativo no Tatuapé / Anália Franco, São Paulo.",
  keywords: [
    "Prime Imports SP",
    "Supercarros São Paulo",
    "Ferrari 458 Italia",
    "Porsche 911 GT3",
    "McLaren Artura",
    "Carros Blindados SP",
    "Exotic Cars Brazil",
  ],
  authors: [{ name: "Prime Imports SP" }],
  openGraph: {
    title: "Prime Imports SP · Supercarros & Exclusivos",
    description:
      "A coleção definitiva de supercarros e veículos de luxo selecionados no coração de São Paulo.",
    url: "https://primeimportssp.com",
    siteName: "Prime Imports SP",
    locale: "pt_BR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Synchronous zero-FOUC intro shield: locks viewport to pure black before body paints if intro is pending */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (sessionStorage.getItem('prime_intro_shown') !== 'true') {
                  document.documentElement.classList.add('intro-pending');
                } else {
                  document.documentElement.classList.add('intro-done');
                }
              } catch (e) {}
            `,
          }}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
              html.intro-pending,
              html.intro-pending body,
              html.intro-pending main,
              html.intro-pending section {
                background-color: #000000 !important;
                background-image: none !important;
              }
              html.intro-pending body {
                overflow: hidden !important;
              }
              html.intro-pending .intro-hide {
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
              }
              html.intro-done #intro-overlay-container {
                display: none !important;
              }
            `,
          }}
        />
      </head>
      <body className="bg-white text-neutral-900 dark:bg-black dark:text-white antialiased min-h-screen">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
