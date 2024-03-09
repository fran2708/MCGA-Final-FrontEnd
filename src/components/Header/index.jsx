import { useNavigate } from 'react-router-dom'
import { PrivateRoutes, PublicRoutes } from '../../models/routes'
import styles from './header.module.css'

function index () {
  const navigate = useNavigate()

  // const navigateTo = (destination) => {
  //   destination === PrivateRoutes.DASHBOARD
  //     ? navigate(`/${PrivateRoutes.DASHBOARD}`, { replace: true })
  //     : navigate(`/${PrivateRoutes.HOME}`, { replace: true })
  // }

  return (
    <div className={styles.container}>
      <div>HEADER</div>
      <section className={styles.buttonContainer}>
        <button onClick={() => navigate(`/${PublicRoutes.HOME}`)}>HOME</button>
        <button onClick={() => navigate(`/${PrivateRoutes.DASHBOARD}`)}>DASHBOARD</button>
      </section>
      <button><a href="https://github.com/fran2708/MCGA-Final-FrontEnd" >Github</a></button>
    </div>
  )
}

export default index
