import React, { Component } from 'react';
import { Page,Tree } from 'epm-ui-react';

const page = {
  title: "IndexPage",
};

class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      args: ''
    };
    this.handleExpand = this.handleExpand.bind( this );
  }

  handleExpand( nodeId, node, others ) {
    this.setState( { args: nodeId } );
  }

  render() {
    const asyncPost = {
      type: "post",
      url: "/demo/advanced/treePost",
      autoParam: ['name'],
      otherParam: { 'otherParam': this.state.args }
    };

    return (
      <Page>
        <Tree async={ asyncPost }
              multiple={ false }
              onExpand={ this.handleExpand }
              capture={ this.state.capture }
        />
      </Page>
    );
  }
}

IndexPage.epmUIPage = page;

export default IndexPage;
export { IndexPage };