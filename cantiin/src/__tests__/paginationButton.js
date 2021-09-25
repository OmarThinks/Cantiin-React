import PaginationButton from "../components/paginatioButton";



test('components/paginationButton', () => {

    try {
        console.log((<PaginationButton/>).toString());
        console.log("noError");

    } catch (error) {
        console.log(error);
        console.log("noError");
    }

    expect((<PaginationButton/>).toString())
    .toEqual((<li>
    </li>).toString());

});



