import React, { Component } from "react";
import ColBox from "./ColBox";
import "./Shades.css";

class Shades extends Component {
	constructor(props) {
		super(props);
		this.state = {
			color: { r: 0, g: 0, b: 255 },
			nShades: 20,
			allShades: [],
		};
		this.state.allShades = this.getShades(this.state.nShades);
		this.handleChangeNumber = this.handleChangeNumber.bind(this);
		this.handleChangeColor = this.handleChangeColor.bind(this);
	}

	getShades(n) {
		let shades = [];
		for (let i = 1; i <= n; i += 1) {
			const red = Math.floor((i * this.state.color.r) / n);
			const green = Math.floor((i * this.state.color.g) / n);
			const blue = Math.floor((i * this.state.color.b) / n);
			const color = {
				r: red,
				g: green,
				b: blue,
			};
			shades.push(color);
		}
		return shades;
	}
	getRGB(hex) {
		let arr = hex.split("");
		// console.log(arr);
		let val = arr.map((N) => {
			if (parseInt(N) <= 9) return parseInt(N);
			else if (N === "a") return 10;
			else if (N === "b") return 11;
			else if (N === "c") return 12;
			else if (N === "d") return 13;
			else if (N === "e") return 14;
			else if (N === "f") return 15;
			else return N;
		});
		const red = 16 * val[1] + val[2];
		const green = 16 * val[3] + val[4];
		const blue = 16 * val[5] + val[6];
		return { r: red, g: green, b: blue };
		// console.log(val);
	}
	handleChangeNumber(event) {
		let newShades = this.getShades(event.target.value % 101);
		this.setState({ nShades: event.target.value, allShades: newShades });
	}
	handleChangeColor(event) {
		let newColor = event.target.value;
		let RGB = this.getRGB(newColor);
		this.setState({ color: RGB });
		let shades = this.getShades(this.state.nShades);
		this.setState({ allShades: shades });
	}
	render() {
		return (
			<div className='Shades'>
				{this.state.allShades.map((shade, index) => (
					<ColBox key={index} color={shade} />
				))}
				<input
					type='text'
					name='nShades'
					className='number'
					placeholder='Enter number of shades...'
					onChange={this.handleChangeNumber}
				/>
				<input
					type='color'
					className='color'
					onChange={this.handleChangeColor}
					name='color'
				/>
			</div>
		);
	}
}
export default Shades;
