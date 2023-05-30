import React from "react";
import { useDispatch, useSelector} from "react-redux";
import { signIn, logOut, signUp } from "../store/user";

let SingIn = (props) => {
    let dispatch = useDispatch();
    let user = useSelector(state => state.user.user);
    console.log(user);

    let doSignIn = () =>{
        dispatch(
            signUp({
                credentials:{
                    email:'daferarte@gmail.com',
                    jwtToken: 'c87ey8w7ey8787weyhd87we7f'
                }
            })
        )
    }

    let doLogOut = () => {
        dispatch(
            logOut()
        )
    }

    return(
        <div>
            {
                user ? <button onClick={doLogOut}>Cerrar sesion</button> : <button onClick={doSignIn}>Ingresar</button>
            }
        </div>
    )
}

export default SingIn;