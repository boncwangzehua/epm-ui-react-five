import React, { Component } from 'react';
import { Divider, Table } from 'epm-ui-react';
import { CustomComponent } from '../components/Components';
import { Line } from 'epm-ui-react-graphics';

const page = {
  title: "EPM UI"
};
const lineData = [
                  {
                    item: '北京',
                    data: [
                      {
                        key: '0',
                        value: 45
                      },
                      {
                        key: '1',
                        value: 20
                      },
                      {
                        key: '2',
                        value: 26
                      },
                      {
                        key: '3',
                        value: 20
                      },
                      {
                        key: '4',
                        value: 41
                      },
                      {
                        key: '5',
                        value: 20
                      },
                      {
                        key: '6',
                        value: 19
                      },
                      {
                        key: '7',
                        value: 20
                      },
                      {
                        key: '8',
                        value: 38
                      },
                      {
                        key: '9',
                        value: 20
                      },
                      {
                        key: '10',
                        value: 43
                      },
                      {
                        key: '11',
                        value: 20
                      }
                    ]
                  },
                  {
                    item: '浙江',
                    data: [
                      {
                        key: '0',
                        value: 45
                      },
                      {
                        key: '1',
                        value: 33
                      },
                      {
                        key: '2',
                        value: 23
                      },
                      {
                        key: '3',
                        value: 42
                      },
                      {
                        key: '4',
                        value: 14
                      },
                      {
                        key: '5',
                        value: 32
                      },
                      {
                        key: '6',
                        value: 35
                      },
                      {
                        key: '7',
                        value: 38
                      },
                      {
                        key: '8',
                        value: 40
                      },
                      {
                        key: '9',
                        value: 41
                      },
                      {
                        key: '10',
                        value: 18
                      },
                      {
                        key: '11',
                        value: 21
                      }
                    ]
                  }
                ];
class IndexPage extends Component {
  render() {
      return(
              <div>xxxx
                  <Divider>111</Divider>
                  <Line dataSource={ lineData } title="趋势变化" />
              </div>
      )
    
  }

}



export default IndexPage;
export { IndexPage };