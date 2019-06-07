import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import API from './API/api'
import { WithServicesProvider } from './components/with-context'

const api = new API()

ReactDOM.render(
<WithServicesProvider value={api}>
    <App />
</WithServicesProvider>, 
document.getElementById('root'));

