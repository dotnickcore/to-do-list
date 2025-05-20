import type { FieldValues } from 'react-hook-form';
import type { InputProps } from '../../types/InputProps';

function Input<T extends FieldValues>({
  name,
  register,
  type = 'text',
  placeholder,
}: InputProps<T>) {
  return (
    <input
      className="flex-1 px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 bg-transparent"
      type={type}
      placeholder={placeholder}
      {...register(name)}
    />
  );
}

export default Input;