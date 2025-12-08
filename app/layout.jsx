// src/app/layout.jsx
import "./globals.css";
import { MotionConfig, motion } from "framer-motion";

export const metadata = {
  title: "Xentia — AI agents platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="dark">
      <body
        className="
          min-h-screen 
          bg-gray-950 text-gray-200 
          antialiased 
          flex flex-col 
          selection:bg-indigo-500 selection:text-white
        "
      >
        <MotionConfig reducedMotion="user">
          {/* Global fade-in animation */}
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
