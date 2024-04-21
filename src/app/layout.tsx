import type { Metadata } from "next";
import { montserrat } from "./ui/fonts";
import "./ui/globals.css";
import { PreloadResources } from "./lib/preload";

export const metadata: Metadata = {
  title: {
    template: "%s | Jorge Palacios",
    default: "Jorge Palacios",
  },
  description: "This is my proffesional portfolio as a Systems Engineer",
  metadataBase: new URL("https://jorgepalaciios.github.io/"),
  generator: "Next.js",
  applicationName: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Next.js",
    "React",
    "JavaScript",
    "FrontEnd",
    "Framework",
    "Tutorial",
    "Web development",
    "backend",
    "python",
    "django",
    "git",
    "docker",
    "postgresql",
  ],
  authors: [
    { name: "Jorge Palacios", url: "https://github.com/jorgepalaciios/" },
  ],
  creator: "Jorge Palacios",
  publisher: "Jorge Palacios",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased bg-[#242424] md:bg-[#e7e7e7]`}
      >
        <PreloadResources />
        {children}
      </body>
    </html>
  );
}
