import { Controller } from 'react-hook-form';

type TTextAreaProps = {
  type: string;
  name: string;
  placeholder: string;
  label?: string;
  value?: string;
};

const EnaTextField = ({
  type,
  name,
  placeholder,
  label,
  value,
}: TTextAreaProps) => {
  return (
    <>
      <Controller
        name={name}
        render={({ field }) => (
          <textarea
            {...field}
            value={value}
            id={name}
            placeholder={placeholder}
            className="border border-slate-400 py-4 px-4  w-full h-48"
          />
        )}
      />
    </>
  );
};

export default EnaTextField;
