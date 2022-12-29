import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES =[
    {id: "q1", author: "me", text: "learning react yo"},
    {id: "q2", author: "me too", text: "learning react and other stuff  yo"},
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/ >
    
};

export default AllQuotes;
