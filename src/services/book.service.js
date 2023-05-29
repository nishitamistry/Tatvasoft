import request from "./request";

const ENDPOINT="api/book";
const searchBook=async(searchText)=>{
    const url=`${ENDPOINT}/search?keyword=${searchText}`;
    return request.get(url).then((res)=>{
        return res;
    });
    };
    const bookService={searchBook}
    export default bookService;