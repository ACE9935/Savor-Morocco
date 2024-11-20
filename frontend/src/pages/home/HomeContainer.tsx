import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useToast } from "../../context/ToastContext";
import { useUser } from "../../context/auth-context";
import CatergoriesSection from "./CategoriesSection";
import { Helmet } from "react-helmet";
import { configurations } from "../../app-configurations";

function HomeContainer() {

    const [searchParams] = useSearchParams();
    const {user}=useUser()
    const {showToast}=useToast()

    useEffect(()=>{

        if(searchParams.get('verified-user')&&user?.emailVerified) showToast({
            text: "User verified successfully!",
            severity: "success",
          });

    },[searchParams,user])

    return ( 
        <div className="mt-[-4rem]">
              <Helmet>
               <title>Savor Morocco | Home</title>
               <meta name="description" content={configurations.appDescription} />
             </Helmet>
          <div className="px-6 py-36 bg-gradient-to-b from-primary-color from-40% to-orange-100/60 bg-cover bg-center grid place-items-center">
            <h1 className="text-center text-6xl font-bold text-green-400">Explore.<span className="text-white"> Enjoy.</span></h1>
          </div>
          <CatergoriesSection/>
        </div>
     );
}

export default HomeContainer;