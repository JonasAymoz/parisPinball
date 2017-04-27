import test from 'ava';
import React from 'react';
import {shallow} from 'enzyme';
import Bars from '../src/components/Bars';

test(t => {
	const wrapper = shallow(<Bars/>);
	t.is(wrapper.find('div').children().length, 3);
});

test('<Bars>', t => {
	const wrapper = shallow(<Bars/>);
	wrapper.setProps({
		params: {
			id: 'petanque'
		}
	});
	t.is(wrapper.find('div').children().length, 1);
});
