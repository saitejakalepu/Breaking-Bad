import { render, screen , fireEvent, act , container} from '@testing-library/react';
import Header from './header';
import Search from './search';
import store from '../redux/store'
import { Provider } from 'react-redux';
import Spinner from './spinner';
import CharacterItem from './CharacterItem';


test('to check rendering of header logo', () => {
    const {getByAltText} = render(<Header />);
    getByAltText("header-logo");
});


test('to check rendering of spinner', () => {
    const {getByAltText} = render(<Spinner />);
   // getByAltText("Loading");
    expect(screen.getByAltText("Loading")).toBeInTheDocument();
});

test('to check rendering of input', () => {
    const {getByTestId} = render(<Provider store={store}><Search /></Provider>);
    const input = getByTestId("input-text");
    // expect(input).toBeTruthy();
});

test('to check if input changes', () => {
    const {getByTestId} = render(<Provider store={store}><Search /></Provider>);
    const element = getByTestId("input-text");
    fireEvent.change(element,{
        target :{
            value : "walter white"
        }
    })
    expect(element.value).toBe("walter white"); 
});


test("renders mock data on character item", async () => {
    const character = {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "img": "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg"
        };
    jest.spyOn(global, "fetch").mockImplementation(() =>
      Promise.resolve({
        json: () => Promise.resolve(character)
      })
    );
  
    // Use the asynchronous version of act to apply resolved promises
    await act(async () => {
      render(<CharacterItem character={character}/>);
    });
  
    // expect(container.querySelector("strong").textContent).toBe(character.name);
    // expect(container.querySelector("strong").textContent).toBe(character.birthday);

    expect(screen.getByText(character.name)).toBeInTheDocument();
    expect(screen.getByText(character.birthday)).toBeInTheDocument();
    expect(screen.getByText(character.nickname)).toBeInTheDocument();
    expect(screen.getByAltText("image")).toBeInTheDocument();
    expect(screen.getByAltText('image')).toHaveAttribute('src', 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg')

  
    // remove the mock to ensure tests are completely isolated
    global.fetch.mockRestore();
  });