import React from "react";
import API from "../API";
import LinkStore from "../stores/LinkStores";

let _getAppState = () =>{
	return {links: LinkStore.getAll()}
};

export default class Main extends React.Component{
	//componentWillMountuctor

	constructor(props){
		super(props);

		this.state= _getAppState();
		this.onChange = this.onChange.bind(this);
	}
	componentDidMount(){
		API.fetchLinks();
		LinkStore.on("change", this.onChange)
	}
	componentWillUnmount(){
		LinkStore.removeListener("change", this.onChange);
	}
	onChange(){
		console.log("4. in the view");
		this.setState(_getAppState());
	}

	render(){
		let content = this.state.links.map(link => {
			return <li key={link._id}>{link.name}</li>
		});
		return (
			<div>
				<h3>Hello aakash </h3>
				<ul>
					{content}
				</ul>
			</div>
			);
	}
}