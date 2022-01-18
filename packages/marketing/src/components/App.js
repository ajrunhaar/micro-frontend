import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import { StylesProvider } from '@material-ui/core/styles'

import LandingPage from './Landing'
import Pricing from './Pricing'

export default () => {
    return (
        <div>
            <StylesProvider>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/pricing" component={Pricing} />
                        <Route path="/" component={LandingPage} />
                    </Switch>
                </BrowserRouter>
            </StylesProvider>
        </div>
    )
}

