'use client'
import { useState, useRef, useEffect } from 'react'
export default function DemoChat(){
  const [messages, setMessages] = useState([{from:'agent', text:'Cześć! Jak mogę pomóc?'}])
  const [input, setInput] = useState('')
  const ref = useRef(null)
  useEffect(()=>{ if(ref.current) ref.current.scrollTop = ref.current.scrollHeight }, [messages])
  async function send(){
    if(!input.trim()) return
    const txt = input; setInput('')
    setMessages(m=>[...m, {from:'user', text:txt}])
    try{
      const res = await fetch('/api/llm/demo', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({prompt:txt})})
      const j = await res.json()
      setMessages(m=>[...m, {from:'agent', text:j.reply}])
    }catch(e){
      setMessages(m=>[...m, {from:'agent', text:'Błąd — spróbuj później.'}])
    }
  }
  return (
    <div className="flex flex-col h-72">
      <div ref={ref} className="flex-1 overflow-auto p-3 bg-gray-50 rounded">
        {messages.map((m,i)=> <div key={i} className={`mb-2 ${m.from==='user'?'text-right':''}`}><div className={`${m.from==='user'?'bg-indigo-600 text-white inline-block px-3 py-2 rounded':'bg-white inline-block px-3 py-2 rounded'}`}>{m.text}</div></div>)}
      </div>
      <div className="mt-2 flex gap-2"><input value={input} onChange={e=>setInput(e.target.value)} className="flex-1 border px-3 py-2 rounded" onKeyDown={e=>{if(e.key==='Enter') send()}}/><button onClick={send} className="px-4 py-2 bg-indigo-600 text-white rounded">Wyślij</button></div>
    </div>
  )
}
