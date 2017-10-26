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
				return (i/a[0]-1)
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
							options={{legend:{display:false}}}
						/>
				</div>
			</div>
		)
	}
}



