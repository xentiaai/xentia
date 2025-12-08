"use client";
export const runtime = "nodejs";

import "./globals.css";
import { MotionConfig, motion } from "framer-motion";

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="dark">
      <body className="min-h-screen bg-gray-950 text-gray-200 antialiased">
        <MotionConfig reducedMotion="user">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col flex-1"
          >
            {children}
          </motion.div>
        </MotionConfig>
      </body>
    </html>
  );
}
