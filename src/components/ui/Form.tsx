import type { FieldValues } from 'react-hook-form';
import type { FormProps } from '../../types/FormProps';

function Form<T extends FieldValues>({ 
  formMethods, 
  onSubmit, 
  children 
}: FormProps<T>) {
  return (
    <form onSubmit={formMethods.handleSubmit(onSubmit)}>
      {children}
    </form>
  );
}

export default Form