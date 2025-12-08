// src/app/layout.jsx
import "./globals.css";

export const metadata = {
  title: "Xentia — AI agents platform",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        {/* tymczasowy test: wklejamy mały inline style, żeby szybko zweryfikować czy layout w ogóle nakłada style */}
        <style>{`/* temp-check */ body { outline: 6px solid rgba(78,107,255,0.06); }`}</style>
      </head>
      <body className="app-body">
        {children}
      </body>
    </html>
  );
}
