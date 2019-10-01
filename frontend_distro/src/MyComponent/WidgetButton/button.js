import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const ButtonComponent = ({ color, text,url }) => {
    return (
        <Link to={url}>
            <Button variant={color}>
                {text}
            </Button>
        </Link>
    )
}