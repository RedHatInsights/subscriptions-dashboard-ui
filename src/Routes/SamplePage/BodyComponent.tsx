import React from 'react';
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
            <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', alignItems: 'end' }}>
              <FlexItem className='flexBox'>
              <CardBody className='headingFont flexBox'>See all your subscriptions</CardBody>
                <CardBody style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                  <p className='titleCard bottomMargins'>Register your RHEL systems</p>
                  <p className='bodyFont bottomMargins'>Get the full value of your RHEL subscriptions, including updates and security patches, through registration</p>
                  <List className='listItems'>
                    <ListItem style={{ fontSize: '15px' }}>For a guided registration experience, try the <a target = "_blank" href="https://access.redhat.com/labs/registrationassistant/"> Registration Assistant <ExternalLinkAltIcon /></a></ListItem>
                    <ListItem style={{ fontSize: '15px' }}>Review registration alternatives and select the best option for your workflow. <a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_rhel_system_registration/index"> Learn more <ExternalLinkAltIcon /></a></ListItem>
                  </List>
                </CardBody>
                <CardBody className='flexBox' style={{ marginTop: '0px', paddingTop: '15px', marginBottom: '0px', paddingBottom: '0px'}}>
                  <p className='titleCard bottomMargins'>Activate Subscription Usage</p>
                  <p className='bodyFont'>
                  Gain visibility into the usage of your subcriptions against your total capacity over time. Opt in to Subcriptions Usage today!
                  &nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-activating-opening-subscriptionwatch">Learn more <ExternalLinkAltIcon /></a>
                  </p>
                </CardBody>
                <CardBody className='flexBox' style={{ marginTop: '0px', paddingTop: '15px' }}>
                  <p className='titleCard bottomMargins'>Get the right usage data</p>
                  <p className='bodyFont'>
                  Account-wide usage reporting relies on multiple data streams to power Subscription Usage. Make sure that the right data is flowing for accurate reporting.
                  &nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-setting-up-subscriptionwatch">Learn more <ExternalLinkAltIcon /></a>
                  </p>
                </CardBody>
              </FlexItem>
              <FlexItem className='flexImage' style={{ maxHeight: "100%", maxWidth: "100%", marginRight: '15px', paddingBottom: '15px', height: "auto,", objectFit: 'cover', marginLeft: '10px', padding: '0px'}}>
                <img src= { require('../../../static/images/subscriptionViewCOPY.png') }></img>
              </FlexItem>
            </Flex>
        </Card>
    );
};

export default BodyComponent;