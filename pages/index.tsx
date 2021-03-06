import type { NextPage } from 'next'
import Head from 'next/head'
import { useCallback, useState } from 'react'
import Button from '../components/Button'
import Input from '../components/Input'
import LabeledInput from '../components/LabeldInput'
import Results from '../components/Results'

const TITLE = 'מחשבון עלות נסיעה'

const Home: NextPage = () => {
  const [oil, setOil] = useState(0)
  const [insurance, setInsurance] = useState(0)
  const [kmPerLiter, setKmPerLiter] = useState(0)
  const [km, setKm] = useState(0)

  const [price, setPrice] = useState(0)
  const calc = useCallback(() => {
    const insurancePrice = insurance * km
    const oilPrice = (km / kmPerLiter) * oil
    setPrice(insurancePrice + oilPrice)
    setOil(0)
    setInsurance(0)
    setKmPerLiter(0)
    setKm(0)
  }, [insurance, km, kmPerLiter, oil])

  return price == 0 ? (
    <div>
      <Head>
        <title>{TITLE}</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-col justify-center items-center p-4 gap-4">
        <LabeledInput onChange={setOil} label="מחיר לליטר דלק" emoji="🏷️⛽" />
        <LabeledInput
          onChange={setInsurance}
          label="מחיר לקילומטר בביטוח"
          emoji="🏷️📋"
        />
        <LabeledInput
          onChange={setKmPerLiter}
          label="(km/L) קילומטרים לליטר דלק"
          emoji="⛽"
        />
        <LabeledInput onChange={setKm} label="(km) מרחק נסיעה" emoji="🚗" />
        <Button onClick={() => calc()}>חישוב</Button>
      </div>
    </div>
  ) : (
    <Results
      price={price}
      onClick={() => {
        setPrice(0)
      }}
    />
  )
}

export default Home
