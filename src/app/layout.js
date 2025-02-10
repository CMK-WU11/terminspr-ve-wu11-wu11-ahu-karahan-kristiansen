export const metadata = {
  title: "Landrup Dans",
  description: "Landrup Danske tilmeld dig i dag.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="dk">
      <body>
        {children}
      </body>
    </html>
  );
}
