import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Login/thunks'
import { useNavigate } from 'react-router-dom'
import { PrivateRoutes } from '../../models/routes'

function index () {
    const navigate = useNavigate()
    const user = useSelector((store) => store.login.user)

    const loginFunc = () => {
        user.email = 'test@test.com'
        user.id = 'test'
        navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
    }

    return (
        <div>
            <h2>LOGIN</h2>
            <button onClick={loginFunc}>LOGIN</button>
        </div>
    )
}

export default index
