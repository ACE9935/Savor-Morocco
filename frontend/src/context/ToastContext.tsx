import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert, AlertColor } from "@mui/material";

interface ToastOptions {
  text: string;
  severity?: AlertColor; // success, error, warning, info
  icon?: ReactNode; // Custom icon for the toast
}

interface ToastContextProps {
  showToast: (options: ToastOptions) => void;
  closeToast: () => void;
}

const ToastContext = createContext<ToastContextProps | undefined>(undefined);

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [toastOptions, setToastOptions] = useState<ToastOptions>({
    text: "",
    severity: "success", // Default severity
    icon: null,
  });

  const showToast = (options: ToastOptions) => {
    setToastOptions(options);
    setIsOpen(true);
  };

  const closeToast = () => {
    setIsOpen(false);
  };

  return (
    <ToastContext.Provider value={{ showToast, closeToast }}>
      {children}
      <Snackbar open={isOpen} autoHideDuration={5000} onClose={closeToast}>
        <Alert
          onClose={closeToast}
          severity={toastOptions.severity}
          variant="filled"
          icon={toastOptions.icon}
          sx={{ width: "100%" }}
        >
          {toastOptions.text}
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export const useToast = (): ToastContextProps => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};
