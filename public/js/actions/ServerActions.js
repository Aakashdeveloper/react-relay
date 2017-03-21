import AppDispatcher from "../AppDispatcher";
import {ActionTypes} from "../Constants";

let ServerActions ={
	receiveLiks(links){
		AppDispatcher.dispatch({
			actionType: ActionTypes.RECEIVE_LINKS,
			links
		});
	}
};

export default ServerActions;
