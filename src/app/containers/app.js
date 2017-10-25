import React from 'react'
import ReactDOM from 'react-dom'

// import Footer from './components/Footer'
import Header from '../components/Header'
import OccSummary from '../components/OccSummary'
// import RegTrends from './components/RegTrends'
// import Staffing from './components/Staffing'

import {connect} from 'react-redux'

import {queryData} from '../actions/queryData'

import '../normalize.css'
import '../main.css'

class App extends React.Component {
	constructor(props) {
		super(props)
	}

	// componentWillMount() {
	// 	this.queryInitialData()
	// }

	// queryInitialData() {
	// 	this.props.queryData()
	// }

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

const mapStateToProps = (state) => {
	return {
		response: state.queryDataReducer,
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		queryData: (request) => {
			dispatch(queryData(response))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
