'use client'
import Link from 'next/link'
import DemoChat from '../components/ui/DemoChat'
export default function Page(){
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b p-4 flex justify-between items-center">
        <div className="flex items-center gap-3"><div className="w-10 h-10 bg-indigo-600 text-white flex items-center justify-center rounded">X</div><div><div className="font-bold">Xentia</div><div className="text-xs">AI agents for business</div></div></div>
        <nav className="flex gap-4"><Link href="/dashboard">Dashboard</Link><Link href="/admin">Admin</Link></nav>
      </header>
      <main className="max-w-6xl mx-auto p-8">
        <h1 className="text-4xl font-extrabold">Xentia — Agents for business</h1>
        <p className="mt-4 text-gray-600">Deploy AI agents to websites, handle support, capture leads, automate workflows.</p>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded shadow"><h3>Demo chat</h3><DemoChat/></div>
          <div className="bg-white p-6 rounded shadow"><h3>How it works</h3><ol><li>Create agent</li><li>Train prompt</li><li>Embed widget</li></ol></div>
        </div>
      </main>
    </div>
  )
}
