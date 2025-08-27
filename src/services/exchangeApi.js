const BASE = 'https://api.exchangerate.host'


export async function fetchSymbols() {
const res = await fetch(`${BASE}/symbols`)
if (!res.ok) throw new Error('Failed to fetch symbols')
const data = await res.json()
if (!data || !data.symbols) throw new Error('Invalid symbols response')
return data.symbols // { USD: {description, code}, ... }
}


export async function convert({ from, to, amount = 1 }) {
const url = new URL(`${BASE}/convert`)
url.searchParams.set('from', from)
url.searchParams.set('to', to)
url.searchParams.set('amount', String(amount))
url.searchParams.set('places', '6')


const res = await fetch(url)
if (!res.ok) throw new Error('Failed to fetch conversion')
const data = await res.json()
if (!data || typeof data.result !== 'number') throw new Error('Invalid conversion response')
return {
rate: data.info?.rate ?? data.result / amount,
result: data.result,
date: data.date,
query: data.query,
}
}