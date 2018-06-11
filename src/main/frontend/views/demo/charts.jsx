import React, { Component } from 'react';
import { Page, Divider, Tabs } from 'epm-ui-react';
import { Gauge, Sankey, Bar, Line } from "epm-ui-react-graphics";

const page = {
  title: "图表组件示例",
};

class IndexPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      barData: ""
    };
    this.fetchBarData = this.fetchBarData.bind( this );
  }

  componentDidMount() {
    this.fetchBarData( "asdf" );
  }

  fetchBarData( args ) {
    let formdata = new FormData();
    formdata.append( 'args', args );
    fetch( "/demo/charts/bar", { method: 'POST', credentials: 'same-origin', body: formdata } )
      .then( ( res ) => res.json() )
      .then( ( barData ) => this.setState( { barData } ) )
      .catch( ( err ) => console.error( err.toString() ) );
  }

  render() {
    return (
      <Page>
        <Divider/>
        <Tabs>
          <Tabs.Item title="折线图">
              <Line dataSource={ this.state.barData } />
          </Tabs.Item>
          <Tabs.Item title="柱状图">
            <Bar dataSource={ this.state.barData } />
          </Tabs.Item>
          <Tabs.Item title="仪表图" >
            <Gauge dataSource="/demo/charts/gauge" />
          </Tabs.Item>
          <Tabs.Item title="桑基图">
            <Sankey dataSource="/demo/charts/sankey" />
          </Tabs.Item>
        </Tabs>
        </Page>
    );
  }
}

IndexPage.epmUIPage = page;

export default IndexPage;
export { IndexPage };