import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {appSelectors, appOperations} from "@redux/app";
import {configSelectors} from "@redux/config";
import {init as initI18n} from "@plugins/i18n"
import AppRouter from './AppRouter';
import "./index.css"
import Loader from "@components/Loader";

const notRender = true
const App = () => {
    const dispatch = useDispatch()
    const isLoaded = useSelector(appSelectors.isLoaded);
    const i18nTranslations = useSelector(configSelectors.getI18nTranslations);
    const [loaded, setLoaded] = useState(false)

    useEffect(async () => {
        if (isLoaded) {
            await initI18n({resources: i18nTranslations})
            setLoaded(true)
        }
    }, [isLoaded])

    useEffect(() => {
        dispatch(appOperations.initApp())
    }, [notRender])

    return (
        <>
            {loaded ? (<AppRouter/>) : (<Loader/>)}
        </>
    );
}

export default App;
