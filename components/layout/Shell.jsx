'use client'
import Link from 'next/link'
export default function Shell({children}) {
  return (<div><header className='bg-white p-4 border-b'><div className='max-w-6xl mx-auto flex justify-between'><div className='font-bold'>Xentia</div><nav className='flex gap-4'><Link href='/dashboard'>Dashboard</Link><Link href='/admin'>Admin</Link></nav></div></header><main className='max-w-6xl mx-auto p-6'>{children}</main></div>)
}
