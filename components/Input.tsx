export interface InputProps {
  onChange(input: number): unknown
}

export default function Input({ onChange }: InputProps) {
  return (
    <input
      pattern="[0-9]*"
      inputMode="numeric"
      type={'number'}
      onChange={(e) => onChange(Number(e.target.value))}
      className=" appearance-none bg-white w-40 h-12 text-right rounded-lg border-2 px-3 border-transparent outline-none shadow-sm shadow-black/30"
    />
  )
}
