import { useDisclosure } from "@chakra-ui/react";
import { CheckCircle, CloseOutlined } from "@mui/icons-material";
import { Modal, Box, IconButton, Alert, Snackbar } from "@mui/material";
import { ModalStyles } from "../../pages/register/Regsiter";
import BasicInput from "./BasicInput";
import BasicButton from "./BasicButton";
import { PwdResetResponse } from "../../types/PwdResetResponse";
import { FormEvent, useEffect, useState } from "react";
import { resetPassword } from "../../firebase/auth";
import AppSpinner from "../AppSpinner";

function ResetPasswordTrigger() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { isOpen:isOpenToast, onOpen:onOpenToast, onClose:onCloseToast } = useDisclosure();
    const [response, setResponse] = useState<PwdResetResponse>({ errorMsg: null, status: null });
    const [email, setEmail] = useState("");
    const [isRegistering, setIsRegistering] = useState(false);
    
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isRegistering) {
            setIsRegistering(true);
            const serverResponse = await resetPassword(email)
                .finally(() => setIsRegistering(false));
            setResponse(serverResponse);
        }
    }

    useEffect(() => {
        if (response.status === "OK") {
            onClose();
            onOpenToast()
        }
    }, [response]);

    return (
        <>
            <Modal open={isOpen} onClose={onClose} disableAutoFocus>
                <Box sx={ModalStyles} className='p-6 sm:px-12 flex flex-col items-center gap-6 pb-14 rounded-md'>
                    {isRegistering && <AppSpinner size={50} variant="DARK" className="absolute left-0 top-0 m-6" />}
                    <div className='flex self-end relative'>
                        <IconButton onClick={onClose}>
                            <CloseOutlined sx={{ fontSize: 30 }} />
                        </IconButton>
                    </div>
                    <h1 className='text-center text-2xl'>Password Reset</h1>
                    <p className='text-center'>
                        Enter your email address below to receive the password reset link.
                    </p>
                    <form onSubmit={onSubmit} className="flex flex-col gap-4 items-center">
                        <BasicInput 
                            error={response.status === "ERROR"} 
                            style={{width:"18rem"}}
                            helperText={response.errorMsg} 
                            value={email} 
                            type="email"
                            onChange={(e) => setEmail(e.target.value)} 
                            label="Enter your email address" 
                        />
                        <BasicButton type='submit'>Send Reset Link</BasicButton>
                    </form>
                </Box>
            </Modal>
            <Snackbar open={isOpenToast} autoHideDuration={5000} onClose={onCloseToast}>
             <Alert
              onClose={onCloseToast}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
              >
              A password reset link has been sent to your email
            </Alert>
            </Snackbar>
            <span onClick={onOpen} className="text-sm font-bold underline text-blue-500 cursor-pointer">Forgot password?</span>
        </>
    );
}

export default ResetPasswordTrigger;