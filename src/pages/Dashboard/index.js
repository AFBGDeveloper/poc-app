import './dashboard.css'
import React from 'react'
import {
    Switch,
    Route,
    NavLink,
    useRouteMatch,
} from 'react-router-dom'
import Icon from '@material-ui/core/Icon'

// Pages
import Home from '../Home'
import Details from '../Details'
import Favorites from '../Favorites'

const Dashboard = () => {
    const { path, url } = useRouteMatch()

    return (
        <>
            <Switch>
                <Route path={ `${path}/details/:name` }>
                    <Details />
                </Route>
                <Route path={ `${path}/home` }>
                    <Home />
                </Route>
                <Route path={ `${path}/favorites` }>
                    <Favorites />
                </Route>
                <Route path={ `${path}/` } exact>
                    <Home />
                </Route>
            </Switch>

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
