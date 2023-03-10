import { Fragment } from "react";
import { useParams, Route, Link } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const DUMMY_QUOTES = [
  { id: "q1", author: "me", text: "learning react yo" },
  { id: "q2", author: "me too", text: "learning react and other stuff  yo" },
];
const QuoteDetail = () => {
  const params = useParams();
  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);
  if (!quote) {
    return <p>No Quote Found!</p>
  };
  return (
    <Fragment>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <div className='centered'>
        <Link className='btn--flat'  to={`/quotes/${params.quoteId}/comments`}>Load Comments</Link>
      </div>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
