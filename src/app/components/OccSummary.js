import React from 'react'

import '../skeleton.css'

export default class Summary extends React.Component {

	render() {
		return (
			<div className="component">
					<b>Occupation Summary for {this.props.occupation.title}</b>
					<div className="summary-metrics-container">
						<span className="summary-metrics summary-metrics-left">
							<div className="top-summary-metric">12,000</div>
							<div className="other-summary-metrics">2016 Jobs</div>
							<div className="bottom-summary-metric other-summary-metrics"> 10% above</div>
						</span>
						<span className="summary-metrics summary-metrics-middle">
							<div className="top-summary-metric">12,000</div>
							<div className="other-summary-metrics">2016 Jobs</div>
							<div className="bottom-summary-metric other-summary-metrics"> 10% above</div>
						</span>
						<span className="summary-metrics summary-metrics-right">
							<div className="top-summary-metric">12,000</div>
							<div className="other-summary-metrics">2016 Jobs</div>
							<div className="bottom-summary-metric other-summary-metrics"> 10% above</div>
						</span>
					</div>
			</div>
		)
	}
}