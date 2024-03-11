import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { login } from '../../Redux/Login/thunks'
import { PrivateRoutes } from '../../models/routes'

import styles from './login.module.css'

function index () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector((store) => store.login.user)

    const loginFunc = () => {
        user.email = 'test@test.com'
        user.id = 'test'
        navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
    }

    return (
        <div className={styles.container}>
            <h2>LOGIN</h2>
            <form action="submit">
                <label htmlFor="emailInput">Enter your email</label>
                <input type="text" id="emailInput" />
                <label htmlFor="passwordInput">Enter your password</label>
                <input type="password" id="passwordInput" />
                <button onClick={loginFunc}>LOGIN</button>
            </form>
        </div>
    )
}

export default index
