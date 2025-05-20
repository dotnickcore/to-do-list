import type { FieldValues, Path, UseFormRegister } from "react-hook-form";

export interface InputProps<T extends FieldValues> {
  name: Path<T>;
  register: UseFormRegister<T>;
  type?: string;
  placeholder?: string;
}