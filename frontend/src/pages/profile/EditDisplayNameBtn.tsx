import { useEffect, useState } from "react";
import { useUser } from "../../context/auth-context";
import { IconButton, Modal, Tooltip } from "@mui/material";
import { CameraAlt, CancelOutlined, Delete, Edit } from "@mui/icons-material";
import BasicInput from "../../components/form/BasicInput";
import BasicButton from "../../components/form/BasicButton";
import { useDisclosure } from "@chakra-ui/react";
import AppSpinner from "../../components/AppSpinner";
import { updateUsername } from "../../firebase/updateUserName";
import { useToast } from "../../context/ToastContext";

function EditDisplayName() {

    const {user,loading:isLoadingUser, updateUser}=useUser()
    const [newName, setNewName]=useState(user?.userName)
    const [loading, setLoading]=useState(false)
    const { showToast } = useToast();
    const { isOpen:isOpen2, onOpen:onOpen2, onClose:onClose2 } = useDisclosure();

    const handleSubmit = async ()=>{

      if(!user || loading || !newName?.length) return;
      try{
          setLoading(true);
          await updateUsername(user.id, newName);
          await updateUser()
          console.log("Display name edited successfully!");
          showToast({
              text: "Display name edited successfully!",
              severity: "success",
            });
          onClose2();
      }
      catch(e){
          console.log(e)
      }
      finally{
       setLoading(false)
      }
  
    }

    return ( 
    <>
    <Modal open={isOpen2} onClose={onClose2} disableAutoFocus>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className="bg-white rounded-md p-6 flex gap-6 flex-col sm:w-[25rem] w-[90%]"
        >
           
          <div className="flex flex-col gap-2">
          <div className="flex justify-end w-full"><IconButton onClick={onClose2} disableRipple><CancelOutlined fontSize="large"/></IconButton></div>
            <div className={`flex gap-2 flex-col`}>
            <h2 className="text-xl font-semibold pb-3">Edit display name</h2>
          </div>

            <div className="flex flex-col gap-3">
             <div className="flex justify-center">
                <div style={{backgroundImage:`url(${user?.photoUrl})`}} className="rounded-full w-[9rem] aspect-square mb-4 bg-cover bg-center"></div>
             </div>
             
             <form className="flex flex-col gap-2" onSubmit={(e)=>{e.preventDefault();handleSubmit()}}>
                <BasicInput maxLength={24} placeholder="Enter a name..." value={newName} onChange={(e)=>setNewName(e.currentTarget.value)} label="Display name*"/>
                <BasicButton type="submit" disabled={loading} onClick={handleSubmit}>{loading?<AppSpinner size={25} variant="DARK"/>:<Edit/>}Edit your display name</BasicButton>
             </form>
            </div>
            
            </div>
        </div>
       </Modal>
                     <Tooltip onClick={onOpen2} title={"Edit display name"} arrow>
                         <IconButton><Edit/>
                         </IconButton>
                       </Tooltip> 
                       
      </>);
}

export default EditDisplayName;