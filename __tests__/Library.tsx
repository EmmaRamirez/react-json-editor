import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapater from 'enzyme-adapter-react-15';

Enzyme.configure({ adapter: new Adapater() })

import { JsonEditor } from '../dist/react-json-editor';

describe('Json Editor Library', () => {
    it('produces a component', () => {
        const wrapper = shallow(<JsonEditor />);
        expect(wrapper).toBeDefined();
    })
})