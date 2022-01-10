import React, {useState, useEffect} from 'react'
import millify from 'millify'
import {Link} from 'react-router-dom'

import {useGetCryptosQuery} from '../services/cryptoApi'
import { Card, Col, Input, Row } from 'antd'

function Cryptocurrencies({simplified}) {

    const count = simplified ? 10 : 100;

    const {data: cryptosList, isFetching} = useGetCryptosQuery(count)

    const [cryptos, setCryptos] = useState([])

    const [searchTerm, setsearchTerm] = useState('')

    useEffect(() => {

      const filteredData = cryptosList?.data?.coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
      setCryptos(filteredData)

    }, [cryptosList, searchTerm])
    if (isFetching) return 'Loading...';

    return (
        <>
        {!simplified && (
            <div className='search-crypto'>
            <Input placeholder='search cryptocurrency' onChange={(e) => setsearchTerm(e.target.value)}/>
            </div>
        )}
        <Row gutter={[32,32]} className='crypto-card-container'>
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