import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { books, oldTestament, newTestament } from '../../data/books'; 
import TopBars from '../../components/header/top-bars';

export default class Chapter extends Component {

    componentWillMount() {
        this.loadContent(this.props.book, this.props.chapter);
    }
    componentWillReceiveProps(nextProps) {
        this.loadContent(nextProps.book, nextProps.chapter);
    }

    loadContent(book, chapter) {
        this.book = books[book];
        this.state.content = '...';

        fetch(`/api/${this.book.apiName.toLowerCase()}-${chapter}.json`)
            .then(res => res.json())
            .then(json => {
                this.setState({content:json.text});
            });
    }

	render() {
		return (
            <div>
                <TopBars testament={this.book.testament} book={this.props.book} chapter={this.props.chapter} />
                <div class="content-tube">
                    <div dangerouslySetInnerHTML={{__html:this.state.content}}></div>
                    { this.props.chapter < this.book.chapters 
                        ?   <div class="next-chapter">
                                <Link href={'/'+this.props.book+'/'+(1+parseInt(this.props.chapter))}>
                                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 34.96 34.957'><polygon points='9.982,34.956 8.552,33.559 23.998,17.754 8.173,1.39 9.611,0 26.787,17.762'/></svg>
                                </Link>
                            </div>
                        : ''
                    }
                </div>
            </div>
        )
    }
}