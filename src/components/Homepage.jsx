
import { Col, Row, Statistic, Typography} from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
//formats large numbers
import millify from 'millify'

import {useGetCryptosQuery} from '../services/cryptoApi'
import {Cryptocurrencies, News} from '../components/index'

function Homepage() {

    // to use info from the store need to add data to an object with isFetching (time taken to retrieve info), and hook onto the function useCryptosQuery
    const {data, isFetching} = useGetCryptosQuery(10)

    // use ? syntax to avoid breaking the code
    const globalStats =  data?.data?.stats

    if (isFetching) return 'Loading...'

    return (
        <>
        <Typography.Title>Global Crypto Stats</Typography.Title>
        <Row>
        {/**Ant design has 24 colums therfore each col takes up half the screen space. Statistic element used to display data*** */}
            <Col span={12}><Statistic title='Total Crytocurrencies' value={millify(globalStats?.total)}/></Col>
            <Col span={12}><Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges)}/></Col>
            <Col span={12}><Statistic title='Total Market Cap' value={millify(globalStats?.totalMarketCap)}/></Col>
            <Col span={12}><Statistic title='Total 24h Volume' value={millify(globalStats?.total24hVolume)}/></Col>
            <Col span={12}><Statistic title='Total Markets' value={millify(globalStats?.totalMarkets)}/></Col>
        </Row>
        <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
            <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show More</Link></Typography.Title>
        </div>
        <Cryptocurrencies simplified/>
        <div className='home-heading-container'>
            <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
            <Typography.Title level={3} className='show-more'><Link to='/news'>Show More</Link></Typography.Title>
        </div>
        <News simplified/>
        </>
    )
}

export default Homepage
