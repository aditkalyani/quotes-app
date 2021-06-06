import QuoteForm from "../components/quotes/QuoteForm"
import {useHistory} from 'react-router-dom'

function NewQuotes() {
    const history = useHistory()

    const onAddQuote = (formObject)=>{
        console.log("Data", formObject)
        history.push('/quotes')

    }

    return (
        <QuoteForm onAddQuote={onAddQuote}/>
    )
}

export default NewQuotes