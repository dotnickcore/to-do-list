import Form from './ui/Form'
import Button from './ui/Button'
import { useForm, type SubmitHandler } from 'react-hook-form';
import type { IFormInput } from '../interfaces/IFormInput';
import Input from './ui/Input';

function AddToDo() {
  const formMethods = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {

    console.log(data);
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
            />
      </div>
    </Form>
  )
}

export default AddToDo