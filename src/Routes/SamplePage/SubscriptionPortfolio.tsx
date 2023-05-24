import React from 'react';
import {
  Card,
  Flex,
  FlexItem,
  Button
} from '@patternfly/react-core';
import './sample-page.scss';
import AppLink from '../../Components/AppLink';

const SubscriptionPortfolio = () => {
    return (
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/subs.png') }></img>
                  <AppLink to="/">Red Hat<br />Enterprise Linux</AppLink>
                </Card>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/subs.png') }></img>
                  <AppLink to="/">Red Hat<br />OpenShift</AppLink>
                </Card>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/subs.png') }></img>
                  <AppLink to="/">Red Hat<br />Ansible Automation Platform</AppLink>
                </Card>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/subs.png') }></img>
                  <AppLink to="/">View all<br />Red Hat Products</AppLink>
                </Card>
              </FlexItem>
            </Flex>
    );
}

export default SubscriptionPortfolio;