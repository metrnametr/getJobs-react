import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app'
import API from './API/api'
import { WithServicesProvider } from './components/with-context'
import ErrorBoundry from './components/error-boundry'
const api = new API()

ReactDOM.render(
<WithServicesProvider value={api}>
    <ErrorBoundry>
        <App />
    </ErrorBoundry>
</WithServicesProvider>, 
document.getElementById('root'));

