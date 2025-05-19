
import {type ChangeEvent, type InputHTMLAttributes,} from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string | number ;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

// Use the generic type T in the InputProps interface and the component function
const Input =({ value, handleChange, ...props}: InputProps) => {
    return (
        <div className="relative max-w-sm space-y-3">
            <input
                type="text"
                className="w-full py-0.5 pl-6 px-2 bg-white rounded-sm border border-gray-200 focus:border-blue-200"
                value={value}
                onChange={handleChange}
                {...props}
            />
        </div>
    );
};

export default Input;
