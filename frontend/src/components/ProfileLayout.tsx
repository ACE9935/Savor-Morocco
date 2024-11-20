import { Outlet, Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import { Slide, useScrollTrigger } from "@mui/material";
import { useUser } from "../context/auth-context";
import ProfileTab from "../pages/profile/ProfileTab";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import AppNavBar from "./AppNavBar";
import { configurations } from "../app-configurations";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<unknown>;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children ?? <div />}
    </Slide>
  );
}

const ProfileLayout = ({...props}) => {

  const {user,loading}=useUser()
  const navigate=useNavigate()

  useEffect(()=>{

   if(!loading && !user) navigate("/login")
    
  },[loading, user])

  return (
    <>
    <Helmet>
     <title>Profile</title>
     <meta name="description" content={configurations.appDescription} />
    </Helmet>
    <HideOnScroll {...props}>
      <AppNavBar/>
      </HideOnScroll>
      <main className="min-h-screen bg-orange-100/60 pt-32">
      <div className="px-6 pb-6">
            <div className="flex gap-10 flex-col md:flex-row">
               <ProfileTab/>
               <div className="min-w-0 w-full">
               <h1 className="text-4xl font-bold text-black/80 pb-4">Profile</h1>

               <div className="w-full">
               <Outlet />
               </div>
               </div>
            </div>
        </div>
      </main>
    </>
  )
};

export default ProfileLayout;