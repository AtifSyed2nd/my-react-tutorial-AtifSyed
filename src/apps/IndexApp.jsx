import React from 'react'
import {UseStateHook, UseReducerHook, UseEffectHook, UseRefHook, UseLayoutEffectHook, UseImperativeHandleHook, UseMemoHook, UseCallbackHook} from "./hooksApp"
import IndexReduxApp from './reduxApps/IndexReduxApp';

const IndexApp = () => {
  return (
    <div>
      <h1>React App</h1>
      {/* <UseStateHook />
      <UseReducerHook /> */}
      {/* <UseEffectHook /> */}
      {/* <UseRefHook /> */}
      {/* <UseLayoutEffectHook /> */}
      {/* <UseImperativeHandleHook /> */}
      {/* <UseMemoHook /> */}
      {/* <UseCallbackHook /> */}
      <IndexReduxApp/>
    </div>
  )
}

export default IndexApp;