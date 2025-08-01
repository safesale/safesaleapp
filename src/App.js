import React from 'react';

function App() {
  return (
    <div
      style={{
        padding: '40px',
        textAlign: 'center',
        backgroundColor: '#000',
        height: '100vh',
        color: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <img
        src="/safesale-logo.png"
        alt="SafeSale Logo"
        style={{
          width: '200px',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ color: '#f529cc', fontSize: '2rem' }}>
        ✅ <span style={{ fontWeight: 'bold' }}>SafeSale is LIVE!</span>
      </h1>
      <p style={{ color: '#00ffff', marginTop: '10px', fontSize: '1.2rem' }}>
        Marketplace security made simple.
      </p>
    </div>
  );
}

export default App;
