
    import React from 'react'
    import { signInWithPopup } from 'firebase/auth'
    import { auth, provider } from '../firebaseConfig'
    import { useNavigate } from 'react-router-dom'
    
    
    export default function Login() {
        const navigate = useNavigate();
        const handleLogin = async () => {
                const result = await signInWithPopup(auth, provider).then((data)=>{
                    console.log(data);
                    const name = data.user.displayName;
                    navigate('/Dashboard',{state:{name:name}})
                })  

                
                console.log(result);
        }


        return (
            <>
            <center>
            <br /> <br />

            <div className='box1'> <br /><br />
                <h1>GoogleAuth</h1> <br /><br />
                <input type="email" placeholder='Enter Email' /> <br /><br />
                <input type="password" placeholder='Enter Password' /> <br /><br /><br />
                
                <button className='bt1'>LogIn</button> <br />
                <span> or </span> <br />
                <button onClick={handleLogin}>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/2048px-Google_%22G%22_logo.svg.png' alt='Google logo' style={{height:'30px'}} />
                    Sign in with Google
                </button>  <br /><br /><br />
            </div>
            </center>


            </>

        )
    }