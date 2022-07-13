export interface InputProps {
  onChange(input: number): unknown
  hint: string
}

export default function Input({ onChange, hint }: InputProps) {
  return (
    <input
      type={'number'}
      placeholder={hint}
      onChange={(e) => onChange(Number(e.target.value))}
      className=" appearance-none bg-white w-40 h-12 text-right rounded-lg border-2 px-3 border-transparent outline-none shadow-sm shadow-black/30"
    />
  )
}
