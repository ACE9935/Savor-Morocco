import styled from '@emotion/styled';
import resolveConfig from 'tailwindcss/resolveConfig';
import Config from '../../../tailwind.config';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const tailwindConfig = resolveConfig(Config);
const colors = tailwindConfig.theme?.colors as unknown as { [key: string]: string };
const primaryBlue = colors["primary-color"] || "black";

const StyledInput = styled("input")`
  width: 100%;
  padding-right: 2.5rem; /* Extra padding to prevent text overlap with IconButton */
  :focus {
    outline: 2px solid ${primaryBlue};
  }
`;

interface BasicInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: boolean;
  toggleVisibility?: boolean;
  helperText?: string | null;
}

function BasicInput({ label, error, helperText, toggleVisibility, ...props }: BasicInputProps) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const inputType = props.type === "password" && passwordVisible ? "text" : props.type;

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={props.id} className="text-md font-bold text-slate-600">{label}</label>
      <div className="relative flex items-center">
        <StyledInput
          {...props}
          type={inputType}
          className={`w-full rounded-md border-2 py-1 px-2 ${error && "bg-red-100 outline-2 border-red-400"}`}
        />
        {toggleVisibility && props.type === "password" && (
          <IconButton
            disableRipple
            onClick={() => setPasswordVisible((prev) => !prev)}
            edge="end"
            style={{
              position: 'absolute',
              right: '1rem',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            {passwordVisible ? <Visibility /> : <VisibilityOff />}
          </IconButton>
        )}
      </div>
      {helperText && <p className="text-sm text-red-500">{helperText}</p>}
    </div>
  );
}

export default BasicInput;

