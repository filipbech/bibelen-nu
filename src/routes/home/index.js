import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

export default class Home extends Component {
	render() {
		return (
			<div class="main-view">
				<div class="content-tube">
					<h1><strong>bibelen.</strong>nu</h1>
					<h2>Bibelen på hverdagsdansk <br/>– lige til at tage med i lommen</h2>
					<nav class="testament-select">
						<Link href="/gt" class="gt">Det gamle<br/>testamente</Link>
						<Link href="/nt" class="nt">Det nye<br/>testamente</Link>
					</nav>
				</div>
			</div>
		);
	}
}
