import { Controller } from 'react-hook-form';

type TInputProps = {
  type: string;
  name: string;
  label?: string
  placeholder?: string;
}

const EnaInput = ({ type, name, label, placeholder }: TInputProps) => {
  return (
    <>
      {label ? label : null}
      <Controller
        name={name}
        render={({ field }) => (
          <input
            {...field}
            type={type}
            id={name}
            placeholder={name}
            className="w-full bg-[#f8f8f8] border border-slate-300 text-gray-900 mt-2 p-4 rounded-lg focus:outline-none focus:shadow-outline"
          />
        )}
      />
    </>
  );
};

export default EnaInput;
