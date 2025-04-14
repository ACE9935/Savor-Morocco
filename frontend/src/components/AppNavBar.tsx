
import { forwardRef, useState } from "react";
import ProfileLink from "./ProfileLink";
import Logo from "./Logo";
import SearchBar from "../pages/search/SearchBar";
import { IconButton, useMediaQuery } from "@mui/material";
import { Search } from "@mui/icons-material";

// Wrap AppNavBar with React.forwardRef
const AppNavBar = forwardRef<HTMLDivElement>((props, ref) => {

    const [openMobileSearBar, setOpenMobileSearchBar]=useState(false)
    const matches = useMediaQuery('(min-width:768px)');

    return (
        <nav
            ref={ref}
            className="p-5 flex justify-between items-center bg-primary-color rounded-b-3xl fixed w-full z-10"
        >

            <>{!matches&&openMobileSearBar?
            <SearchBar restoreNavBar={()=>setOpenMobileSearchBar(false)}/>
            :
            
            <>
                <Logo fontSize="1rem" color="text-white" />
            
            {matches&&<SearchBar restoreNavBar={()=>setOpenMobileSearchBar(false)}/>}
            <div className="flex gap-3 items-center">
            {!matches&&!openMobileSearBar&&<IconButton onClick={()=>setOpenMobileSearchBar(true)}><Search/></IconButton>}
            <ProfileLink />
            </div></>}
            </>
        </nav>
    );
});

// Add a displayName for debugging purposes (optional)
AppNavBar.displayName = "AppNavBar";

export default AppNavBar;
