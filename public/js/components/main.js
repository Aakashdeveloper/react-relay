import React from "react";
import API from "../API";

export default class Main extends React.Component{
	//componentWillMount
	componentDidMount(){
		API.fetchLinks();
	}

	render(){
		return (
			<div>
				<h3>Hello aakash </h3>
				<ul>
					<li>Apple</li>
					<li> mango</li>
				</ul>
			</div>
			)
	}
}