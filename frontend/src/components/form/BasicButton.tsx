import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

function BasicButton({children,...props}:ButtonProps) {
    return ( 
        <button {...props} className="flex items-center justify-center gap-3 px-4 py-2 hover:bg-primary-color-dark transition-all hover:outline bg-primary-color font-bold text-white rounded-md">{children}</button>
     );
}

export default BasicButton