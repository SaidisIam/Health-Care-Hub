import axios from "axios";
import { useState } from "react"

const Register = ()=>{
    const [state, setState] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [hospitalname, setHospitalname] = useState()
    const [number, setNumber] = useState()

    const Register = async()=>{
        if(email, password, hospitalname, number == null){
            alert('you may not have filled all of the inputs!')
        } else{
           const param = {
            "email": email,
            "password": password,
            "hospitalname": hospitalname,
            "number": number
        }
        const RegisterData = await axios({
            url: `http://localhost:8000/users`,
            method: "post",
            data: param
        })
        console.log(RegisterData);
        if(RegisterData.status == 201){
            setState(RegisterData.data)
            alert('successfully added!')
            window.location.href = '/'
        } 
        }
    }

        // if(email, password, hospitalname, number == null){
        //     alert('you may not have filled all of the inputs!')
        // } else {
        //     alert('successfully added!')
        //     window.location.href = '/'
        // }

        

    return (
        <div className="Register">
            <div className="wrapper">
                <div className="form">
                    <div className="FormContainer">
                        <div className="FormTitle">
                    <h2>Войти   </h2>
                    <p className="text-style">Войдите в свой личный кабинет</p>
                        </div>

                        <div className="FormParent">  
                            <div className="FormInput">
                                <label for="">Email</label>
                                <input required onChange={(e)=>setEmail(e.target.value)} className="flex" type="text" placeholder="Enter an email"/>
                            </div>
                            <div className="FormInput">
                                <label for="">Password</label>
                                <input required onChange={(e)=>setPassword(e.target.value)} className="flex" type="password" placeholder="Enter a password"/> 
                            </div>
                            <div className="FormInput">
                                <label for="">Hospital Name</label>
                                <input required onChange={(e)=>setHospitalname(e.target.value)} className="flex" type="text" placeholder="Enter hospital name"/> 
                            </div>
                            <div className="FormInput">
                                <label for="">Phone number</label>
                                <input required onChange={(e)=>setNumber(e.target.value)} className="flex" type="number" placeholder="Enter phone number"/> 
                            </div>

                            <div className="FormRegister">

                                <button onClick={Register} className="BtnLogin" id="BtnOne">Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register