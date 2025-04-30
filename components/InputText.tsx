import { ColWrapper } from "./Wrap/ColWrapper";


export const InputText = ({ title, placeholder }: { title: string, placeholder:string }) => {
    return (
      <ColWrapper className='w-[60%]'>
        <div className="text-black">{title}</div>
        <input 
            className="text-xl border-b-2 border-blue-500 text-black"            
            type="text" 
            placeholder={placeholder}
        />
      </ColWrapper>
    )
  };
  