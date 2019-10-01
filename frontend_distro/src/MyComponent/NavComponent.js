import React, { Component, Fragment } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { WidgetButton } from './Widgets';

export default class NavComponent extends Component {
    render() {
        let { brand } = this.props
        return (
            <Fragment>
                <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
                    <Navbar.Brand href="#home">{brand}</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} href="#memes">
                                <WidgetButton.ButtonComponent
                                    color="dark"
                                    text="Masuk"
                                    url="/login"
                                />&nbsp;
                                <WidgetButton.ButtonComponent
                                    color="outline-warning"
                                    text="Daftar"
                                    url="/register"
                                />
                                &nbsp;
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        )
    }
}
