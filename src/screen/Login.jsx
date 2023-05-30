import axios from "axios";
import { useEffect, useState } from "react"

const Login = ()=>{
    const [state, setState] = useState()
    const [inp, setInp] = useState()
    const [password, setPassword] = useState()
    console.log(inp, "inp", password, "password");

    const Login = async()=>{
        const LoginData = await axios({
            url: `http://localhost:8000/users`,
            method: "get"
        })
        console.log(LoginData, "logindata");    
        if(LoginData.status == 200){
            setState(LoginData.data)
        }
    }

    

    const SingIn = ()=>{
        let fil = state.filter(i => i.email == inp && i.password == password)
        console.log(fil);

        // if(fil.length > 0){
        //     window.location.href = '/main'
        // } else {
        //     alert("your email or password is incorrect!")
        // }

        if(fil.length > 0 && inp, password == null || inp == null || password == null){
            alert('you may not have filled all of the inputs!')
        } else{
            alert('successfully checked!')
            window.location.href = '/main'
        }
    }

    const SingUp = ()=>{
        window.location.href = '/register'
    }

    useEffect(()=>{
        Login()
    }, [])

    return (
        <div className="Login">
            <div className="wrapper">
                <div className="form">
                    <div className="FormContainer">
                        <div className="FormTitle">
                    <h2>Войти</h2>
                    <p className="text-style">Войдите в свой личный кабинет</p>
                        </div>

                        <div className="FormParent">  
                            <div className="FormInput">
                        <label for="">Email or phone number</label>
                        <input onChange={(e)=>setInp(e.target.value)} className="flex" type="text" placeholder="Enter"/>
                            </div>
                            <div className="FormInput">
                        <label for="">Password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} className="flex" type="password" placeholder="Enter a password"/> 
                            </div>

                            <p><a href="#">Forgot password?</a></p>

                            <button className="BtnLogin" onClick={SingIn}>Login</button> <br /> <br /> <br />

                            <div className="FormRegister">
                                <div className="lines">
                                    <div className="line"></div>
                                    <h6>or</h6>
                                    <div className="line"></div>
                                </div> <br />

                                <button onClick={SingUp} className="BtnLogin" id="BtnOne">Register now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login