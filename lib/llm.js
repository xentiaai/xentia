import axios from 'axios'
export async function callLLM(prompt){ const res = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/api/llm/proxy`, {prompt}); return res.data.reply }
