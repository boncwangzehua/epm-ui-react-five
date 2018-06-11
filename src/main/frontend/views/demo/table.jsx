import React, { Component } from 'react';
import { Page, Divider, Table, Button, Select, Option, context } from 'epm-ui-react';

class IndexPage extends Component {
  render() {
    return (
      <Page>
        <Divider />
        <Table dataSource={ `${ context.contextPath }/demo/table/table` } multiLine={ true } striped={ true }>
          <Table.Column title="街道" dataIndex="street">
            { ( value ) => <a>{ value }</a> }
          </Table.Column>
          <Table.Column title="地址" dataIndex="village" />
          <Table.Column title="单元" dataIndex="unit">
            { ( value ) => <Button> vlaue </Button> }
          </Table.Column>
          <Table.Column title="复选框" dataIndex="boolean">
            { ( value ) =>
              <Select placeholder="Please select" >
                <Option value="1">Options 1 </Option>
                <Option value="2">Options 2 </Option>
                <Option value="3">Options 3 </Option>
                <Option value="4">Options 4 </Option>
                <Option value="5">Options 5 </Option>
              </Select>
            }
          </Table.Column>
        </Table>
      </Page>
    );
  }
  
}

IndexPage.epmUIPage = {
  title: "EPM UI"
};

export default IndexPage;
export { IndexPage };