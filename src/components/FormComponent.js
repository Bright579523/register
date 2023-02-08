import './FormComponent.css'
import {useState} from "react"

const FormComponent = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cfPassword, setCfPassword] = useState('');

    const [errUserName, setErrUserName] = useState('');
    const [errEmail, setErrEmail] = useState('');
    const [errPassword, setErrPassword] = useState('');
    const [errCfPassword, setErrCfPassword] = useState('');

    const [userNameStatus, setUserNameStatus] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    const [passwordStatus, setPasswordStatus] = useState('');
    const [cfPasswordStatus, setCfPasswordStatus] = useState('');

    const checkPattern = (e) => {
        e.preventDefault()

        if(userName.length > 8 ){
            setErrUserName('')
            setUserNameStatus('green')
        }else{
            setErrUserName('Not less than 8 characters')
            setUserNameStatus('red')
        };

        if(email.includes("@")){
            setErrEmail('')
            setEmailStatus('green')
        }else{
            setErrEmail('Plese include "@" in your address')
            setEmailStatus('red')
        };
        
        if(password.length > 6) {
            setErrPassword('')
            setPasswordStatus('green')
        } else {
            setErrPassword('Not less than 6 characters')
            setPasswordStatus('red')
        };

        if(cfPassword !== '' && cfPassword === password){
            setErrCfPassword('')
            setCfPasswordStatus('green')
        }else {
            setErrCfPassword('Must same as Password')
            setCfPasswordStatus('red')
        }

    }

    return (
        <div className="container">
            <form className="form" onSubmit={checkPattern}>
                <h2>Register Form</h2>
                <div className="form-control">
                    <label>User Name</label>
                    <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} style={{borderColor:userNameStatus}}/>
                    <small style={{color:userNameStatus}}>{errUserName}</small>
                </div>

                <div className="form-control">
                    <label>E-Mail</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} style={{borderColor:emailStatus}}/>
                    <small style={{color:emailStatus}}>{errEmail}</small>
                </div>

                <div className="form-control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} style={{borderColor:passwordStatus}}/>
                    <small style={{color:passwordStatus}}>{errPassword}</small>
                </div>

                <div className="form-control">
                    <label>Confirm Password</label>
                    <input type="password" value={cfPassword} onChange={(e)=>setCfPassword(e.target.value)} style={{borderColor:cfPasswordStatus}}/>
                    <small style={{color:cfPasswordStatus}}>{errCfPassword}</small>
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
};

export default FormComponent;
