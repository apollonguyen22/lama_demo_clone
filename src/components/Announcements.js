import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    text-align: center;
    line-height: 30px;
`

const Announcements = () => {
    return (
        <Container>
            Super Deal! Free Shipping on Order Over %50
        </Container>
    )
}

export default Announcements
