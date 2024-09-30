import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import '../src/assets/styles/style.css'
import Header from './components/Headers'

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(<Header innerText="Danabek"/>)

