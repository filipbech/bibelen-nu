import { h, Component } from 'preact';
import { Link } from 'preact-router/match';
import { getBook } from '../../data/books'; 
import TopBars from '../../components/header/top-bars';

export default class Book extends Component {

    componentWillMount() {
        this.book = getBook(this.props.book);
        this.chapters = [];
        for (let i=1;i<=this.book.chapters;i++) {
            this.chapters.push({
                url:`/${this.props.book}/${i}`,
                title:i
            })
        }
    }

	render() {
		return (
            <div>
                <TopBars testament={this.book.testament} book={this.props.book} />
                <div class="content-tube">
                    <ul class={'btn-list '+this.book.testament}>
                        {this.chapters.map(chapter=>
                            <Link href={chapter.url} class="btn">{chapter.title}</Link>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}