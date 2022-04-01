import React from "react";
import {useTranslation} from "react-i18next";

const AppContainer = ({children}) => {
    const {t} = useTranslation();

    return (
        <div>
            {children}
        </div>
    )
}

export default AppContainer