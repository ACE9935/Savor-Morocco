import {DoneOutline, ErrorOutline} from '@mui/icons-material';

function AppToast({title,type}:{title:string,type?:"SUCCESS"|"ERROR"|"INFO"}) {
    const Icon=type === 'SUCCESS' ? <DoneOutline/> :
                type === 'ERROR' ? <ErrorOutline/> :
                type === 'INFO' ? null:null

    return ( 
        <div className="p-4 rounded-xl bg-[#252729] text-white flex gap-3">
            {Icon}
            <p>{title}</p></div>
     );
}

export default AppToast;