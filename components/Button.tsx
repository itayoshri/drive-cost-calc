import { ReactChild } from 'react'

export interface ButtonProps {
  onClick(): unknown
  children: ReactChild
}

export default function Button({ onClick, children }: ButtonProps) {
  return (
    <button
      onClick={() => onClick()}
      className=" bg-sky-500  px-5 py-3 rounded-lg text-white font-bold"
    >
      {children}
    </button>
  )
}
