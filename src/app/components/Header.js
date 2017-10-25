import React from 'react'

export default class Header extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.region)
	}
	render() {
		return (
			<div className="header">
				<div className="report-top">Occupation Overview</div>
				{this.props.occupation.title} in {this.props.region.title}.
			</div>
		)
	}
}