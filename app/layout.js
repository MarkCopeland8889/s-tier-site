// app/layout.js
import './globals.css'; // Import the global CSS file
import { Inter } from 'next/font/google';

// Configure the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter', // This creates the CSS variable --font-inter
});

export const metadata = {
  title: 'S-Tier - A New Era is Here',
  description: 'S-Tier: Simplifying lives with AI.',
};

export default function RootLayout({ children }) {
  return (
    // Apply the font variable class to <html> to make --font-inter available globally
    <html lang="en" className={inter.variable}>
      <head>
        {/* Head content */}
      </head>
      {/* Apply the direct font class to <body> */}
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}