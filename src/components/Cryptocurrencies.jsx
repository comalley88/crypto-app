import React, {useState, useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'

import {useGetCryptosQuery} from '../services/cryptoApi'
import { Card, Col, Input, Row } from 'antd'

// si^mplified passed to child elements through props. By default if it isnt set to a value it reads as true 
function Cryptocurrencies({simplified}) {

    // in a 'simplified' view count is equal to 10 else its equal to 100
    const count = simplified ? 10 : 100;
    // pass count to query 
    const {data: cryptosList, isFetching} = useGetCryptosQuery(count)

    const [cryptos, setCryptos] = useState([])

    const [searchTerm, setsearchTerm] = useState('')

    useEffect(() => {
// filters out only the searched coin in the filtered list 
      const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setCryptos(filteredData)
// use effect is executed whenever one of the variables changes below in brackets 
    }, [cryptosList, searchTerm])
    
    if (isFetching) return 'Loading...';

    return (
        <>
        {/*******************************included only when not on the home page************************ */}
        {!simplified && (
            <div className='search-crypto'>
            <Input placeholder='search cryptocurrency' onChange={(e) => setsearchTerm(e.target.value)}/>
            </div>
        )}
        {/*********************************gutters are spaces between items *************************/}
        <Row gutter={[32,32]} className='crypto-card-container'>
        {/*****************************always need to add a key when looping over an array***************** */}
        {cryptos?.map((crypto) => (
            <Col xs={24} sm={12} lg={6} className='crypto-card' key={crypto.id}>
                <Link to={`/crypto/${crypto.id}`}>
                    <Card 
                    title={`${crypto.rank}. ${crypto.name}`}
                    extra={<img className='crypto-image' src={crypto.iconUrl}/>}
                    hoverable
                    >
                        <p>Price: {millify(crypto.price)}</p>
                        <p>Market Cap: {millify(crypto.marketCap)}</p>
                        <p>Daily Change: {millify(crypto.change)}%</p>
                    </Card>
                </Link>
            </Col>
        ))}
        </Row>
        </>
    )
}

export default Cryptocurrencies
