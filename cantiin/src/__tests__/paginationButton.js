import PaginationButton from "../components/paginationButton";
import renderer from 'react-test-renderer';

test('components/paginationButton', () => {

    //const component = renderer.create(<PaginationButton />);
    //TEST: type must be input
    try {
        renderer.create(<PaginationButton/>);
        expect(true).toEqual(false);

    } catch (error) {
        console.log(error.toString());
        expect(error.toString()).toEqual(
            "PaginationButton: type is required");
    }

    /*TEST: Strange Type*/
    try {
        renderer.create(<PaginationButton type="strange"/>);
        expect(true).toEqual(false);

    } catch (error) {
        //console.log(error.toString());
        expect(error.toString()).toEqual(
            'PaginationButton: type must must be one of these values: ["first","prev","number","next","last","dots"]');
        console.log("Error is here");
    }

    /*TEST: Active  without link*/
    try {
        renderer.create(<PaginationButton type="number"/>);
        expect(true).toEqual(false);
    } catch (error) {
        //console.log(error.toString());
        expect(error.toString()).toEqual(
            'PaginationButton: is not disabled, so a link must be passed');
    }

    





});



