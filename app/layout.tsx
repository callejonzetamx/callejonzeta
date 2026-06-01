import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export const metadata = {
  title: "CALLEJÓN ZETA | Del sur, con identidad",
  description: "Oversized fit. Calidad premium. Hecho en México.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={montserrat.className}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
