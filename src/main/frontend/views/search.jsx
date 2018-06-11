import React, { Component } from 'react';
import { Page, Row, Container, Pagination, PagiTable, Modal, ModalBody, Label, Form, Button, Divider, Table, context, Input } from 'epm-ui-react';
class Search extends Component{
    constructor(props){
        super(props)
        this.handleSearch = this.handleSearch.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handlePageChange = this.handlePageChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.state = {
            total:props.total,
            pageIndex:1,
            InputValue:"",
            formData:{
                id:'',
                name:'',
                age:'',
                job:'',
                telephone:'',
                address:''
            },
            visible:false,
            requestPath:`${ context.contextPath }/tableData?index=1&size=5`,
        }
    }
    fetchPageTotal() {
        fetch && fetch( `${ context.contextPath }/getTableRows`, { credentials: 'same-origin' } )
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    total:data
                })
            });
    }

    handleSearch(){
        console.log(`${ context.contextPath }/index`);
        this.setState( ( previousState, currentProps ) => {
            return { requestPath:`${ context.contextPath }/tableData?index=1&size=5&requestPath=`+this.state.InputValue };
        }, () => {
            this.fetchPageTotal();
        } );
    }

    handleChange(value){
        this.setState({
            InputValue:value
        })

    }
    handlePageChange(index,size){
        this.setState({
            pageIndex:index,
            requestPath:`${ context.contextPath }/tableData?index=`+index+`&size=`+size+`&requestPath=`+this.state.InputValue
        })

    }
    handleUpdate(value){
        this.setState({
            visible:!this.state.visible,
            formData:{
                id:value.id,
                name:value.name,
                age:value.age,
                job:value.job,
                telephone:value.telephone,
                address:value.address
            },
        });

    }
    handleDelete(id,name){
        if(confirm("确定要删除"+name+"吗"))
        {
            this.setState({
                requestPath:`${ context.contextPath }/tableData?index=`+this.state.pageIndex+`&size=5&requestPath=`+this.state.InputValue+`&id=`+id
            });
        }
    }
    handleAdd(){
        this.setState({
            formData:{
                name:'',
                age:'',
                job:'',
                telephone:'',
                address:''
            },
            visible: !this.state.visible
        })
    }
    handleClose(){
        console.log(this.state.visible);
        this.setState({
            visible: !this.state.visible
        })
    }
    render(){
        return(
            <Page>
                <Container type="fixed">
                    <Divider/>
                    <Row>
                        <Row.Col size={10}>
                            <Label>搜索框</Label>
                            <Input placeholder="请输入搜索内容" type="search" name="search" onChange={this.handleChange}/>
                            <Button type="default" onClick={this.handleSearch}>搜索</Button>
                            <Button type="default" onClick={this.handleAdd}>增加</Button>
                        </Row.Col>
                    </Row>
                    <Divider/>
                    <Modal visible={ this.state.visible } onClose={ this.handleClose} >
                        <Modal.Body>
                            <Form method="post" action={`${context.contextPath}/submitData`} >
                                <Form.Item>
                                    <Input type="text" name="id" value={this.state.formData.id} />
                                </Form.Item>
                                <Form.Item>
                                    <Label>姓名</Label>
                                    <Input type="text" name="name" value={this.state.formData.name} />
                                </Form.Item>
                                <Form.Item>
                                    <Label>年龄</Label>
                                    <Input type="text" name="age" value={this.state.formData.age}/>
                                </Form.Item>
                                <Form.Item>
                                    <Label>工作</Label>
                                    <Input type="text" name="job" value={this.state.formData.job}/>
                                </Form.Item>
                                <Form.Item>
                                    <Label>电话</Label>
                                    <Input type="text" name="telephone" value={this.state.formData.telephone}/>
                                </Form.Item>
                                <Form.Item>
                                    <Label>地址</Label>
                                    <Input type="text" name="address" value={this.state.formData.address}/>
                                </Form.Item>
                                <Button type="primary" htmlType="submit" onClick={this.handleClose}>提交</Button>
                                <Button type="default" onClick={this.handleClose}>取消</Button>
                            </Form>
                        </Modal.Body>
                    </Modal>
                    <Row>
                        <Row.Col size={10}>
                            <Table dataSource={ this.state.requestPath } fixed={true}>
                                <Table.Column title="姓名" dataIndex="name"/>
                                <Table.Column title="年龄" dataIndex="age"/>
                                <Table.Column title="工作" dataIndex="job"/>
                                <Table.Column title="电话" dataIndex="telephone"/>
                                <Table.Column title="地址" dataIndex="address"/>
                                <Table.Column title="操作">
                                    {(value) =>
                                        <div>
                                            <Button type="primary" onClick={this.handleUpdate.bind(this,value)}>修改</Button>
                                            <Button type="danger" onClick={this.handleDelete.bind(this,value.id,value.name)}>删除</Button>
                                        </div>
                                    }
                                </Table.Column>
                            </Table>
                        </Row.Col>
                    </Row>
                    <Divider/>
                    <Row>
                        <Row.Col size={4}></Row.Col>
                        <Row.Col size={8}>
                            <Pagination index={this.state.pageIndex} total={this.state.total} pages={5} size={5} onChange={this.handlePageChange}/>
                        </Row.Col>
                    </Row>
                </Container>
            </Page>
        )
    }
}
export default Search;
export {Search}
