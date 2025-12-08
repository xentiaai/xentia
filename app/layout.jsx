// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Xentia — AI agents platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className="dark">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/tailwindcss@3.4.4/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
