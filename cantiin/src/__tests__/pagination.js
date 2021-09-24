import {getCurrentPagePaginationButton,getPrevPagePaginationButton} 
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


