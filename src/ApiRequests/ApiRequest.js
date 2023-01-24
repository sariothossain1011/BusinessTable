import axios from 'axios'
import store from "../Reducer/Store/Store";
import { HideLoader, SetLoader } from "../Reducer/State/SettingSlice";
import { SetAllProduct, SetTotal } from '../Reducer/State/ProductSlice';
import { ErrorToast } from '../Helpers/FormHelp';

export const GetProductList = async(pageNo,perPage,searchKeyword)=>{

    let URL = `https://business-tabile-server.vercel.app/api/v1/ProductList/${pageNo}/${perPage}/${searchKeyword}`;
    
    store.dispatch(SetLoader())
    try {
        const Result = await axios.get(URL);
        // alert(JSON.stringify(Result))
        // console.log(Result)
        store.dispatch(HideLoader())
        if(Result.status === 200 && Result.data['status'] === "success"){
            if(Result.data['data'][0]['Rows'].length > 0){
                store.dispatch(SetAllProduct(Result.data['data'][0]['Rows']));
                store.dispatch(SetTotal(Result.data['data'][0]['Total'][0]['count']))
            }else{
                store.dispatch(SetAllProduct([]))
                store.dispatch(SetTotal([0]))
                ErrorToast("Not data found");
            }
        }else{
            ErrorToast("Sometime was wrrong");
        }
    } catch (error) {
        ErrorToast("Sometime was wrrong");
        store.dispatch(HideLoader())
    }
}