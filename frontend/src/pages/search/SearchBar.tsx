import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar({restoreNavBar}:{restoreNavBar:()=>void}) {
    const [term, setTerm] = useState("");
    const navigate = useNavigate();

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter" && term.trim()) {
            navigate(`/search/${term.trim()}`);
            restoreNavBar()
        }
    };

    return (
        <div className="flex items-center p-1 rounded-full shadow-sm bg-slate-100 w-full md:w-[24rem]">
            <input
                type="text"
                placeholder="Search for recipes..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-grow p-2 pl-3 font-semibold text-gray-700 focus:outline-none rounded-full"
            />
            <IconButton
                onClick={() => term.trim() && navigate(`/search/${term.trim()}`)}
            >
                <Search/>
            </IconButton>
        </div>
    );
}

export default SearchBar;
