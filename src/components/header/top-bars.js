import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import { books } from '../../data/books';

export default class TopBars extends Component {

    componentWillMount() {
        this.fadeTop = this.props.chapter
            ? 'fade2'
            : this.props.book 
                ? 'fade1'
                : '';

        this.fadeMiddle = this.props.chapter 
            ? 'fade1' 
            : '';
    }

	render({testament, book, chapter}) {
		return (
            <div class={testament + ' top-bars'}>
                <div class={'bar '+ this.fadeTop}>
                    <Link href="/" class="home">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.003 32.003">
                            <path fill="#3F3F3F" d="M31.123,12.864l-13-11.013c-1.134-1.134-3.108-1.134-4.242,0l-13,11.013c-1.17,1.171-1.17,3.075,0,4.246 c0.567,0.567,1.32,0.88,2.121,0.88c0.348,0,1,0.012,1,0.012V29c0,1.104,0.897,2.002,2,2.002h5c1.103,0,2-0.898,2-2.002v-7.007h6 V29c0,1.104,0.897,2.002,2,2.002h5c1.103,0,2-0.898,2-2.002V17.996c0,0,0.652-0.006,1-0.006c0.801,0,1.554-0.312,2.121-0.88 C32.293,15.939,32.293,14.035,31.123,12.864z M29.709,15.695c-0.378,0.377-3.707,0.535-3.707,0.535V29h-5v-7.007 c0-1.104-0.897-2.002-2-2.002h-6c-1.103,0-2,0.898-2,2.002V29h-5V16.23c0,0-3.329-0.158-3.707-0.535 c-0.39-0.391-0.39-1.025,0-1.416c0,0,12.709-10.721,13-11.013c0.189-0.188,0.44-0.293,0.707-0.293 c0.267,0,0.518,0.104,0.707,0.293c0.34,0.341,13,11.013,13,11.013C30.098,14.669,30.098,15.304,29.709,15.695z"/>
                        </svg>
                    </Link>
                    {
                        book 
                            ?   <Link href={'/'+testament}>
                                { testament === 'gt' 
                                        ? 'Det Gamle Testamente' 
                                        : 'Det Nye Testamente'
                                }
                                </Link>
                            :   <span>
                                { testament === 'gt' 
                                    ? 'Det Gamle Testamente' 
                                    : 'Det Nye Testamente'
                                }
                                </span>
                    }
                    
                </div>
                {
                    book && 
                        <div class={'bar '+this.fadeMiddle}>
                        {
                        chapter 
                            ?   <Link href={'/'+book}>{books[book].title}</Link>
                            :   <span>{books[book].title}</span>
                        }
                        </div>
                        
                }
                {
                    chapter && 
                        <div class="bar">
                            <span>Kapitel {chapter}</span>
                        </div>
                }
            </div>
        )
    }
}