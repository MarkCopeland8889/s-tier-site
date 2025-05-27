// app/page.js
"use client";

// IMPORTANT: Update this path if your logo file has a different name or is in a subfolder within /public
const LOGO_SRC = "/s-tier-logo.png"; // This assumes s-tier-logo.png is directly in /public

// Simple Navbar Component (Minimalistic) - (Definition remains the same)
const Navbar = () => (
  <nav style={{
    width: '100%',
    padding: '1rem 0',
    borderBottom: `1px solid var(--border-color)`, // Assuming --border-color is defined in globals.css
    // Removed marginBottom as logo will now dictate space below navbar if any
  }}>
    <ul style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0,
    }}>
      <li style={{ margin: '0 1.5rem' }}><a href="/">Home</a></li>
      <li style={{ margin: '0 1.5rem' }}><a href="#projects">Projects</a></li>
      <li style={{ margin: '0 1.5rem' }}><a href="#join">Join the Movement</a></li>
      <li style={{ margin: '0 1.5rem' }}><a href="#contact">Contact</a></li>
    </ul>
  </nav>
);


export default function HomePage() {
  const missionStatement = "The economy is changing. Speed matters more than quality. We help simplify people's lives through AI.";

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '0 20px',
    }}>

      {/* Navbar is now at the top */}
      <Navbar />

      {/* Logo Section - Below Navbar, Larger */}
      <header style={{
        padding: '2rem 0', // Adjust padding as needed around the logo
        textAlign: 'center',
        width: '100%',
        // marginBottom: '2rem', // Add margin below logo if needed before headline
      }}>
        <img
          src={LOGO_SRC}
          alt="S-Tier Logo"
          style={{
            height: '180px', // << --- INCREASED LOGO SIZE (Example, adjust as needed)
            // width: 'auto', // To maintain aspect ratio if height is set
            // marginBottom: '1rem', // If you want space just below the logo image
          }}
          onError={(e) => {
            e.target.style.display = 'none';
            const parent = e.target.parentNode;
            if (parent) {
                const textFallback = document.createElement('h1');
                textFallback.textContent = 'S-Tier';
                textFallback.style.fontSize = '5rem'; // Larger fallback text
                textFallback.style.margin = '0';
                textFallback.style.padding = '2.5rem 0'; // Adjust padding for visual balance
                textFallback.style.color = 'var(--heading-color)';
                parent.insertBefore(textFallback, e.target);
            }
            console.warn(`Logo not found at ${LOGO_SRC}. Displaying text fallback. Make sure your logo is in the /public folder and the path is correct.`);
          }}
        />
      </header>

      {/* Main Content (Headline, Mission, Projects) */}
      <main style={{
        textAlign: 'center',
        padding: '1rem 0 2rem 0', // Adjusted top padding as logo is above now
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
          A new era is here.
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
            Projects
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}>
            <div style={{ backgroundColor: 'var(--primary-color)', padding: '1.5rem', borderRadius: '8px', border: `1px solid var(--border-color)`}}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Nexus</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-color)'}}>A chatbot interface for APIs. Supports Gemini and OpenAI.</p>
            </div>
            <div style={{ backgroundColor: 'var(--primary-color)', padding: '1.5rem', borderRadius: '8px', border: `1px solid var(--border-color)`}}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--heading-color)' }}>Nova</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-color)'}}>A videogame generator. Provides download links.<br></br></p>
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