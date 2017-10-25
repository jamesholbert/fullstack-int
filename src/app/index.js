import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter, Route} from 'react-router-dom'

// import Footer from './components/Footer'
import Header from './components/Header'
import OccSummary from './components/OccSummary'
// import RegTrends from './components/RegTrends'
// import Staffing from './components/Staffing'

import './normalize.css'
// import './skeleton.css'
import './main.css'

class App extends React.Component {
	constructor(props) {
		super(props);
		
	}

	render() {
		return (
			<div className="container">
				<div>
					<Header 
						occupation={{title:"The Occupations"}}
						region={{title:"The places"}}
					/>
					<OccSummary 
						occupation={{title:"The Occupations"}}
						
					/>
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App/>,document.getElementById("root"))