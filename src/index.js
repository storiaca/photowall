import React from 'react'
import ReactDOM from 'react-dom'
import Main from './Components/Main'
import './styles/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'
import {createStore} from 'redux'

const store = createStore()

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));

