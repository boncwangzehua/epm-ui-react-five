import React, { Component } from 'react';
import { Container, Row, Form, Input, Button, Divider, Icon} from 'epm-ui-react';

class CustomComponent extends Component {

  constructor(props) {
    super(props);

    this.state = { items: [] };

    this.handleSubmit = this.handleSubmit.bind( this );
    this.handleAfterSubmit = this.handleAfterSubmit.bind(this);
  }

  handleSubmit( data ) {
    this.setState( ( prevState ) => {
      prevState.items.push( data.item );
      return {
        items: prevState.items
      }
    } );
    return false;
  }
  handleAfterSubmit(){
      console.log(1);
  }
  handleClose( index ) {
    this.setState( ( prevState ) => {
      prevState.items.splice( index, 1 );
      return {
        items: prevState.items
      }
    } );
  }

  render() {

    return (  
      <Container type="fluid">
        <Row>
          <Row.Col size={ 12 }>
            <h5>Todo List</h5>
            <Form type="inline" async={ true } action="" onAfterSubmit={ this.handleAfterSubmit } onSubmit={ this.handleSubmit }>
              <Form.Item name="name">
                <Input name="item" placeholder="New Todo" />
              </Form.Item>
              <Form.Item>
                  <Button type="primary" htmlType="submit">Add</Button>
              </Form.Item>
             </Form>
            <Divider />
            <p>{ this.state.items.length } to do</p>
            <Divider fitted />
            <Row>
              <Row.Col size={ 4 }>
                {
                  this.state.items.map( (item, index) => ( 
                      <Row key={ index }>
                        <Row.Col size={ 10 }>{ item }</Row.Col>
                        <Row.Col size={ 2 }>
                          <a className="epm col col-nm-2" type="icon" onClick={ this.handleClose.bind( this, index ) }>
                            <Icon icon="close" />
                          </a>
                        </Row.Col>
                      </Row> 
                    )
                  )
                }
              </Row.Col>
            </Row>
          </Row.Col>
        </Row>
      </Container>
    );
  }
}

export default CustomComponent;
export { CustomComponent }