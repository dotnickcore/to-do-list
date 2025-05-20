import type { FieldValues } from 'react-hook-form';
import type { FormProps } from '../../types/FormProps';

function Form<T extends FieldValues>({ 
  formMethods, 
  onSubmit,
  children,
  ...formAttrs
}: FormProps<T>) {
  return (
    <form
      {...formAttrs}
      onSubmit={formMethods.handleSubmit(onSubmit)}
      noValidate
    >
      {children}
    </form>
  );
}

export default Form
