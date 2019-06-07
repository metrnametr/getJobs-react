import React from 'react'
import { WithServicesConsumer } from '../with-context' 
const withApi = () => (Wrapped) => {
    return (props) => {
        return (
            <WithServicesConsumer>
            {
                (api) => {
                    return ( <Wrapped {...props} api={api}/>)
                }
            }
            </WithServicesConsumer>
        )
    } 
}

export default withApi;