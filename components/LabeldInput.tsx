import Input, { InputProps } from './Input'

export interface LabeldInputProps extends Partial<InputProps> {
  label: string
  emoji: string
}

export default function LabeledInput({
  onChange,
  label,
  emoji,
}: LabeldInputProps) {
  return (
    <div className="w-full flex flex-col items-end gap-4 bg-gray-100 rounded-xl p-4">
      <h2 className="text-lg font-bold text-gray-800">{label}</h2>
      <Input onChange={onChange} hint={emoji} />
    </div>
  )
}
