import { HeaderApps, HeaderAvatar, SigninButton, useInitStorage } from 'flikrui'
import React from 'react'

function FlikrUi(): React.JSX.Element {
    useInitStorage("localStorage");

    return (
        <div className="flex justify-end items-center p-3 gap-3">
            <HeaderApps />
            <HeaderAvatar>
                <SigninButton />
            </HeaderAvatar>
        </div>
    )
}

export default FlikrUi
