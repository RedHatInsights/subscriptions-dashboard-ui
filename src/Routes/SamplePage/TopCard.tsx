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
          <FlexItem style={{ marginTop: '30px', marginLeft: '20px', marginRight: '5px'}}>
            <img className='topImage' src= { require('../../../static/images/subs.png') }></img>
          </FlexItem>
          <Divider orientation={{ default: 'vertical' }} style={{ margin: '30px 0px 30px 20px' }} />
          <FlexItem style={{ margin: '0px 20% 0px 0px', height: '150px'}}>
            <CardBody>
                <p className='headingFont bottomMargins'>Welcome to Subscription Services</p>
                <p className='bodyFont'>Empower your buying decisions with data. Subscription services provide reporting that is designed to make your subscription choices data-driven</p>
            </CardBody>
          </FlexItem>
        </Flex>
      </Card>
    );
};

export default TopCard;

