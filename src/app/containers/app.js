import React from 'react'
import ReactDOM from 'react-dom'

// import Footer from './components/Footer'
import Header from '../components/Header'
import OccSummary from '../components/OccSummary'
import RegTrends from '../components/RegTrends'
// import Staffing from './components/Staffing'

import {connect} from 'react-redux'

import {queryData} from '../actions/queryData'

import '../normalize.css'
import '../main.css'

import getResponse from './queryData.js'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			response:{}
		}

		this.onToggleEmsi=this.onToggleEmsi.bind(this)
		this.onToggleFaux=this.onToggleFaux.bind(this)
		this.queryData=this.queryData.bind(this)
	}

	addCommas(x) {
	    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	componentWillMount() {
		this.queryData(true)
	}

	onToggleEmsi() {
		this.queryData(true)
	}

	onToggleFaux() {
		this.queryData(false)
	}

	queryData(emsi) {
		// Query Episteme here
		console.log(getResponse(emsi))
		this.setState({response: getResponse(emsi)})
		// console.log(this.state.response)
	}

	render() {
		return (
			<div className="container">
				<div>
					<Header 
						occupation={this.state.response.occupation}
						region={this.state.response.region}
						onToggleEmsi={this.onToggleEmsi}
						onToggleFaux={this.onToggleFaux}
					/>
					<OccSummary 
						response={this.state.response}
						occupation={this.state.response.occupation}
						summary={this.state.response.summary}
						addCommas={this.addCommas}
					/>
					<RegTrends
						response={this.state.response}
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
