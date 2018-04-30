import React from 'react';
import ReactDOM from 'react-dom';
import { read } from 'fs';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import App from './App';
import Input from './Input';
import IdeaList from './IdeaList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('App', () => {
  it('has a default state of an empty ideas array', () => {
    const renderedApp = shallow(<App />);
    const expected = [];

    expect(renderedApp.state('ideas')).toEqual(expected);
  })

  it('adds an idea object to the ideas array in state', () => {
    const renderedApp = shallow(<App />);
    const appInst = renderedApp.instance();
    const expected = ['idea'];

    appInst.setIdeaInState('idea');

    expect(renderedApp.state('ideas')).toEqual(expected);
  })

  it('renders an Input component with correct props', () => {
    const renderedApp = shallow(<App />);
    const expectedProps = { setIdeaInState: renderedApp.instance().setIdeaInState }

    expect(renderedApp.find(Input).length).toEqual(1);
    expect(renderedApp.find(Input).props()).toEqual(expectedProps);
  })

  it('renders an IdeaList component with correct props', () => {
    const renderedApp = shallow(<App />);
    const expectedProps = { ideasArray: [] }

    expect(renderedApp.find(IdeaList).length).toEqual(1);
    expect(renderedApp.find(IdeaList).props()).toEqual(expectedProps);
  })

})
