import React from 'react';
import { Controller, Form } from 'react-hook-form';

type TSelectProps = {
  name: string;
  required?: boolean;
  type: string;
  value?: string;
  placeholder?: string;
  className?: string;
  options?: { value: string; label: string }[];
  control: any;
  error?: any;
};

const EnaSelect = ({
  type,
  name,
  placeholder,
  required,
  value,
  className,
  options,
  control,
  error,
}: TSelectProps) => {
  return (
    <Controller
      name={name}
      render={(field: { readonly }) => (
        <label className="form-control  ">
          <div className="label"></div>
          <select className="w-full bg-[#f8f8f8] text-gray-900 border border-slate-300 mt-2  rounded-lg focus:outline-none focus:shadow-outline px-4 h-12 cursor-pointer">
            <option disabled selected className="px-4">
              Choose a currency
            </option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>AUD</option>
            <option>BDT</option>
          </select>
        </label>
      )}
    />
  );
};

export default EnaSelect;
