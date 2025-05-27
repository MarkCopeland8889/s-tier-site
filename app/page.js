// app/page.js
"use client";

import Link from 'next/link'; // Import the Link component
import Image from 'next/image'; // Import the Image component

// IMPORTANT: Update this path if your logo file has a different name or is in a subfolder within /public
const LOGO_SRC = "/s-tier-logo.png"; // This assumes s-tier-logo.png is directly in /public

// Simple Navbar Component (Minimalistic)
const Navbar = () => (
  <nav style={{
    width: '100%',
    padding: '1rem 0',
    borderBottom: `1px solid var(--border-color)`,
  }}>
    <ul style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
      {/* Use Link for internal navigation */}
      <li style={{ margin: '0 1.5rem' }}><Link href="/">Home</Link></li>
      {/* For anchor links on the same page, <a> is okay, or you can use Link with scroll behavior if preferred */}
      <li style={{ margin: '0 1.5rem' }}><a href="#projects">Projects</a></li>
      <li style={{ margin: '0 1.5rem' }}><a href="#join">Join the Movement</a></li>
      <li style={{ margin: '0 1.5rem' }}><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);


export default function HomePage() {
  const missionStatement = "At S-Tier, we envision a future where daily life is seamlessly enhanced by intelligent technology. Our mission is to develop intuitive AI-powered solutions that simplify complex tasks, automate routine processes, and free up your time, allowing you to focus on what truly inspires you.";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 20px',
    }}>

      <Navbar /> {/* Navbar is now at the top */}

      <header style={{
        padding: '2rem 0',
        textAlign: 'center',
        width: '100%',
      }}>
        {/* Use next/image for optimized images */}
        <Image
          src={LOGO_SRC}
          alt="S-Tier Logo"
          width={200} // REQUIRED: Specify width (in pixels)
          height={180} // REQUIRED: Specify height (in pixels) to maintain aspect ratio or desired dimensions
          priority // Add priority if it's an LCP element (Largest Contentful Paint)
          style={{
            // 'height' and 'width' through props are preferred for layout,
            // but you can still use style for things like marginBottom.
            // The component will handle responsiveness.
            marginBottom: '1rem',
          }}
          // onError is not a standard prop for next/image in the same way as <img>.
          // Handle missing images by ensuring the src path is correct.
          // If you need a fallback, it's usually handled with CSS or conditional rendering.
        />
        {/* If you need a text fallback for next/image, it's more complex than onError.
            Typically, you'd ensure the image exists or conditionally render text.
            For now, focus on making sure LOGO_SRC is correct.
        */}
      </header>

      <main style={{
        textAlign: 'center',
        padding: '1rem 0 2rem 0',
        maxWidth: '750px',
        width: '100%',
        flexGrow: 1,
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 6vw, 3.8rem)',
          fontWeight: 'bold',
          lineHeight: '1.2',
          marginBottom: '1.5rem',
          color: 'var(--heading-color)',
        }}>
          S-Tier. A new era is here.
        </h1>

        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          color: 'var(--text-color)',
          maxWidth: '650px',
          margin: '0 auto 3rem auto',
        }}>
          {missionStatement}
        </p>

        <section id="projects" style={{
          padding: '3rem 0',
          borderTop: `1px solid var(--border-color)`,
          marginTop: '2rem',
        }}>
          <h2 style={{
            fontSize: '2.2rem',
            marginBottom: '2rem',
            color: 'var(--heading-color)',
          }}>
            Our Groundbreaking Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <div style={{ backgroundColor: 'var(--primary-color)', padding: '1.5rem', borderRadius: '8px', border: `1px solid var(--border-color)`}}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Project Chimera</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-color)'}}>Revolutionizing personal assistance with context-aware AI. (More details soon)</p>
            </div>
            <div style={{ backgroundColor: 'var(--primary-color)', padding: '1.5rem', borderRadius: '8px', border: `1px solid var(--border-color)`}}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Project Nova</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-color)'}}>Automating complex data analysis for insightful decision-making. (Launching Q4)</p>
            </div>
            <div style={{ backgroundColor: 'var(--primary-color)', padding: '1.5rem', borderRadius: '8px', border: `1px solid var(--border-color)`}}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Project Atlas</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-color)'}}>Simplifying global logistics through AI-driven optimization. (In development)</p>
            </div>
          </div>
        </section>
      </main>

      <footer style={{
        width: '100%',
        textAlign: 'center',
        padding: '2rem 0',
        marginTop: 'auto',
        borderTop: `1px solid var(--border-color)`,
        fontSize: '0.9rem',
        color: '#888888',
      }}>
        © {new Date().getFullYear()} S-Tier. All rights reserved.
      </footer>
    </div>
  );
}