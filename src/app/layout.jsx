import "./globals.css";
import vazirFont from "@/constants/localFonts";

export const metadata = {
  title: "Next Shop Panel",
  description: "Admin panel shop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body className={`${vazirFont.variable} font-sans`}>{children}</body>
    </html>
  );
}
