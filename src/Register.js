import React from 'react'
import './Styles CSS/App.css';
const Register = ({ RegisterUser, UserValue }) => {
    return (
        <div style={{textAlign:'center',marginTop:'50px'}} className='log'>
            <form action="" onSubmit={RegisterUser}>
                <div><input name='name' onChange={UserValue} type="text" placeholder='Name...' /></div><br/>

                <div><input name='email' onChange={UserValue} type="text" placeholder='Email...' /></div><br/>
                <div><input name='pass' onChange={UserValue} type="text" placeholder='Password...' /></div><br/>
                <div><input type="submit" value="Login" /></div>

            </form>


        </div>
    )
}

export default Register
