import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center p-4\">
      <h1 className="text-3xl font-bold mb-4\">Wallet Dashboard</h1>
      <ConnectButton />
    </div>
  );
}

export default App;
