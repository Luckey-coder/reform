import React , {useState} from "react";
import {IsTxt,IsEmail,IsTextarea,IsPassWord} from "./lib/validation"
 const Data ={}
  const  Input=(props)=>{
   const [firstname,setFirstname] = useState('')
  const [lastname,setLastname] = useState('')
  const [password,setPass] = useState('')
  const [email,setEmail] = useState('')
  const [date,setDate] = useState('') 
  //error trigger
  const [_firstname,set_firstname_err]  = useState(false);
  const [_lastname,set_lastname_err]  = useState(false);
  const [_pass,set_pass_err]  = useState(false);
  const [_email,set_eml_err]  = useState(false);
  const [_phone,set_phone_err] = useState(false)
     return(
    <div className='__input_div'>
    <span  className='__label'>{props.label}</span>
     <input
     onBlur={(e)=>{
       e.preventDefault()
       switch(e.target.name){
        case 'firstname':
          if(IsTxt(e.target.value)){
              set_firstname_err(false)
            }else{
              set_firstname_err(true)
            }
           break
         case 'lastname':
           if(IsTxt(e.target.value)){
            set_lastname_err(false)
          }else{
            set_lastname_err(true)
          }
          break
         case 'password':
          if(/^[A-Za-z0-9]+((\.|\@|\_|\:|\?|\$|\&)\w+)|(\w+(\.|\@|\_|\:|\?|\$|\&))+$/.test(e.target.value)){
             set_pass_err(false);
          }else{
            set_pass_err(true);
          }
          break
         case 'email':
          if(/^[A-Za-z]+(\.||-)[a-z]+?\@\w+((\.||-)?\w+)\.([a-z]{1,3})$/i.test(e.target.value)){
            set_eml_err(false)}
            else{
              set_eml_err(true)
            }
        break
        }
     }}
    onChange={(e)=>{
      e.preventDefault();
        switch(e.target.name){
        case 'firstname':
          if(!e.target.value||IsTxt(e.target.value)){
            Data.firstname = e.target.value
            setFirstname(e.target.value)};
           break
         case 'lastname':
          if(!e.target.value||IsTxt(e.target.value)){Data.lastname=e.target.value;setLastname(e.target.value)}
          break
         case 'password':
          if(!e.target.value||IsPassWord(e.target.value)){
            Data.password =e.target.value
            setPass(e.target.value);
          }
          break
         case 'email':
          if(!e.target.value||IsEmail(e.target.value)){
            Data.email = e.target.value;
            setEmail(e.target.value)
          }
        break
        case 'date':
          Data.Date = e.target.value;
          setDate(e.target.value)
       break
      }
    }}
    value={
    props.name === 'firstname'?firstname
    :props.name === 'lastname'?lastname
    :props.name === 'email'?email
    :props.name === 'password'?password
    :props.name==='date'?date:''} 
    id={props.id}
     type={props.type}
     name={props.name}
     required/>
     {console.log(_firstname,_lastname,_email,_pass)}
        {_firstname||_lastname||_email||_pass?<div className='__error'>{props.error}</div>:undefined}
     </div>
 )}
  const Select = (props)=>{
    const [select,setSelect] = useState(props.firstListName)
    return(
    <div className='__input_div'>
    <span className='__label'>{props.label}</span>
        <select id={props.id}
        onChange={(e)=>{
          e.preventDefault();
          Data.selectValue = e.target.value
          setSelect(e.target.value)
        }}
         value={select}
          name='select'
         required>
     { 
       Object.prototype.toString.call(props.list) === Object.prototype.toString.call([])&&props.list.length>1 ?
             props.list.map(x=><option key={x} value={x}>{x}</option>)
             :
           <option key={props.list} value={props.list}>{props.list}</option>
     }    
         </select>
    </div>
  )}
 const Textarea =(props)=>{
  const [textArea,setTextarea] = useState('')
   return(
    <div className='__input_div'>
    <span  className='__label'>{props.label}</span>
     <textarea
    onChange={(e)=>{
      e.preventDefault();
      IsTextarea(e.target.value);setTextarea(e.target.value)}
    }
    value={textArea} 
    id={props.id}
      name='textarea'
     required></textarea>
      </div>
 )
}
const validatedForm=()=>{
    return Data
}
     const Button =(props)=><button  type='submit' className='__btn'>{props.text}</button>;
 export {Input,Select,Textarea,Button,validatedForm}