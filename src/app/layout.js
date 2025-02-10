import "@/styles/globals.scss";

export const metadata = {
  title: "Landrup Dans",
  description: "Landrup Danske tilmeld dig i dag.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
