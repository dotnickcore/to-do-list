import Form from './ui/Form'
import Button from './ui/Button'
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IFormInput } from '../interfaces/IFormInput';
import Input from './ui/Input';
import { useToDoContext } from '../hooks/useToDoContext';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const toDoSchema = z.object({
  text: z.string().min(1, "Text is required").trim(),
});

function AddToDo() {
  const formMethods = useForm<IFormInput>({
    resolver: zodResolver(toDoSchema)
  });

  const { handleAddToDo } = useToDoContext();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    handleAddToDo(data);
    formMethods.reset();
  };

  return (
    <Form formMethods={formMethods} onSubmit={onSubmit}>
      <div className="flex items-center gap-2 mb-6">
        <Button label="Add" />
            <Input 
              name="text"
              register={formMethods.register}
              type="string"
              placeholder="Enter a to-do here"
              error={formMethods.formState.errors.text}
            />
      </div>
    </Form>
  )
}

export default AddToDo