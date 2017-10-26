import React from 'react'

export default class Staffing extends React.Component {

	render() {

		let {employing_industries} = this.props.response
		let {occupation} = this.props.response
		let {summary} = this.props.response




		return (
			<div className="component">
				<div className="sectionHeader"><b>Industries Employing {occupation.title}</b></div>

				<div className="staffing-table-container">
					<div className="column-1 row-1">Industry</div>
					<div className="column-2 row-1 text-align-right">Occupation Jobs in Industry {employing_industries.year}</div>
					<div className="column-3 row-1">% of Occupation in Industry {employing_industries.year}</div>
					<div className="column-4 row-1">% of Total Jobs in Industry {employing_industries.year}</div>

					<div className="column-1 row-2">{employing_industries.industries[0].title}</div>
					<div className="column-1 row-3">{employing_industries.industries[1].title}</div>
					<div className="column-1 row-4">{employing_industries.industries[2].title}</div>
					<div className="column-1 row-5">{employing_industries.industries[3].title}</div>
					<div className="column-1 row-6">{employing_industries.industries[4].title}</div>

					<div className="column-2-staffing row-2">{employing_industries.industries[0].in_occupation_jobs}</div>
					<div className="column-2-staffing row-3">{employing_industries.industries[1].in_occupation_jobs}</div>
					<div className="column-2-staffing row-4">{employing_industries.industries[2].in_occupation_jobs}</div>
					<div className="column-2-staffing row-5">{employing_industries.industries[3].in_occupation_jobs}</div>
					<div className="column-2-staffing row-6">{employing_industries.industries[4].in_occupation_jobs}</div>

					<div className="column-3 row-2">%{Math.round(employing_industries.industries[0].in_occupation_jobs/employing_industries.jobs*1000)/10}</div>
					<div className="column-3 row-3">%{Math.round(employing_industries.industries[1].in_occupation_jobs/employing_industries.jobs*1000)/10}</div>
					<div className="column-3 row-4">%{Math.round(employing_industries.industries[2].in_occupation_jobs/employing_industries.jobs*1000)/10}</div>
					<div className="column-3 row-5">%{Math.round(employing_industries.industries[3].in_occupation_jobs/employing_industries.jobs*1000)/10}</div>
					<div className="column-3 row-6">%{Math.round(employing_industries.industries[4].in_occupation_jobs/employing_industries.jobs*1000)/10}</div>

					<div className="column-4 row-2">%{Math.round(employing_industries.industries[0].in_occupation_jobs/employing_industries.industries[0].jobs*1000)/10}</div>
					<div className="column-4 row-3">%{Math.round(employing_industries.industries[1].in_occupation_jobs/employing_industries.industries[1].jobs*1000)/10}</div>
					<div className="column-4 row-4">%{Math.round(employing_industries.industries[2].in_occupation_jobs/employing_industries.industries[2].jobs*1000)/10}</div>
					<div className="column-4 row-5">%{Math.round(employing_industries.industries[3].in_occupation_jobs/employing_industries.industries[3].jobs*1000)/10}</div>
					<div className="column-4 row-6">%{Math.round(employing_industries.industries[4].in_occupation_jobs/employing_industries.industries[4].jobs*1000)/10}</div>


				</div>
			</div>
		)
	}
}



