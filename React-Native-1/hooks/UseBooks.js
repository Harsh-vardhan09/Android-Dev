import { useContext } from "react";
import { BooksContext } from "../context/BooksContext";

export function useBooks(){
    const context=useContext(BooksContext);

    if(!context){
        throw new Error('UseUSer must be within a Book provider')
    }
    return context;
}
