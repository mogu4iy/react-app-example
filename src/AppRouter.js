import React from "react";
import {BrowserRouter, Redirect, Route, Routes} from 'react-router-dom';
import routerConfig from '@config/router';
import BaseView from '@views/BaseView'

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routerConfig.route.BASE} element={<BaseView/>} exact/>
                <Route path={routerConfig.route.DEFAULT} element={<BaseView/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter