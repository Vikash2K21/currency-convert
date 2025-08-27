import { useEffect, useState } from 'react'
import { fetchSymbols } from '../services/exchangeApi'


export function useSymbols() {
const [symbols, setSymbols] = useState(null)
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
let mounted = true
setLoading(true)
fetchSymbols()
.then((s) => mounted && setSymbols(s))
.catch((e) => mounted && setError(e.message))
.finally(() => mounted && setLoading(false))
return () => { mounted = false }
}, [])


return { symbols, loading, error }
}