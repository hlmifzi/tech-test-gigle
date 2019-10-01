
import React, { Component, Fragment } from 'react'
import Nav from '../../MyComponent/NavComponent';
import { Container } from 'react-bootstrap'
import { WidgetCarousel, WidgetCard, WidgetFooter } from "../../MyComponent/Widgets";
import { connect } from 'react-redux'
import { ProductGetList } from '../../views/ProductManagement/TransactionAction'


const Brand = "/assets/img/logo.png";

class Landing_page extends Component {

  state = {
    brand: <img src={Brand} width="50px" alt="logo" />,
    carousel: [
      {
        imageUrl: "https://www.desaindistro.com/wp-content/uploads/2018/06/SLIDER_desain-kaos-distro-wanita-02.jpg",
        mainText: "Jualan Baju",
        descText:"Diskon Up to 50%"
      },
      {
        imageUrl: "https://www.desaindistro.com/wp-content/uploads/2018/06/SLIDER_desain-kaos-distro-pria-01-2.jpg",
        mainText: "Jualan Baju",
        descText:"Diskon Up to 50%"
      },
    ]

  }

  async componentDidMount() {
    try {
      this.props.ProductGetList()
    } catch (error) {
      alert(error.message)
    }
  }
  
  render() {
    let { brand, carousel } = this.state
    
    let Card = this.props.CardReducer

    return (
      <Fragment>
        <Nav brand={brand} />
        <WidgetCarousel.carouselSkeleton datas={carousel} />
        <Container>
          <WidgetCard.CardSellSkeleton datas={Card}/>
        </Container>
        <WidgetFooter.Footer />
      </Fragment >
    )
  }
}



const mapStateToProps = state => ({
  CardReducer: state.TransactionReducer.ManageAllProduct.dataSource
})

const mapDispatchToProps = {
  ProductGetList
}
const connectRedux = connect(mapStateToProps, mapDispatchToProps)(Landing_page)

export default connectRedux;
