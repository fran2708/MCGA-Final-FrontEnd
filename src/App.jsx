import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/index'
import Login from './pages/Login/index'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard/index'
import { AuthGuard } from './guards/auth.guard'
import { PublicRoutes, PrivateRoutes } from './models/routes'

// import './App.css'

function App () {
  return (
    <div className="app">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Home />} />
            <Route path={PublicRoutes.HOME} element={<Home />} />
            <Route path={PublicRoutes.LOGIN} element={<Login />} />
            <Route element={<AuthGuard />}>
              <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />} />
            </Route>
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  )
}

export default App
