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
        <header className={styles.headerContainer}>
            <h2>MCGA - Final</h2>
            <section className={styles.buttonContainer}>
                <button className={styles.headerButton} onClick={() => navigate(`/${PublicRoutes.HOME}`)}>HOME</button>
                <button className={styles.headerButton} onClick={() => navigate(`/${PrivateRoutes.DASHBOARD}`)}>DASHBOARD</button>
            </section>
            <button><a href="https://github.com/fran2708/MCGA-Final-FrontEnd" target="_blank" rel="noreferrer">Github</a></button>
        </header>
    )
}

export default index
