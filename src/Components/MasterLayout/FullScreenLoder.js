import React ,{Fragment} from 'react'
import {useSelector} from 'react-redux'

const FullScreenLoder = () => {
    const settings = useSelector((state)=>state.settings.loader)
  return (
    <Fragment>
        <div className={settings + "LoadingOverlay"}>
            <div className="Line-Process">
                <div className="indeterminate"></div>
            </div>
        </div>
    </Fragment>
  )
}

export default FullScreenLoder