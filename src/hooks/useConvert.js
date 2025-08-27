import { useCallback, useEffect, useMemo, useState } from 'react'
import { convert } from '../services/exchangeApi'


export function useConvert(from, to, amount) {
const [data, setData] = useState(null)
const [loading, setLoading] = useState(false)
const [error, setError] = useState(null)


const canFetch = useMemo(() => Boolean(from && to && amount >= 0), [from, to, amount])


const run = useCallback(async () => {
if (!canFetch) return
setLoading(true)
setError(null)
try {
const res = await convert({ from, to, amount: Number(amount) || 0 })
setData(res)
} catch (e) {
setError(e.message)
} finally {
setLoading(false)
}
}, [from, to, amount, canFetch])


useEffect(() => { run() }, [run])


return { data, loading, error, refetch: run }
}