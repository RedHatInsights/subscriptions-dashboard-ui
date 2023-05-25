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
            <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'end' }}>
              <FlexItem flex={{ default: 'flex_3' }}>
              <CardBody className='headingFont'>See all your subscriptions</CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Register your RHEL systems</p>
                  <p className='bodyFont bottomMargins'>Get the full value of your RHEL subscriptions, including updates and security patches, through registration</p>
                  <List>
                    <ListItem className='bodyFont'>For a guided registration experience, try the <a target = "_blank" href="https://access.redhat.com/labs/registrationassistant/"> Registration Assistant <ExternalLinkAltIcon /></a></ListItem>
                    <ListItem className='bodyFont'>Review registration alternatives and select the best option for your workflow. <a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_rhel_system_registration/index"> Learn more <ExternalLinkAltIcon /></a></ListItem>
                  </List>
                </CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Activate Subscription Usage</p>
                  <p className='bodyFont'>
                  Gain visibility into the usage of your subcriptions against your total capacity over time. Opt in to Subcriptions Usage today!
                  &nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-activating-opening-subscriptionwatch">Learn more <ExternalLinkAltIcon /></a>
                  </p>
                </CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Get the right usage data</p>
                  <p className='bodyFont'>
                  Account-wide usage reporting relies on multiple data streams to power Subscription Usage. Make sure that the right data is flowing for accurate reporting.
                  &nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-setting-up-subscriptionwatch">Learn more <ExternalLinkAltIcon /></a>
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