import React, { createContext, useContext, useState, ReactNode } from "react";
import { Snackbar, Alert, AlertColor, Modal, IconButton } from "@mui/material";
import { useDisclosure } from "@chakra-ui/react";
import RegisterInfoTab from "../pages/register/RegisterInfoTab";
import Logo from "./Logo";
import ProviderLoginButton from "./form/ProviderLoginButton";
import { useNavigate } from "react-router-dom";
import { doSignInWithGoogle } from "../firebase/auth";
import { CancelOutlined } from "@mui/icons-material";

interface ModalProps {
  showSigninModal: () => void;
}

const SigninModalContext = createContext<ModalProps | undefined>(undefined);

export const SigninModalProvider = ({ children }: { children: ReactNode }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate=useNavigate()

  const showSigninModal = ()=>onOpen()

  return (
    <SigninModalContext.Provider value={{ showSigninModal }}>
      {children}
      <Modal open={isOpen} onClose={onClose} disableAutoFocus>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              className="bg-white rounded-xl flex gap-10 flex-col md:w-[50rem] w-[90%]"
            >
              <div className="flex sm:flex-row flex-col">
                <div className="shrink md:block hidden"><RegisterInfoTab crop/></div>
                <div className="w-full px-6 py-2 pb-4">
                <div className="w-full flex justify-end"><IconButton onClick={onClose} disableRipple><CancelOutlined fontSize="large"/></IconButton></div>
                    <div className="flex flex-col gap-6">
                    <div className="flex flex-col items-center gap-2">
                    <div style={{backgroundImage:`url("/logo.png")`}} className="w-[4rem] bg-cover bg-center aspect-square rounded-full"></div>
                    <h1 className="text-2xl font-bold text-primary-color text-center">Register or Log in</h1>
                    <h2 className="text-sm font-semibold text-gray-600 text-center">Log in to Savor Morocco and elevate your Moroccan cooking journey!</h2>
                    </div>
                    <div className="flex flex-col gap-2">
                    <ProviderLoginButton onClick={async () => {
                     await doSignInWithGoogle();
                     navigate("/");
                     onClose()
                     }} url="/google.png">Continue with Google</ProviderLoginButton>
                     <ProviderLoginButton onClick={async () => {
                     navigate("/register");
                     onClose()
                     }} url="/email.png">Continue with Email</ProviderLoginButton>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </Modal>
    </SigninModalContext.Provider>
  );
};

export const useSigninModal = (): ModalProps => {
  const context = useContext(SigninModalContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};