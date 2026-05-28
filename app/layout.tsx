import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});
export const metadata: Metadata = {
  title: "Callejón Zeta",
  description: "Streetwear premium desde el sur.",
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
