import {getCurrentPagePaginationButton,getPrevPagePaginationButton,
    getFirstPagePaginationButton,getNextPagePaginationButton,
    getLastPagePaginationButton} 
from "../functions/pagination";





test('functions/pagination/getCurrentPagePaginationButton', () => {
    expect((getCurrentPagePaginationButton("www.example.com")).toString())
    .toEqual((<li>
        <button disabled={true}>1</button>
    </li>).toString());
    
    expect((getCurrentPagePaginationButton("www.example.com?")).toString())
    .toEqual((<li>
        <button disabled={true}>1</button>
    </li>).toString());
    
    expect((getCurrentPagePaginationButton("www.example.com?notPage=5")).toString())
    .toEqual((<li>
        <button disabled={true}>1</button>
    </li>).toString());

    expect((getCurrentPagePaginationButton("www.example.com?page=5")).toString())
    .toEqual((<li>
        <button disabled={true}>5</button>
    </li>).toString());
});





test('functions/pagination/getPrevPagePaginationButton', () => {
    expect((getPrevPagePaginationButton("www.example.com")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<"}</button>
    </li>).toString());
    
    expect((getPrevPagePaginationButton("www.example.com?")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<"}</button>
    </li>).toString());
    
    expect((getPrevPagePaginationButton("www.example.com?notPage=5")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<"}</button>
    </li>).toString());

   expect((getPrevPagePaginationButton("www.example.com?page=0")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<"}</button>
    </li>).toString());

    expect((getPrevPagePaginationButton("www.example.com?page=5")).toString())
    .toEqual((<li>
        <a href={"www.example.com?page=4"}>
            <button>{"<"}</button>
        </a>
    </li>).toString());

    expect((getPrevPagePaginationButton("www.example.com?page=5&fast=true")).toString())
    .toEqual((<li>
        <a href={"www.example.com?fast=true&page=4"}>
            <button>{"<"}</button>
        </a>
    </li>).toString());
});










test('functions/pagination/getFirstPagePaginationButton', () => {
    expect((getFirstPagePaginationButton("www.example.com")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<<"}</button>
    </li>).toString());
    
    expect((getFirstPagePaginationButton("www.example.com?")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<<"}</button>
    </li>).toString());
    
    expect((getFirstPagePaginationButton("www.example.com?notPage=5")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<<"}</button>
    </li>).toString());

   expect((getFirstPagePaginationButton("www.example.com?page=0")).toString())
    .toEqual((<li>
        <button disabled={true}>{"<<"}</button>
    </li>).toString());

    expect((getFirstPagePaginationButton("www.example.com?page=5")).toString())
    .toEqual((<li>
        <a href={"www.example.com?page=1"}>
            <button>{"<<"}</button>
        </a>
    </li>).toString());

    expect((getPrevPagePaginationButton("www.example.com?page=5&fast=true")).toString())
    .toEqual((<li>
        <a href={"www.example.com?fast=true&page=1"}>
            <button>{"<<"}</button>
        </a>
    </li>).toString());
});













test('functions/pagination/getNextPagePaginationButton', () => {
    expect((getNextPagePaginationButton("www.example.com",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">"}</button>
    </li>).toString());
    
    expect((getNextPagePaginationButton("www.example.com?",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">"}</button>
    </li>).toString());
    
    expect((getNextPagePaginationButton("www.example.com?notPage=5",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">"}</button>
    </li>).toString());

   expect((getNextPagePaginationButton("www.example.com?page=0",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">"}</button>
    </li>).toString());

    expect((getNextPagePaginationButton("www.example.com?page=5",6)).toString())
    .toEqual((<li>
        <a href={"www.example.com?page=6"}>
            <button>{">"}</button>
        </a>
    </li>).toString());

    expect((getNextPagePaginationButton("www.example.com?page=5&fast=true",6)).toString())
    .toEqual((<li>
        <a href={"www.example.com?fast=true&page=6"}>
            <button>{">"}</button>
        </a>
    </li>).toString());

});












test('functions/pagination/getLastPagePaginationButton', () => {
    expect((getLastPagePaginationButton("www.example.com",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">>"}</button>
    </li>).toString());
    
    expect((getLastPagePaginationButton("www.example.com?",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">>"}</button>
    </li>).toString());
    
    expect((getLastPagePaginationButton("www.example.com?notPage=5",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">>"}</button>
    </li>).toString());

   expect((getLastPagePaginationButton("www.example.com?page=0",1)).toString())
    .toEqual((<li>
        <button disabled={true}>{">>"}</button>
    </li>).toString());

    expect((getLastPagePaginationButton("www.example.com?page=5",6)).toString())
    .toEqual((<li>
        <a href={"www.example.com?page=6"}>
            <button>{">>"}</button>
        </a>
    </li>).toString());

    expect((getLastPagePaginationButton("www.example.com?page=5&fast=true",6)).toString())
    .toEqual((<li>
        <a href={"www.example.com?fast=true&page=6"}>
            <button>{">>"}</button>
        </a>
    </li>).toString());

    expect((getLastPagePaginationButton("www.example.com?page=5&fast=true",7)).toString())
    .toEqual((<li>
        <a href={"www.example.com?fast=true&page=7"}>
            <button>{">>"}</button>
        </a>
    </li>).toString());

});










test('js object mod', () => {
    let originalObject = {"page":1,"q":"what"};
    expect({...originalObject,"page":2})
    .toEqual({"page":2,"q":"what"});
    expect(originalObject)
    .toEqual({"page":1,"q":"what"});
});










