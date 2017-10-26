import React from 'react'

import '../skeleton.css'

export default class Summary extends React.Component {

	render() {
		let {summary} = this.props.response
		let {occupation} = this.props.response
		let lqAboveBelow = {
			class : "red",
			text : "below",
			number : Math.round((summary.jobs.national_avg)/(summary.jobs.regional)*100)
		}
		if (summary.jobs.regional > summary.jobs.national_avg) {
			lqAboveBelow.class = "green"
			lqAboveBelow.text = "above"
			lqAboveBelow.number = Math.round(((summary.jobs.regional)/(summary.jobs.national_avg)*100))
		}

		let aboveBelowNationalAverageColor = ""
		
		let jobGrowthPercent = {
			color:"red",
			symbol:"",
			nationColor:"red",
			nationSymbol:""
		}
		if (summary.jobs_growth.regional>0) {
			jobGrowthPercent.color="green"
			jobGrowthPercent.symbol="+"
		}
		if (summary.jobs_growth.national_avg>0) {
			jobGrowthPercent.nationColor="green"
			jobGrowthPercent.nationSymbol="+"
		}


		return (
			<div className="component">
					<b>Occupation Summary for {occupation.title}</b>
					<div className="summary-metrics-container">
						<span className="summary-metrics summary-metrics-left">
							<div className="top-summary-metric">{this.props.addCommas(summary.jobs.regional)}</div>
							<div className="other-summary-metrics"><b>Jobs ({summary.jobs.year})</b></div>
							<div className="bottom-summary-metric other-summary-metrics"> {lqAboveBelow.number}% <span className={lqAboveBelow.class}> {lqAboveBelow.text}</span> National Average </div>
						</span>
						<span className="summary-metrics summary-metrics-middle">
							<div className="top-summary-metric"><span className={jobGrowthPercent.color}>{jobGrowthPercent.symbol}{summary.jobs_growth.regional}</span></div>
							<div className="other-summary-metrics"><b>% Change ({summary.jobs_growth.start_year}-{summary.jobs_growth.end_year})</b></div>
							<div className="bottom-summary-metric other-summary-metrics">Nation: <span className={jobGrowthPercent.nationColor}>{jobGrowthPercent.nationSymbol}{summary.jobs_growth.national_avg}</span></div>
						</span>
						<span className="summary-metrics summary-metrics-right">
							<div className="top-summary-metric">${summary.earnings.regional}/hr</div>
							<div className="other-summary-metrics"><b>Median Hourly Earnings</b></div>
							<div className="bottom-summary-metric other-summary-metrics"> ${summary.earnings.national_avg}/hr</div>
						</span>
					</div>
			</div>
		)
	}
}