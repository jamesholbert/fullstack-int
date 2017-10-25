import React from 'react'

export default class Header extends React.Component {
	// constructor(props) {
	// 	super(props);
	// 	console.log(this.props.region)
	// }


	render() {
		return (
			<div className="component">
				<div className="report-title">Occupation Overview</div>
				{this.props.occupation.title} in {this.props.region.title}
				<span className="float-right">
					<button onClick={this.props.onToggleEmsi}>Emsi Data</button>
					<button onClick={this.props.onToggleFaux}>Faux Data</button>
				</span>
			</div>
		)
	}
}