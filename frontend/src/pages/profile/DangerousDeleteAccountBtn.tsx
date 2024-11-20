import { Delete } from "@mui/icons-material";
import BasicButton from "../../components/form/BasicButton";
import { Modal } from "@mui/material";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import AppSpinner from "../../components/AppSpinner";
import { useToast } from "../../context/ToastContext";
import { deleteUserAccount } from "../../firebase/deleteUserAccount";
import { useUser } from "../../context/auth-context";

function DangerousDeleteAccountBtn() {

    const [loading, setLoading]=useState(false)
    const {user, updateUser}=useUser()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const {showToast}=useToast()

    const handleDelete = async ()=>{
        if(!user) return;
        try{
         setLoading(true)
         await deleteUserAccount(user.id)
         await updateUser()
         showToast({
            text: "Account deleted successfully!",
            severity: "success",
            icon:<Delete/>
          });
         onClose()
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
        <Modal open={isOpen} onClose={onClose} disableAutoFocus>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
              className="bg-white rounded-md p-6 flex gap-10 flex-col sm:w-[25rem] w-[90%]"
            >
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-semibold">Delete account</h2>
                <p className="text-md text-slate-600">Permanently delete your account?</p>
              </div>
              <div className="flex gap-3 justify-end">
                <button
                  className="font-bold text-black rounded-lg hover:bg-gray-200 transition-all p-3"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <BasicButton disabled={loading} onClick={handleDelete}>
                  {loading && <AppSpinner variant="DARK" size={26} />}
                  Delete account
                </BasicButton>
              </div>
            </div>
          </Modal>
          <button onClick={onOpen} className="flex justify-center gap-2 rounded-full p-2 px-4 font-bold bg-red-500 text-white hover:bg-red-600"> <Delete/> Delete account</button>
        </>

     );
}

export default DangerousDeleteAccountBtn;