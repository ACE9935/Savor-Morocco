
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    url:string
    children: ReactNode;
}

function ProviderLoginButton({url,children,...props}:ButtonProps) {
    return ( 
        <button {...props}
            className="p-3 w-full bg-white justify-center shadow-md flex items-center gap-3 border-md font-semibold text-lg text-slate-600 border-2 outline outline-primary-color outline-0 hover:outline-2 rounded-md">
            <img alt="provider logo" src={url} width={30}height={30}/>
            <p>{children}</p>
        </button>
     );
}

export default ProviderLoginButton