interface InputProps {
    name: string;
    type: string;
    placeholder?: string;
    value?: string;
  };

export default function Input({name, type, placeholder, value} : InputProps) {
    return (
        <>
            <input className="w-full p-2 border-gray-200 border" name={name}
            type={type} placeholder={placeholder} value={value}/>
        </>
    );
}