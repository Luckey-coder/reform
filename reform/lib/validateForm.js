 import {IsTxt,IsEmail,IsTextarea,IsPassWord,IsPhone} from "./validation";
 import { useState } from "react";
 const validateForm =(e)=>{
     e.preventDefault();
    const [_firstname,set_firstname_err]  = useState(false);
    const [_lastname,set_lastname_err]  = useState(false);
    const [_pass,set_pass_err]  = useState(false);
    const [_email,set_eml_err]  = useState(false);
    const [_phone,set_phone_err] = useState(false)
    const [_textArea,set_txt_area_err]  = useState(false);
    const dummy = {
        firstname:'john',
        lastname:'doe',
        password:'kdkdkdk_23',
        email:'abalik.jj45@gmail.com',
        phone:'09022345677',
        comment:'three  the space the change'
    }
     const {firstname,lastname,email,phone,password,comment} = dummy;
    if(IsTxt(firstname)){
        set_firstname_err(false);
    }
    else{
        let _f =  true
        set_firstname_err(true);
    }
    if(IsTxt(lastname)){
        set_lastname_err(false)
    }else{
        let _l = true
        set_lastname_err(true)

    }
    if(IsEmail(email)){
        set_eml_err(false)
    }else{
        set_eml_err(true)
    }
    if(IsPassWord(password)){
        set_pass_err(false)
    }else{
        set_pass_err(true)

    }
    if(IsPhone(phone)){
        set_phone_err(false)
    }else{
        set_phone_err(true)
    }
    if(IsTextarea(comment)){
        set_txt_area_err(false)
    }else{
        set_txt_area_err(true)
    }
 const _f  = firstname===undefined?true:IsTxt(firstname);
 const _l = lastname===undefined?true:IsTxt(lastname);
 const _e = email===undefined?true:IsEmail(email);
 const _p = password===undefined?true:IsPassWord(password);
 const _t = textAreaText===undefined?true:IsTextarea(comment);

 const result =()=>({
     firstname,
     lastname,
     email,
     phone,
     password,
     textAreaText,
 })
  _f&&_l&&_e&&_p&&_t&&result();
  return result;
 }
 export default validateForm