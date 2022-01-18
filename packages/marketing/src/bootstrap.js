import React from 'react'
import ReactDom from 'react-dom'

import App from './components/App'

const mount = (element) => {
    ReactDom.render(<App/>, element)
}
if (process.env.NODE_ENV === 'development') {
    const marketingElement = document.querySelector('#div-marketing-local')
    if (marketingElement) {
        mount(marketingElement)
    }
}
export { mount }
