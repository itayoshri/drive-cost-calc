import { useMemo } from 'react'
import Button from './Button'

export interface ResultsProps {
  price: number
  onClick(): unknown
}

export default function Results({ price, onClick }: ResultsProps) {
  const shortPrice = useMemo(() => {
    const shekels = Math.floor(price)
    const agorot = (price - shekels) * 100
    return `${shekels}${agorot ? `.${Math.round(agorot)}` : ''}`
  }, [price])

  return (
    <div className="mt-20 flex flex-col items-center justify-center  gap-6">
      <div className="flex flex-col items-center justify-center  gap-2">
        <h1 className="text-xl font-semibold">מחיר הנסיעה הוא</h1>
        <h2 className="text-4xl font-bold text-sky-500">{shortPrice}₪</h2>
      </div>
      <div>
        <Button onClick={() => onClick()}>נסה שוב</Button>
      </div>
    </div>
  )
}
