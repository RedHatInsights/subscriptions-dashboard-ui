import React from 'react';
import {
    Card,
    CardBody,
    Divider,
    Flex,
    FlexItem,
  } from '@patternfly/react-core';
import './sample-page.scss';

const TopCard = () => {
    return (
        <Card>
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
          <FlexItem style={{ marginTop: '30px', marginLeft: '20px'}}>
            <img className='topImage' src= { require('../../../static/images/subs.png') }></img>
          </FlexItem>
          <Divider orientation={{ default: 'vertical' }} style={{ marginLeft: '5px' , marginTop: '20px', marginBottom: '20px'}} />
          <FlexItem style={{ margin: '0px 0 0 0px', height: '150px'}}>
            <CardBody>
                <p className='headingFont bottomMargins'>Welcome to Subscription Services</p>
                <p className='bodyFont' style={{ marginRight: '80px' }}>Empower your buying decisions with data. Subscription services provide reporting that is designed to make your subscription choices data-driven</p>
            </CardBody>
          </FlexItem>
        </Flex>
      </Card>
    );
};

export default TopCard;
