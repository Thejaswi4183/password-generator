import '../../styles/globals.css'; // Import global styles (including Tailwind CSS)

export const metadata = {
  title: 'Password Generator',
  description: 'Generate strong passwords',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-200 font-sans">{children}</body>
    </html>
  );
}
