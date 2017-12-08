import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapater from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapater() })

import { JsonEditor } from 'components/JsonEditor';

describe('<JsonEditor />', () => {
    it('produces a component', () => {
        console.log(<JsonEditor style={{}} />);
        const wrapper = shallow(<JsonEditor style={{}} />);
        expect(wrapper).toBeDefined();
    })
})