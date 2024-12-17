import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../src/assets/styles/style.css'
import Home from '../src/pages/Home'

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<Home />)

