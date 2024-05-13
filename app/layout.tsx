import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import styles from "./styles/crt.module.css";

export const metadata: Metadata = {
  title: "The Overlook Films",
  description: "Tucker Johnson, producer/video maker from Salt Lake City",
};

const vt = VT323({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={vt.className}>
        <div className={styles.crtScreen}>
          <div className="py-28 px-52 text-black">{children}</div>
        </div>
        <div className="absolute bottom-0 right-0 text-[#008000] pr-24 text-5xl">
          <Link
            href="https://github.com/Jrpl"
            rel="noopener noreferrer"
            target="_blank"
          >
            <p>Built by Justin Pfeifler</p>
          </Link>
        </div>
      </body>
    </html>
  );
}
