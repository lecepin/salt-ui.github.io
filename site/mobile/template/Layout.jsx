

import React from 'react';
import ReactDOM, {findDOMNode} from 'react-dom';


import { transformCode } from '../../utils';

const ARGS = 'ReactDOM, React, SaltUI, mountNode';


export default class Layout extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	changeFlag: 0
	    }
	    this.receiveMessage = this.receiveMessage.bind(this);
	}

	componentDidMount(){
		window.addEventListener('message', this.receiveMessage);
	}

	shouldComponentUpdate(){
		return false;
	}

	receiveMessage(event){

		const mount = this.refs.mountNode;
		const copms = [ReactDOM, React, window.SaltUI, mount];
		try{
			// let f = new Function(args, code);
			let f = new Function(ARGS, event.data.code);
			f.apply(null, copms);

			if(event.data.style){
				let style = document.createElement('style');
				style.type = 'text/css';
				style.innerHTML = event.data.style;
				document.getElementsByTagName('head').item(0).appendChild(style); 
			}

		}catch (error){
			console.log(error)
		}
	}

	render(){

		return (
			<div>
				<div ref="mountNode" />
			</div>
		)
	}


}