import React from "react";
import API from "../API";

let _getAppSate = () =>{
	return {links: LinkStore.getAll()}
};

export default class Main extends React.Component{
	//componentWillMountuctor

	constructor(props){
		super(props);

		this.state= _getAppSate()
	}
	componentDidMount(){
		API.fetchLinks();
		LinkStore.on("change",this.onChange)
	}
	componentWillUnmount{
		LinkStore.removeLister("change", this.onChange);
	}
	onChange(){
		console.log("4. in the view")
		this.setState(_getAppSate())
	}

	render(){
		return (
			<div>
				<h3>Hello aakash </h3>
				<ul>
					{contents}
				</ul>
			</div>
			)
	}
}