import React from 'react'


const {
    Provider: WithServicesProvider,
    Consumer: WithServicesConsumer
} = React.createContext();


export {
    WithServicesConsumer,
    WithServicesProvider
}