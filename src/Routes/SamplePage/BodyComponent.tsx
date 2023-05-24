import React, { Suspense, lazy, useEffect } from 'react';
import {
  Card,
  CardBody,
  Flex,
  FlexItem,
  List,
  ListItem
} from '@patternfly/react-core';
import './sample-page.scss';
import AppLink from '../../Components/AppLink';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

const BodyComponent = () => {
    return (
        <Card>
            <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'end' }}>
              <FlexItem flex={{ default: 'flex_3' }}>
              <CardBody className='headingFont'>See all your subscriptions</CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Register your RHEL systems</p>
                  <p className='bodyFont bottomMargins'>Get the full value of your RHEL subscriptions, including updates and security patches, through registration</p>
                  <List>
                    <ListItem className='bodyFont'>For a guided registration experience, try the <AppLink to="/"> Registration Assistant <ExternalLinkAltIcon /></AppLink></ListItem>
                    <ListItem className='bodyFont'>Review registration alternatives and select the best option for your workflow. <AppLink to="/"> Learn more <ExternalLinkAltIcon /></AppLink></ListItem>
                  </List>
                </CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Activate Subscription Usage</p>
                  <p className='bodyFont'>
                  Gain visibility into the usage of your subcriptions against your total capacity over time. Opt in to Subcriptions Usage today!
                  &nbsp;<AppLink to="/">Learn more <ExternalLinkAltIcon /></AppLink>
                  </p>
                </CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Get the right usage data</p>
                  <p className='bodyFont'>
                  Account-wide usage reporting relies on multiple data streams to power Subscription Usage. Make sure that the right data is flowing for accurate reporting.
                  &nbsp;<AppLink to="/">Learn more <ExternalLinkAltIcon /></AppLink>
                  </p>
                </CardBody>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_2' }} style={{ marginTop: '30px', height: "100%,", objectFit: 'cover'}}>
                <img src= { require('../../../static/images/subscriptionView.png') }></img>
              </FlexItem>
            </Flex>
        </Card>
    );
};

export default BodyComponent;