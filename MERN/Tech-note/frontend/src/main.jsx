import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import {store} from './app/Store.jsx'
import { Provider } from 'react-redux'
import {disableReactDevtools} from '@fvilers/disable-react-devtools'

if(process.env.NODE_ENV === "production")disableReactDevtools()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
   <BrowserRouter>
      <Routes>
        <Route path='/*' element={<App/>}/>
      </Routes>
    </BrowserRouter>
   </Provider>
  </React.StrictMode>,
)
