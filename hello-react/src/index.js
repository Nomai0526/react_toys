import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import CommentApp from './CommentApp.js'

class Header extends Component {
  render () {
    return (
    	<CommentApp/>
    )
  }
}

ReactDOM.render(
  <Header />,
  document.getElementById('root')
)