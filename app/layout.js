// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/react'; // Import the Analytics component

// Configure the Inter font
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'S-Tier - A New Era is Here',
  description: 'S-Tier: Simplifying lives with AI.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* Head content */}
      </head>
      <body className={inter.className}>
        {children}
        <Analytics /> {/* Add the Analytics component here, just before closing </body> */}
      </body>
    </html>
  );
}