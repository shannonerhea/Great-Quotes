import { useHistory } from "react-router-dom";  
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
const history = useHistory();

    const  addQuoteHandler = quoteData => {
        console.log(quoteData);
//using .push allows for a go back option .replace does not
        history.push('/quotes');
    };
    return (
        <QuoteForm onAddQuote={addQuoteHandler}/>
    );
};

export default NewQuote;
