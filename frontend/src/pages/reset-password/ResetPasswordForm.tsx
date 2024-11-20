import BasicInput from "../../components/form/BasicInput";
import BasicButton from "../../components/form/BasicButton";
import { FormEvent, useEffect, useState } from "react";
import { updatePassword } from "../../firebase/auth";
import { Alert } from "@mui/material";
import { PwdResetFormResponse } from "../../types/PwdResetFormResponse";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import AppSpinner from "../../components/AppSpinner";
import Logo from "../../components/Logo";
import { Helmet } from "react-helmet";
import { configurations } from "../../app-configurations";

function ResetPasswordForm() {
    const [data, setData] = useState({ pwd: "", rePwd: "" });
    const [response, setResponse] = useState<PwdResetFormResponse>({ errors: null, status: null });
    const [loading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // Retrieve specific query parameter
    const token = searchParams.get('token');
    const id = searchParams.get('id');

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault();
        
        if (!loading) {
            setIsLoading(true);
            const serverResponse = await updatePassword(data.pwd, data.rePwd, token!, id!);
            
            setIsLoading(false);
            setResponse(serverResponse);
        }
    }
    
    useEffect(() => {
        if (response.status === "OK") navigate("/login?resetPassword=true");
    }, [response]);

    return (
        <main className="min-h-screen bg-primary-color flex justify-center md:justify-normal p-4 md:p-0">
            <Helmet>
            <title>Savor Morocco | Reset Password</title>
            <meta name="description" content={configurations.appDescription} />
         </Helmet>
        <div className="bg-white p-8 flex flex-col gap-6 pt-12 md:rounded-none rounded-xl">
          <div className="pb-3"><Logo fontSize="1.4rem"/></div>
          <div className="flex flex-col gap-3">
          <h1 className="text-2xl font-bold text-primary-color">Reset your account's password</h1>
          <h2 className="font-bold">Don't have an account? <Link to="/register" className="underline text-blue-500">Sign Up</Link></h2>
          </div>
          <div className="flex flex-col w-[21rem] gap-5">

              <form onSubmit={onSubmit} className="flex flex-col gap-4">
                {response.status === "ERROR" && <Alert severity="error">An error occurred</Alert>}
                <BasicInput
                    toggleVisibility
                    value={data.pwd} 
                    error={!!response.errors?.pwd.length}
                    helperText={response.errors?.pwd}
                    onChange={(e) => setData(prev => ({ ...prev, pwd: e.target.value }))} 
                    label="New password" type="password" />
                
                <BasicInput
                    toggleVisibility
                    value={data.rePwd} 
                    error={!!response.errors?.rePwd.length}
                    helperText={response.errors?.rePwd}
                    onChange={(e) => setData(prev => ({ ...prev, rePwd: e.target.value }))} 
                    label="Confirm Password" type="password" />
                <BasicButton>{loading && <AppSpinner size={30} variant="DARK"/>}Reset password</BasicButton>
            </form>
          </div>
        </div>
        <div style={{backgroundImage:"url('/bg-reset-pwd.jpg')"}} className="w-full grow bg-blend-overlay hidden bg-cover bg-orange-900/50 bg-center md:block">

          </div>
      </main>
    );
}

export default ResetPasswordForm;