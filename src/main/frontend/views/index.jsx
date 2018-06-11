import React, { Component } from 'react';
import { Divider, Table } from 'epm-ui-react';
import { CustomComponent } from '../components/Components';

const page = {
  title: "EPM UI"
};

class IndexPage extends Component {

  render() {
    return (
      <div>
        <h1>{ page.title }</h1>
        <p>Welcome to { page.title }</p>
        <Divider />
        <h4>Custom Component Example</h4>
        <Divider />
        <CustomComponent />
      </div>
    );
  }

}



export default IndexPage;
export { IndexPage };