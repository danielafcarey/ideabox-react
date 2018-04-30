import React from 'react';
import ReactDOM from 'react-dom';
import { read } from 'fs';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import Input from './Input';


describe('Input', () => {
  it('has a default state of an empty idea', () => {
    const renderedInput = shallow(<Input />)
    const expected = {
      titleInput: '',
      bodyInput: '',
      quality: 'swill'
    };

    expect(renderedInput.state('idea')).toEqual(expected);
  })

  it('updates the idea title in state with a change event in the input field', () => {
    const renderedInput = shallow(<Input />);
    const appInst = renderedInput.instance();
    const expected = {
      titleInput: 'title',
      bodyInput: '',
      quality: 'swill'
    };
    const mockedEvent = { 
      target: {
        value: 'title',
        name: 'titleInput'
      } 
    }

    appInst.setIdeaInput(mockedEvent);

    expect(renderedInput.state('idea')).toEqual(expected);
  })

  it.skip('renders an Input component with correct props', () => {
    const renderedInput = shallow(<Input />);
    const expectedProps = { setIdeaInState: renderedInput.instance().setIdeaInState }

    expect(renderedInput.find(Input).length).toEqual(1);
    expect(renderedInput.find(Input).props()).toEqual(expectedProps);
  })

  it.skip('renders an IdeaList component with correct props', () => {
    const renderedInput = shallow(<Input />);
    const expectedProps = { ideasArray: [] }

    expect(renderedInput.find(IdeaList).length).toEqual(1);
    expect(renderedInput.find(IdeaList).props()).toEqual(expectedProps);
  })

})
