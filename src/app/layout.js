export const metadata = {
  title: "Landrup Dans",
  description: "Landrup Danske tilmeld dig i dag.",
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
