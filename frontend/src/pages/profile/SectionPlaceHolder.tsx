import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

function SectionPlaceHolder({Icon,title,subTitle,description}:{Icon:OverridableComponent<SvgIconTypeMap<{}, "svg">>,title:string,subTitle:string,description:string}) {
    return ( 
        <div className="flex flex-col gap-3 mb-4">
        <h2 className="text-xl font-semibold text-slate-600">{title}</h2>
        <div className="w-full grid place-content-center max-w-[40rem] aspect-[2.5] min-h-[12rem] rounded-md border-2 border-gray-300 bg-gray-200 text-gray-600">
         <div className="flex flex-col items-center gap-4">
          <Icon className="!text-5xl"/>
          <div className="flex flex-col items-center">
           <h2 className="pb-1 text-3xl font-bold">{subTitle}</h2>
           <h4 className="font-semibold">{description}</h4>
          </div>
         </div>
        </div>
        </div>
     );
}

export default SectionPlaceHolder;