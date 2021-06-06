import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Adit', text: 'Honesty is the best policy'},
    {id: 'q2', author: 'Max', text: 'Cooks spoil soup'},
    {id: 'q3', author: 'James', text: 'Pasta is the best'},
]

function AllQuotes() {
    return (
        <QuoteList quotes={DUMMY_QUOTES}/>
    )
}

export default AllQuotes