import React, { Component } from 'react';
import { Button, Card, CardBody, CardFooter, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import { connect } from 'react-redux'
import { SubmitAdd } from '../../DataMasters/MasterDataAction'
import { SignInAction } from '../Login/AuthAction'

import Toast from '../../../MyComponent/notification/Toast'
import cookie from 'react-cookies'
import NotifSwal from '../../../MyComponent/notification/Swal'


class Register extends Component {
  state = {
    fullname: "",
    username: "",
    password: "",
    place_id:1,
	  role_id:1
  }

  createAccount = async () => {
    try {
      let data = this.state
      await this.props.SubmitAdd(data)
      await this.props.SignInAction(JSON.stringify(data))

      if (this.props.AuthReducer.Auth) {
        Toast.info(`Welcome to Distro Management Apps ${cookie.load('username')}`)
        window.location.href = "#/dashboard" 
      } else {
        NotifSwal.failed()
        this.props.history.push("/");
      }
    } catch (error) {
      alert(error.message)
    }
  }
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="7" xl="6">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Fullname" autoComplete="Fullname" onChange={(e)=>{this.setState({fullname:e.target.value})}}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-user"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="text" placeholder="Username" autoComplete="username" onChange={(e)=>{this.setState({username:e.target.value})}}/>
                    </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Password" autoComplete="new-password" onChange={(e)=>{this.setState({password:e.target.value})}}/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="icon-lock"></i>
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input type="password" placeholder="Repeat password" autoComplete="new-password" />
                    </InputGroup>
                    <Button color="success" onClick={this.createAccount} block>Create Account</Button>
                  </Form>
                </CardBody>
                <CardFooter className="p-4">
                  <Row>
                    <Col xs="12" sm="12">
                      <Button className="btn-danger mb-1" block><span>Daftar Melalui Google</span></Button>
                    </Col>
                  </Row>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}



const mapStateToProps = state => ({
  AuthReducer: state.AuthReducer
})

const mapDispatchToProps = { SubmitAdd, SignInAction }
const connectRedux = connect(mapStateToProps, mapDispatchToProps)(Register)

export default connectRedux;