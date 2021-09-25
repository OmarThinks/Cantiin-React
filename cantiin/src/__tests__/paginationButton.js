import PaginationButton from "../components/paginationButton";
import renderer from 'react-test-renderer';

test('components/paginationButton', () => {

    //const component = renderer.create(<PaginationButton />);
    
    try {
        console.log("This is the button");
        console.log(renderer.create(<PaginationButton/>));
        console.log("noError");

    } catch (error) {
        expect(error.toString()).toEqual(
            "TypeError: Cannot destructure property 'type' of 'this.props.type' as it is undefined.");
        console.log("Error is here");
    }

});



