import { Fragment } from 'react'
import { Route, useParams } from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Adit', text: 'Honesty is the best policy'},
    {id: 'q2', author: 'Max', text: 'Cooks spoil soup'},
    {id: 'q3', author: 'James', text: 'Pasta is the best'},
  ]

function QuoteDetail() {
    const params = useParams()
    
    const quote = DUMMY_QUOTES.find((QUOTE)=>{
        return QUOTE.id === params.quoteId
    })

    if(!quote){
        return <p>No quote found</p>
    }

    return (
        <Fragment>
            <h1>Quote Detail Page</h1>
            <HighlightedQuote text={quote.text} author={quote.author}/>
            <Route path={`/quotes/${params.quoteId}/comments`}>
                <Comments/>
            </Route>
        </Fragment>
    )
}

export default QuoteDetail