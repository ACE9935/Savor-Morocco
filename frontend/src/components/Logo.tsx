import { configurations } from "../app-configurations";

function Logo({fontSize,color}:{fontSize:string,color?:string}) {
    return ( 
        <div style={{fontSize}} className="flex items-center gap-3"><img src="/logo.png" className="w-[3.2em]"/><div className={`font-extrabold w-min text-[1.7em] ${color || "text-primary-black"} leading-[0.9]`}>{configurations.appName}</div></div>
     );
}

export default Logo;