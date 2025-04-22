'use client';
import { useState } from 'react';
import { redirect } from 'next/navigation';

const ADMIN_USER = 'admin';
const ADMIN_PASS = 'imthebest';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      // Use localStorage for demo auth (no SSR mismatch)
      if (typeof window !== 'undefined') {
        localStorage.setItem('albert_portfolio_admin', 'true');
        window.location.href = '/admin-dashboard';
      }
    } else {
      setError('Invalid credentials.');
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 to-zinc-900 flex flex-col items-center justify-center px-4">
      <div className="max-w-md w-full bg-zinc-900/90 p-8 rounded-2xl shadow-2xl border border-zinc-800 flex flex-col items-center animate-fade-in">
        <h1 className="text-2xl font-bold mb-2 text-blue-400 tracking-tight">Admin Login</h1>
        <p className="mb-6 text-zinc-400 text-center">Sign in to manage your portfolio content.<br/> 
        </p>
        <form className="flex flex-col gap-4 w-full" onSubmit={handleSubmit} autoComplete="off">
          <input
            type="text"
            required
            placeholder="Username"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
            autoFocus
          />
          <input
            type="password"
            required
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="px-4 py-2 rounded bg-zinc-800 border border-zinc-700 text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-400 font-mono"
          />
          <button type="submit" className="w-full py-2 rounded bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-colors">Sign In</button>
          {error && <div className="text-rose-400 text-sm font-mono mt-1">{error}</div>}
        </form>
      </div>
    </main>
  );
}
// ... existing code ... <nothing, this is the entire new file!>
