import { AddComment, Favorite, MenuBook, ShoppingBasket, SoupKitchen } from "@mui/icons-material";
import styled from '@emotion/styled';
import resolveConfig from 'tailwindcss/resolveConfig';
import Config from '../../../tailwind.config';
const tailwindConfig = resolveConfig(Config);
const colors = tailwindConfig.theme.colors;

const StyledInfoLine= styled("div")`
  display:flex;
  gap:0.8rem;
  p{
  font-size:1.2rem;
  font-weight:500;
  color:white;
  span{
  font-weight:bold;
  color: ${colors.rose[950]};
  }
  }
  svg{
  color:${colors.amber[400]};
  }
`;


function RegisterInfoTab({crop}:{crop:boolean}) {

    return ( 
        <div style={{backgroundImage:"url('/register-pattern.png')"}} className={`p-8 h-fit py-10 flex flex-col gap-6 ${crop?"rounded-l-xl":"rounded-xl"}`}>

         <h1 className="text-white font-bold text-3xl"><span className="underline decoration-amber-300">Get free</span> access to exclusive services and content</h1>
         <div className="flex flex-col gap-4">
            <StyledInfoLine><Favorite/><p>Save your <span>favorite recipes</span></p></StyledInfoLine>
            <StyledInfoLine><ShoppingBasket/><p>Make your <span>shopping list</span></p></StyledInfoLine>
            <StyledInfoLine><AddComment/><p><span>Comment</span> and get our help</p></StyledInfoLine>
            <StyledInfoLine><MenuBook/><p>Create <span>personalized</span> recipe books</p></StyledInfoLine>
         </div>
        </div>
     );
}

export default RegisterInfoTab;