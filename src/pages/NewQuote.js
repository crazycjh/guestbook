import { useEffect } from 'react'
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import useHttp from '../hooks/use-http'
import { addQuote } from  '../lib/api';
const NewQuote = ()=>{
    const { sendRequest, status }= useHttp(addQuote);
    const history = useHistory();

    useEffect(()=>{
        if(status === 'completed') {
            history.push('/quotes');
        }
    },[status,history]); //history usually not change but still have to add into that

    const addQutoteHandler = (quoteData) => {
        sendRequest(quoteData)
        console.log(quoteData);
        // history.push('/quotes');
    };

    return (<QuoteForm isLoading={status ==='pending'} onAddQuote={addQutoteHandler}/>)

}

export default NewQuote;