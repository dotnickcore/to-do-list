import type { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";

export interface FormProps<T extends FieldValues> {
  formMethods: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  children: React.ReactNode;
}