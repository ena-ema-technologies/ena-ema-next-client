import { Controller } from "react-hook-form";

 
const EnaInput = ({type, name, label})=> { 
  return (
    <>
    {label?label: null}
    <Controller 
    name={name}
    render={({field}) => <input {...field} type={type} id={name} className="input w-full max-w-xs border border-slate-600"/>  }
    
    />
    </>
  );
};

export default EnaInput;
