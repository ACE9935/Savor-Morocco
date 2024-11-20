import { FormEvent, useEffect, useState } from "react";
import { Alert, Box, Checkbox, FormControl, FormControlLabel, IconButton, Modal } from "@mui/material";
import Logo from "../../components/Logo";
import { doCreateUserWithEmailAndPassword,doSignInWithGoogle } from "../../firebase/auth";
import BasicInput from "../../components/form/BasicInput";
import { LoginResponse } from "../../types/LoginResponse";
import { Link, useNavigate } from "react-router-dom";
import { RawUser } from "../../types/RawUser";
import { SignUpResponse } from "../../types/SignUpResponse";
import { useDisclosure } from "@chakra-ui/react";
import { CloseOutlined } from "@mui/icons-material";
import { auth } from "../../firebase/firebase";
import ProviderLoginButton from "../../components/form/ProviderLoginButton";
import BasicButton from "../../components/form/BasicButton";
import AppSpinner from "../../components/AppSpinner";
import RegisterInfoTab from "./RegisterInfoTab";
import { SignUpErrors } from "../../types/SignUpErrors";
import { Helmet } from "react-helmet";
import { configurations } from "../../app-configurations";

export const ModalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30rem",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };
  
  const OKStatusResponsesComponents = {
    "google": (
      <Alert severity="success">
        Your registration was successful! You can now access your account.
      </Alert>
    ),
    "credentials": (
      <Alert severity="info">
        To complete your registration, please open the link sent to your email address.
      </Alert>
    )
  }

function Register() {

    const [initialUser, setInitialUser] = useState<RawUser>({ userName: "", email: "", pwd: "", rePwd: "", acceptPlcs: false });
    const [isRegistering, setIsRegistering] = useState(false);
    const [response, setResponse] = useState<SignUpResponse>({ errors: null, status: null });
    const errors: SignUpErrors | null = response.errors;
    const { isOpen, onOpen, onClose } = useDisclosure();
    const navigate = useNavigate();

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
    
        if (!isRegistering) {
          setIsRegistering(true);
          const serverResponse = await doCreateUserWithEmailAndPassword({ ...initialUser });
    
          setIsRegistering(false);
          setResponse(serverResponse);
        }
      }
    
      useEffect(() => {
        if (response.status === "OK" && response.method === "credentials") onOpen();
      }, [response]);

    return ( 
        <main style={{backgroundImage:"url('/pattern.jpg')"}} className="min-h-screen bg-cover bg-blend-multiply bg-orange-500/50 flex justify-center p-4">
              <Helmet>
               <title>Savor Morocco | Register</title>
               <meta name="description" content={configurations.appDescription} />
             </Helmet>
            <>
      <Modal open={isOpen} onClose={onClose} disableAutoFocus>
        <Box sx={ModalStyles} className='!p-6 !font-primary-font sm:w-[30rem] w-[90%] sm:px-14 !flex !flex-col !items-center !gap-6 !pb-14 !rounded-md'>
          <div className='flex self-end relative'><IconButton onClick={onClose}><CloseOutlined sx={{ fontSize: 30 }} /></IconButton></div>
          <h1 className='text-center text-2xl'>Check your inbox.</h1>
          <p className='text-center'>
            Click the link we sent to {auth.currentUser?.email} to complete your account setup.
          </p>
          <button onClick={onClose} className="text-white bg-primary-color py-2 px-6 font-bold rounded-full">OK</button>
        </Box>
      </Modal>
      <div className="w-full flex flex-col gap-8 max-w-[1200px]">
      <div className="py-6 justify-center flex"><Logo fontSize="1.4rem"/></div>
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-around gap-4">
      <div className="max-w-[34rem] flex flex-col gap-4">
         <div style={{backgroundImage:"url('/tagine.jpg')"}} className="bg-cover hidden md:block bg-center rounded-xl text-center">
         <div className="bg-gradient-to-b from-transparent to-black to-80% rounded-xl p-8 pt-[12rem] flex flex-col gap-3 items-center">
         <h2 className="font-bold text-3xl text-white">Cook like a <span className="bg-amber-400 text-black px-1">chef</span></h2>
           <p className="text-slate-400 font-semibold">Discover authentic Moroccan flavors with Savor Morocco—your go-to for delicious recipes, cooking tips, and exclusive culinary content</p>
           <button onClick={()=>navigate("/")} className="rounded-lg font-bold text-white p-3 bg-green-600 px-6 hover:bg-green-800 transition-all">Recipes</button>
         </div>
         </div>
         <RegisterInfoTab/>
        </div>
      <div className="bg-white p-9 px-11 rounded-xl w-full max-w-[30rem] flex flex-col gap-6">
        <div className="flex flex-col gap-5">
        <div className="text-4xl text-center font-semibold">Sign up</div>
        <div className="text-center text-xl">Discover our app's features for free</div>
        </div>
        <ProviderLoginButton onClick={async () => {
            const response = await doSignInWithGoogle();
            setResponse(response);
            navigate("/");
          }} url="/google.png">Sign up with Google</ProviderLoginButton>
        <form onSubmit={onSubmit} className="flex flex-col gap-4 pt-5">
          {response.status === "ERROR" ? <Alert severity="error">An error occurred</Alert> : response.status === "OK" ?
            OKStatusResponsesComponents[response.method!] : <></>}

          <BasicInput
            helperText={errors?.error.userName || null}
            error={!!errors?.error.userName}
            value={initialUser.userName}
            onChange={(e) => setInitialUser(prev => ({ ...prev, userName: e.target.value }))}
            label="Name*"
            type="name"
          />

          <BasicInput
            helperText={errors?.error.email || null}
            error={!!errors?.error.email}
            value={initialUser.email}
            onChange={(e) => setInitialUser(prev => ({ ...prev, email: e.target.value }))}
            label="Email*"
            type="email"
          />
          <BasicInput
            toggleVisibility
            helperText={errors?.error.pwd || null}
            error={!!errors?.error.pwd}
            value={initialUser.pwd}
            onChange={(e) => setInitialUser(prev => ({ ...prev, pwd: e.target.value }))}
            label="Password*"
            type="password"
          />
          <BasicInput
            toggleVisibility
            helperText={errors?.error.rePwd || null}
            error={!!errors?.error.rePwd}
            value={initialUser.rePwd}
            onChange={(e) => setInitialUser(prev => ({ ...prev, rePwd: e.target.value }))}
            label="Confirm Password*"
            type="password"
          />
          <FormControl error={!!errors?.error.acceptPlcs}>
            {errors?.error.acceptPlcs && <span className="text-[0.75rem] text-[#d32f2f]">{errors?.error.acceptPlcs}</span>}
            <FormControlLabel sx={{
              alignItems: "start",
              gap: "3px"
            }}
              control={<Checkbox
                checked={initialUser.acceptPlcs} onChange={() => setInitialUser(prev => ({ ...prev, acceptPlcs: !prev.acceptPlcs }))} />} label={<p>I agree with the <a target="_blank" href="/terms-of-use" className="text-primary-blue underline">privacy policy and terms</a> of this website</p>} />
          </FormControl>
          <BasicButton type="submit" style={{height:"3.4rem"}}>{isRegistering && <AppSpinner size={40} variant="DARK"/>}Create your account</BasicButton>
        </form>
        <div className="flex flex-col">
        
          <span className="text-center mt-2">Already have an account? <Link to={"/login"} className="underline font-bold text-blue-500">Log In</Link></span>
        </div>
        </div>
        </div>
      </div>
    </>
        </main>
     );
}

export default Register;