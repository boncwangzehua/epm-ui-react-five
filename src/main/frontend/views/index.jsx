import React, { Component } from 'react';
import { Divider, Table } from 'epm-ui-react';
import { CustomComponent } from '../components/Components';

const page = {
  title: "EPM UI"
};

class IndexPage extends Component {
  render() {
      return
               [
                      // Don't forget the keys :)
                      <li key="A">First item</li>,
                      <li key="B">Second item</li>,
                      <li key="C">Third item</li>,
                ];
    
  }

}



export default IndexPage;
export { IndexPage };