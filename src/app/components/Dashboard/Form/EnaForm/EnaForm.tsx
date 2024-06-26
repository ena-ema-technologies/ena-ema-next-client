import { ReactNode } from 'react';
import { FieldValues, FormProvider, SubmitHandler, useForm } from 'react-hook-form';

type TFromProps = {
  onSubmit: SubmitHandler<FieldValues>;
  children: ReactNode
} & TFormConfig;

type TFormConfig = {
  defaultValues?: Record<string, any>
}

const EnaForm = ({ onSubmit, children, defaultValues }: TFromProps) => {
  const formConfig: TFormConfig = {}

  if(defaultValues){
    formConfig['defaultValues'] = defaultValues;
  }
  const methods = useForm( formConfig);
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default EnaForm;
