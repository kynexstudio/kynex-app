'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Kynex</h1>
      
      <div className="mb-8">
        <ConnectButton />
      </div>

      <p className="text-gray-600">
        Connect your wallet to get started
      </p>
    </main>
  );
}
