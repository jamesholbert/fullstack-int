import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

import './main.css'
import './normalize.css'
import './skeleton.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div> Half-Lion </div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById("root"))