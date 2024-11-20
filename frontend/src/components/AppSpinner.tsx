
import { HTMLAttributes } from "react";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  variant:"DARK"|"LIGHT"
  size?:number
}

function AppSpinner({variant,size,...props}:SpinnerProps) {
 
    return ( 
        <div {...props}>{variant=="DARK"?
          <img width={size} height={size} src="/spin-dark.gif"/>:
          variant=="LIGHT"?
          <img width={size} height={size} src="/spin-light.gif"/>:
          <></>
          }</div>
     );
}

export default AppSpinner;