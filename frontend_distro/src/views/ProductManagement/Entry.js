import React, { Component } from 'react';
import { Button, Card, CardBody, CardHeader, Col, Row, FormGroup, Label, CardFooter, Input } from 'reactstrap';
import { connect } from 'react-redux'
import { ProductSelectGetList, EntryAddAction } from './TransactionAction'
import { GetListAllTenants } from '../DataMasters/MasterDataAction'
import cookie from 'react-cookies';
import Toast from '../../MyComponent/notification/Toast'

class Entry extends Component {
  state = {
    barang_type_id: 0,
    place_from: 0,
    place_to: cookie.load('place_id'),
    jumlah: 0,
    created_by: cookie.load('id')
  }

  handleSave = async () => {
    let payload = this.state
    let EntryAdd = {}
    try {
      EntryAdd = await this.props.EntryAddAction(payload)
    } catch (error) {
      alert(error.massage)
    }

    if (EntryAdd.payload.status === 200) {
      Toast.success(`Success Send Data`)
      let x = document.getElementById("product")
      x.remove(x.selectedIndex);

      let tenantFrom = document.getElementById("tenantFrom")
      tenantFrom.remove(tenantFrom.selectedIndex);

      let tenantTo = document.getElementById("tenantTo")
      tenantTo.remove(tenantTo.selectedIndex);

      this.setState({ jumlah: 0 })
    }
  };

  componentWillMount() {
    try {
      this.props.ProductSelectGetList()
      // if (this.props.TransactionReducer.ManageAllProduct.dataSource.length === 0) {
      // }

      if (this.props.MasterData.Tenants.dataSource.length === 0) {
        this.props.GetListAllTenants()
      }

    } catch (error) {
      alert(error.massage)
    }
  }

  render() {
    const {
      icon,
      modul } = this.props.TransactionReducer.Entry;

    const Products = this.props.TransactionReducer.ManageAllProduct.dataSource
    const Tenants = this.props.MasterData.Tenants.dataSource
    let TenantSelected = Tenants.map((v, i) =>
      <option
        key={i} value={v.key}
        selected={(v.key === parseInt(cookie.load('place_id'))) ? 'selected' : ''}>
        {v.TenantName}
      </option>
    )
    let Tenant = Tenants.map((v, i) => 
      (v.key !== parseInt(cookie.load('place_id'))) ? <option key={i} value={v.key}> {v.TenantName}</option> : ''
    )
    let Product = Products.map((v, i) => <option key={i} value={v.key}> {v.Article} - {v.product_name} - {v.type}</option>)

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={12}>
            <Card>
              <CardHeader>
                <i className={icon}></i> {modul}
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Choose Type Product</Label>
                      <Input type="select" onChange={(e) => this.setState({ barang_type_id: e.target.value })} name="ccmonth" id="product" required>
                        <option value="1"> Choose Product</option>
                        {Product}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Place / Tenant From</Label>
                      <Input type="select" onChange={(e) => this.setState({ place_from: e.target.value })} name="ccmonth" id="tenantFrom" >
                        <option value="0"> Choose Gudang</option>
                        {Tenant}
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Place / Tenant To</Label>
                      <Input type="select" onChange={(e) => this.setState({ place_to: e.target.value })} name="ccmonth" id="tenantTo" disabled>
                        <option value="0"> Choose Gudang</option>
                        {TenantSelected}
                      </Input>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="3">
                    <FormGroup>
                      <Label htmlFor="name">Quantity</Label>
                      <Input type="number" value={this.state.jumlah} onChange={(e) => this.setState({ jumlah: e.target.value })} id="qty" />
                    </FormGroup>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <Button type="submit" onClick={this.handleSave} size="sm" color="success"><i className="fa fa-dot-circle-o" ></i> Submit</Button> &nbsp;
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  TransactionReducer: state.TransactionReducer,
  MasterData: state.MasterDataReducer
})
const mapDispatchToProps = { ProductSelectGetList, GetListAllTenants, EntryAddAction }
const connectRedux = connect(mapStateToProps, mapDispatchToProps)(Entry)

export default connectRedux;