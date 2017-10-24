import { h, Component } from 'preact';
import { Router } from 'preact-router';

import Home from '../routes/home';
import Testament from '../routes/testament';
import Book from '../routes/book';
import Chapter from '../routes/chapter';

// import Home from 'async!../routes/home';


export default class App extends Component {
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app" class="container">
				<Router onChange={this.handleRoute}>
					<Home path="/" />
					<Testament path="/gt" testament="gt" />
					<Testament path="/nt" testament="nt" />
					<Book path="/:book" />
					<Chapter path="/:book/:chapter" />
				</Router>
			</div>
		);
	}
}
/*
<Profile path="/profile/" user="me" />
<Profile path="/profile/:user" />
*/