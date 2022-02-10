import React, { Component } from "react";
import "./ColBox.css";
class ColBox extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
		this.state = {
			isCopied: false,
		};
	}
	handleClick(event) {
		navigator.clipboard.writeText(
			`rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})`
		);
		this.setState({ isCopied: true });
		setTimeout(() => {
			this.setState({ isCopied: false });
		}, 1000);
	}
	render() {
		return (
			<div
				className='ColBox'
				style={{
					background: `rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})`,
				}}>
				<h1 onClick={this.handleClick}>
					{this.state.isCopied
						? "Copied"
						: `rgb(${this.props.color.r},${this.props.color.g},${this.props.color.b})`}
				</h1>
			</div>
		);
	}
}
export default ColBox;
