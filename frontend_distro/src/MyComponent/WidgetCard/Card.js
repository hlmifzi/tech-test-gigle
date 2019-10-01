import React from "react";
import { CardDeck, Card } from 'react-bootstrap'
import Skeleton from 'react-loading-skeleton'
import NumberFormat from 'react-number-format'

export const CardSellSkeleton = ({ datas }) => {
    console.log(datas);

    let data = datas.map((v, i) => {
        return (
            <div className="col-md-3 col-xs-12 cardSell">
                <Card key={i}>
                    <div style={{ fontSize: 20, lineHeight: 2 }}>
                        {<Card.Img variant="top" src="https://grosirkaosdistrobandung14.com/wp-content/uploads/2019/04/grosir-kaos-distro-bandung-1-260x280.jpg" /> || <Skeleton count={10} />}
                    </div>
                    <Card.Body>
                        <Card.Title>{v.product_name}</Card.Title>
                        <Card.Text>
                            <b>
                                <NumberFormat value={v.normal_price} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
                            </b>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    })

    return (
        <CardDeck>
            {data}
        </CardDeck>
    )
}

