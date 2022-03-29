import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginSuccess } from '../actions/signIn';
import { checkToken } from '../api/user';



export default function RequireAuth({ children, withAuth }) {
    const user = useSelector(state => state.user)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const token = useSelector(state => state.user.token);

    useEffect(() => {
        if (!user.isLogged && withAuth) {
            if (token === null) {
                return navigate("/signin");
            } else {
                checkToken(token)
                    .then((res) => {
                        console.log("response dans RequireAuth",res.data.mesg)
                        if (res.status !== 200) {
                            return navigate("/signin");
                        } else {
                            dispatch(loginSuccess(res.data.user))
                        }
                    })
            }
        }
    })

    return (
        <>{children}</>
    )
}
