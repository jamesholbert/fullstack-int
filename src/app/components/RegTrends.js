import React from 'react'
import {Line} from 'react-chartjs-2';

export default class RegTrends extends React.Component {

	render() {

		let {trend_comparison} = this.props.response
		console.log(trend_comparison)
		let yearsArray = () => {
			let result=[]
			for (let i=trend_comparison.start_year;i<=trend_comparison.end_year;i++) {
				result.push(i)
			}
			return result
		}
		let jobCountsToPercents = (a) => {
			return a.map(i => {
				return Math.round((i/a[0]-1)*1000)/10
			})
		}
		let regionJobPercents = jobCountsToPercents(trend_comparison.regional)
		let stateJobPercents = jobCountsToPercents(trend_comparison.state)
		let nationJobPercents = jobCountsToPercents(trend_comparison.nation)



		let lineChartData={
			labels: yearsArray(),
	        datasets: [{
	            label: this.props.response.region.title,
	            data: regionJobPercents,
	            backgroundColor: [
	                'rgba(255, 255, 255, 0)'
	            ],
	            borderColor: [
	                'blue'
	            ],
	            borderWidth: 1
	        },{
	            label: "State",
	            data: stateJobPercents,
	            backgroundColor: [
	                'rgba(255, 255, 255, 0)'
	            ],
	            borderColor: [
	                '#204354'
	            ],
	            borderWidth: 1
	        },{
	            label: "Nation",
	            data: nationJobPercents,
	            backgroundColor: [
	                'rgba(255, 255, 255, 0)'
	            ],
	            borderColor: [
	                'black'
	            ],
	            borderWidth: 1
	        }]
		}
		return (
			<div className="component">
				<div className="sectionHeader"><b>Regional Trends</b></div>
					<div>
						<Line className="border-top"
							data={lineChartData}
							width={20}
							height={10}
							options={{
								legend:{display:false},
								scales: {
								    yAxes: [{
								        scaleLabel: {
								        	display: true,
								        labelString: 'Percent Change'
								      	}
								    }]
								}
							}}
						/>
				</div>

				<div className="regional-trend-table-container">

					<div className="column-1 row-2 circle circle-region"></div>
					<div className="column-1 row-3 circle circle-state"></div>
					<div className="column-1 row-4 circle circle-nation"></div>

					<div className="column-2 row-1"><b>Region</b></div>
					<div className="column-3 row-1"><b>{trend_comparison.start_year} Jobs</b></div>
					<div className="column-4 row-1"><b>{trend_comparison.end_year} Jobs</b></div>
					<div className="column-5 row-1"><b>Change</b></div>
					<div className="column-6 row-1"><b>% Change</b></div>

					<div className="column-2 row-2">Region</div>
					<div className="column-2 row-3">State</div>
					<div className="column-2 row-4">Nation</div>

					<div className="column-3 row-2">{this.props.addCommas(trend_comparison.regional[0])}</div>
					<div className="column-3 row-3">{this.props.addCommas(trend_comparison.state[0])}</div>
					<div className="column-3 row-4">{this.props.addCommas(trend_comparison.nation[0])}</div>

					<div className="column-4 row-2">{this.props.addCommas(trend_comparison.regional[trend_comparison.regional.length-1])}</div>
					<div className="column-4 row-3">{this.props.addCommas(trend_comparison.state[trend_comparison.state.length-1])}</div>
					<div className="column-4 row-4">{this.props.addCommas(trend_comparison.nation[trend_comparison.nation.length-1])}</div>


					<div className="column-5 row-2">{this.props.addCommas(trend_comparison.regional[trend_comparison.regional.length-1]-trend_comparison.regional[0])}</div>
					<div className="column-5 row-3">{this.props.addCommas(trend_comparison.state[trend_comparison.state.length-1]-trend_comparison.state[0])}</div>
					<div className="column-5 row-4">{this.props.addCommas(trend_comparison.nation[trend_comparison.nation.length-1]-trend_comparison.nation[0])}</div>


					<div className="column-6 row-2">{regionJobPercents[regionJobPercents.length-1]}</div>
					<div className="column-6 row-3">{stateJobPercents[stateJobPercents.length-1]}</div>
					<div className="column-6 row-4">{nationJobPercents[nationJobPercents.length-1]}</div>
				</div>
			</div>
		)
	}
}



