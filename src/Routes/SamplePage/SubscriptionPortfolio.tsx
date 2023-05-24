import React from 'react';
import {
  Card,
  Flex,
  FlexItem,
  Button
} from '@patternfly/react-core';
import './sample-page.scss';
import AppLink from '../../Components/AppLink';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

const SubscriptionPortfolio = () => {
    return (
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/rhel.jpg') }></img>
                  <AppLink to="/">Red Hat<br />Enterprise Linux</AppLink>
                </Card>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/openshift.jpg') }></img>
                  <AppLink to="/">Red Hat<br />OpenShift</AppLink>
                </Card>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <img className='standardImage' src= { require('../../../static/images/ansible.jpg') }></img>
                  <AppLink to="/">Red Hat<br />Ansible Automation Platform</AppLink>
                </Card>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                  <PlusCircleIcon className='standardImage' />
                  <AppLink to="/">View all<br />Red Hat Products</AppLink>
                </Card>
              </FlexItem>
            </Flex>
    );
}

export default SubscriptionPortfolio;