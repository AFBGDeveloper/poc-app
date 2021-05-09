import './dashboard.css'
import React from 'react'
import {
    Switch,
    NavLink,
    useRouteMatch,
} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'
import ProvideAuth from '../../ProvideAuth'
import PrivateRoute from '../../PrivateRoute'

// Pages
import Home from '../Home'
import Details from '../Details'
import Favorites from '../Favorites'

const Dashboard = () => {
    const { path, url } = useRouteMatch()

    return (
        <>
            <ProvideAuth>
                <Switch>
                    <PrivateRoute path={ `${path}/details/:name` }>
                        <Details />
                    </PrivateRoute>
                    <PrivateRoute path={ `${path}/home` }>
                        <Home />
                    </PrivateRoute>
                    <PrivateRoute path={ `${path}/favorites` }>
                        <Favorites />
                    </PrivateRoute>
                    <PrivateRoute path={ `${path}/` } exact>
                        <Home />
                    </PrivateRoute>
                </Switch>

            </ProvideAuth>
            <div className="bottom-tab-bar">
                <NavLink
                    to={ `${url}/home` }
                    className="bottom-tabbar-btn"
                    activeClassName="active"
                >
                    <Icon className="bottom-tabbar-icon">home</Icon>
                    <p>Home</p>
                </NavLink>
                <NavLink
                    to={ `${url}/favorites` }
                    className="bottom-tabbar-btn"
                    activeClassName="active"
                >
                    <Icon className="bottom-tabbar-icon">favorite</Icon>
                    <p>Favorites</p>
                </NavLink>
            </div>
        </>
    )
}

export default Dashboard
