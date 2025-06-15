import React from 'react';

export default function App() {
  return (
    <div className="app">
      <header className="header">
        <span className="user">@telegram_user</span>
        <button className="connect">Connect Wallet</button>
      </header>
      <nav className="menu">
        <button>Home</button>
        <button>Earn</button>
        <button>Presale</button>
        <button>Airdrop</button>
      </nav>
      <main className="content">
        <h1>Welcome to $GUR Mini App</h1>
        <p>Coming Soon...</p>
      </main>
    </div>
  );
}