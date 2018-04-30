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
    const inputInst = renderedInput.instance();
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

    inputInst.setIdeaInput(mockedEvent);

    expect(renderedInput.state('idea')).toEqual(expected);
  })

  it('updates the idea body in state with a change event in the input field', () => {
    const renderedInput = shallow(<Input />);
    const inputInst = renderedInput.instance();
    const expected = {
      titleInput: '',
      bodyInput: 'body',
      quality: 'swill'
    };
    const mockedEvent = { 
      target: {
        value: 'body',
        name: 'bodyInput'
      } 
    }

    inputInst.setIdeaInput(mockedEvent);

    expect(renderedInput.state('idea')).toEqual(expected);
  })

  it('passes the idea in state to App when form is submitted', () => {
    const propFunction = jest.fn();
    const renderedInput = shallow(<Input setIdeaInState={ propFunction }/>);
    const inputInst = renderedInput.instance();
    const mockedEvent = { preventDefault: () => {} }

    inputInst.sendIdeaToApp(mockedEvent);

    expect(propFunction).toBeCalledWith(inputInst.state.idea)
  })

})
