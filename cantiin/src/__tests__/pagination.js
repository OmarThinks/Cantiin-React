import {getCurrentPagePaginationButton} from "../functions/pagination";

test('functions/pagination/getCurrentPagePaginationButton', () => {
    expect((getCurrentPagePaginationButton("www.example.com")).toString())
    .toEqual((<li>
        <button disabled={true}>1</button>
    </li>).toString());
  });

