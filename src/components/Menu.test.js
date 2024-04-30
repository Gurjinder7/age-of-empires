import renderer from 'react-test-renderer';
import FilterMenu from './Menu';
import { FilterContext } from '../App';

it('trst', () => {
    const component = renderer.create(
        <FilterContext> 
             <FilterMenu />
        </FilterContext>

    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
})