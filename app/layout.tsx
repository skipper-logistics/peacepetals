import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Peace Petal Center | Counselling, Therapy & Sanctuary",
  description: "Nurturing peace, petal by petal. Discover professional counselling, therapeutic services, meditation workshops, and a soothing sanctuary for mental well-being.",
  keywords: ["counselling", "therapy", "mental health", "meditation", "mindfulness", "healing", "wellness", "sanctuary", "appointments", "sessions"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-brand-cream text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}

