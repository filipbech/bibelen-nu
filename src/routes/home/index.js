import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import { getAll, hasAll } from '../../data/chapters';

export default class Home extends Component {

	componentWillMount() {
		this.state.showDownloadButton = false;
		hasAll().then(value => {
			this.setState({ showDownloadButton: !value })
		});
	}

	downloadAll() {
		getAll().then(_ => { 
			this.setState({ showDownloadButton: false });
		});
	}

	render(_,{showDownloadButton}) {
		return (
			<div class="main-view">
				<div class="content-tube">
					<h1><strong>bibelen.</strong>nu</h1>
					<h2>Bibelen på hverdagsdansk <br/>– lige til at tage med i lommen</h2>
					<nav class="testament-select">
						<Link href="/gt" class="gt">Det gamle<br/>testamente</Link>
						<Link href="/nt" class="nt">Det nye<br/>testamente</Link>
					</nav>
					<div class="download">
					{
						showDownloadButton 
							? <button onClick={this.downloadAll}>
								<span>Gør tilgængelig offline </span><br/>
								<span class="fade">(ca 5. mb downloades)</span>
							  </button>
							: <p>er tilgængelig offline</p>
					}
					</div>
				</div>
			</div>
		);
	}

	constructor() {
		super();
		this.downloadAll = this.downloadAll.bind(this);
	}
}
