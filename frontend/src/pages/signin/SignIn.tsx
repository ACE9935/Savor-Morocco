import { FormEvent, useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import Logo from "../../components/Logo";
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from "../../firebase/auth";
import BasicInput from "../../components/form/BasicInput";
import { LoginResponse } from "../../types/LoginResponse";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ProviderLoginButton from "../../components/form/ProviderLoginButton";
import BasicButton from "../../components/form/BasicButton";
import AppSpinner from "../../components/AppSpinner";
import ResetPasswordTrigger from "../../components/form/ResetPasswordTrigger";
import { useDisclosure } from "@chakra-ui/react";
import { configurations } from "../../app-configurations";
import { Helmet } from "react-helmet";

function SignIn() {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [response, setResponse] = useState<LoginResponse>({ errorMsg: null, status: null });
    const navigate = useNavigate();
    const [loading,setLoading]=useState(false)
    const [searchParams, setSearchParams] = useSearchParams();
    const { isOpen:isOpenToast, onOpen:onOpenToast, onClose:onCloseToast } = useDisclosure();

    const resetPassword = searchParams.get('resetPassword');

    const onSubmit = async (e: FormEvent) => {
      e.preventDefault();
      
      if (!loading) {
          setLoading(true);
          const serverResponse = await doSignInWithEmailAndPassword(email, password);
          
          setLoading(false);
          setResponse(serverResponse);
      }
  }

  const onSubmitWithGoogle = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!loading) {
        setLoading(true);
        const serverResponse = await doSignInWithGoogle();
        
        setLoading(false);
        setResponse(({errorMsg:serverResponse.errors as string,status:serverResponse.status}));
    }
}

  useEffect(() => {
    if (resetPassword === "true") onOpenToast()
}, []);

  useEffect(() => {
    
    if (response.status === "OK"){
      navigate("/");
    }
  }, [response]);

    return ( 
        <main className="min-h-screen bg-primary-color flex justify-center md:justify-normal p-4 md:p-0">
            <Helmet>
            <title>Savor Morocco | Signup</title>
            <meta name="description" content={configurations.appDescription} />
         </Helmet>
           <Snackbar open={isOpenToast} autoHideDuration={5000} onClose={onCloseToast}>
             <Alert
              onClose={onCloseToast}
              severity="success"
              variant="filled"
              sx={{ width: '100%' }}
              >
              Your password has been reset
            </Alert>
            </Snackbar>
          <div className="bg-white p-8 flex flex-col gap-6 pt-12 md:rounded-none rounded-xl">
            <div className="pb-3"><Logo fontSize="1.4rem"/></div>
            <div className="flex flex-col gap-3">
            <h1 className="text-2xl font-bold text-primary-color">Log in to your account</h1>
            <h2 className="font-bold">Don't have an account? <Link to="/register" className="underline text-blue-500">Sign Up</Link></h2>
            </div>
            <div className="flex flex-col w-[21rem] gap-5">
                <ProviderLoginButton onClick={onSubmitWithGoogle} url="/google.png">Google</ProviderLoginButton>
                <div className="flex items-center gap-3"><div className="bg-slate-700 h-[0.09rem] w-full"></div>
                <p className="min-w-max flex-grow">Or with email & password</p>
                <div className="bg-slate-700 h-[0.09rem] w-full"></div></div>
                <form onSubmit={onSubmit} className="flex flex-col gap-3">
                {response.status === "ERROR" && <Alert severity="error">{response.errorMsg}</Alert>}
                    <BasicInput
                    label="Email Address*"
                    type="email"
                    className="border-2 outline-none rounded-md p-1"
                    id="email-login-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <BasicInput
                    toggleVisibility
                    label="Password*"
                    type="password"
                    className="border-2 outline-none rounded-md p-1"
                    id="password-login-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    <div className="flex justify-end"><ResetPasswordTrigger /></div>
                    <BasicButton style={{marginTop:"1rem"}} type="submit">{loading && <AppSpinner size={30} variant="DARK"/>}Login</BasicButton>
                </form>
            </div>
          </div>
          <div style={{backgroundImage:"url('/bg-login.jpg')"}} className="w-full grow bg-blend-overlay hidden bg-cover bg-orange-900/50 bg-center md:block">

          </div>
        </main>
     );
}

export default SignIn;