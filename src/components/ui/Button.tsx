import type { ButtonProps } from '../../types/ButtonProps'

function Button({ label, disabled = false }: ButtonProps) {
  return (
    <button
      className="px-4 py-2 text-blue-600 hover:text-blue-800 focus:outline-none whitespace-nowrap"
      disabled={disabled}>
      {label}
    </button>
  )
}

export default Button