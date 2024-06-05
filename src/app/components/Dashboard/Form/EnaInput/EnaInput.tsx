import { Controller } from 'react-hook-form';

type TInputProps = {
  name: string;
  required?: boolean;
  type: string;
  value?: string;
  placeholder: string;
  className?: string;
};

const EnaInput = ({
  type,
  name,
  placeholder,
  required,
  value,
}: TInputProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field, fieldState: { error } }) => (
          <div className='flex flex-col'>
            <input
              {...field}
              type={type}
              value={field.value?? value}
              // // onChange={(e) => field.onChange(type === 'number' ? parseFloat(e.target.value) : e.target.value)}
              // onChange={(e) => field.onChange(type === 'number' ? parseFloat(e.target.value) : e.target.value)}
              id={name}
              placeholder={placeholder}
              required={required}
              className=" border border-slate-400 py-2 px-4 rounded-lg"
            />
            {error && (
              <small className="text-red-600 whitespace-nowrap text-ellipsis">
                {error.message}
              </small>
            )}
          </div>
        )}
      />
    </>
  );
};

export default EnaInput;
