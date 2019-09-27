import React from 'react';
import { shallow} from 'enzyme';
import  NotFoundpPage  from '../../components/NotFoundpPage';

test('should render NotFoundPage correctly', ()=>
{
    const wrapper = shallow(<NotFoundpPage />);
    expect(wrapper).toMatchSnapshot();
});