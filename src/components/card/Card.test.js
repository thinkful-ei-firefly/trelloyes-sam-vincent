import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

//this is the test case
it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  //render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<Card title='titleTest' content='lorem ipsum' />, div);

  //clean up code
  ReactDOM.unmountComponentAtNode(div);
});


it('renders this UI as expected', () => {
    // Render the component, as JSON
    const tree = renderer.create(<Card title='titleTest' content='lorem ipsum' />).toJSON();
    // Check whether it matches the previous snapshot
    // Stored in __snapshots__/App.test.js.snap
    expect(tree).toMatchSnapshot(); 
});
