import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { PublicRoutes } from '../../models/routes'

function index () {
    const navigate = useNavigate()
    const user = useSelector((store) => store.login.user)
    const logOut = () => {
        user.email = ''
        navigate(`/${PublicRoutes.LOGIN}`, { replace: true })
    }
    return (
        <div>
            <div>DASHBOARD</div>
            <button onClick={logOut}>LOGOUT</button>
        </div>
    )
}

export default index
