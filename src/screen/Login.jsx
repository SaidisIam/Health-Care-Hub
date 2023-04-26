const Login = ()=>{
    return (
        <div className="Login">
            <div className="wrapper">
                <div className="form">
                    <div className="FormContainer">
                        <div className="FormTitle">
                    <h2>Войти   </h2>
                    <p className="text-style">Войдите в свой личный кабинет</p>
                        </div>

                        <div className="FormParent">  
                            <div className="FormInput">
                        <label for="">Email or phone number</label>
                        <input className="flex" type="text" placeholder="Enter"/>
                            </div>
                            <div className="FormInput">
                        <label for="">Password</label>
                        <input className="flex" type="password" placeholder="Enter a password"/> 
                            </div>

                            <p><a href="#">Forgot password?</a></p>

                            <button className="BtnLogin">Login</button> <br /> <br /> <br />

                            <div className="FormRegister">
                                <div className="lines">
                                    <div className="line"></div>
                                    <h6>or</h6>
                                    <div className="line"></div>
                                </div> <br />

                                <button className="BtnLogin" id="BtnOne">Register now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login