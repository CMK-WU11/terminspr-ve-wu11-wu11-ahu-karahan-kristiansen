import "@/styles/globals.scss";

export const metadata = {
  title: "Landrup Dans",
  description: "Landrup Dans tilmeld dig i dag for danse lektioner.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body>
        {children}
      </body>
    </html>
  );
}