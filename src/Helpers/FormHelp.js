import {toast} from 'react-toastify'

class FormHelper{
    ErrorToast(msg){
        toast.error(msg)
    }
    SuccessToast(msg){
        toast.success(msg)
    }
}

export const {ErrorToast,SuccessToast}=new FormHelper();