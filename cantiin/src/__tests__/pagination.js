import {getCurrentPagePaginationButton} from "../functions/pagination";

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


