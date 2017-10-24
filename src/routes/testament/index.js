import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { books, oldTestament, newTestament} from '../../data/books'; 
import TopBars from '../../components/header/top-bars';


export default class Testament extends Component {

    componentWillMount() {
        this.books = ((this.props.testament === 'nt') 
            ? newTestament 
            : oldTestament)
            .map(key => {
                return {
                    url:`/${key}`,
                    title:books[key].shortName
                };
            });
    }

	render({testament}) {
		return (
            <div>
                <TopBars testament={testament} />
                <div class="content-tube">
                    <ul class={'btn-list '+testament}>
                        {this.books.map(book => 
                            <li><Link class="btn" href={book.url}>{book.title}</Link></li>
                        )}
                        
                    </ul>
                </div>
            </div>
		);
	}
}
