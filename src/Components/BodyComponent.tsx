import React from 'react';
import {
  Card,
  CardBody,
  Flex,
  FlexItem,
  TextList,
  TextListItem,
  TextContent,
  Text,
  TextVariants,
  TextListVariants
} from '@patternfly/react-core';
import './Overview.scss';
import AppLink from './AppLink';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

const BodyComponent = () => {
    return (
      <Card>
          <Flex className='body-flex' display={{ default: 'inlineFlex' }}>
            <FlexItem className='flex-box'>
            <CardBody>
              <TextContent>
                <Text component={TextVariants.h2}>See all your subscriptions</Text>
              </TextContent>
            </CardBody>
              <CardBody style={{ paddingBottom: '0px', paddingTop: '0px' }}>
                <TextContent>
                  <Text className='bottom-margins' component={TextVariants.h3}>Register your RHEL systems</Text>
                  <Text className='bottom-margins'>Get the full value of your RHEL subscriptions, including updates and security patches, through registration.</Text>
                  <TextList component={TextListVariants.ul}>
                    <TextListItem>For a guided registration experience, try the <a target = "_blank" href="https://access.redhat.com/labs/registrationassistant/"> Registration Assistant <ExternalLinkAltIcon /></a></TextListItem>
                    <TextListItem>Review registration alternatives and select the best option for your workflow. <a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_rhel_system_registration/index"> Learn more <ExternalLinkAltIcon /></a></TextListItem>
                  </TextList>
                </TextContent>
              </CardBody>
              <CardBody className='flex-box' style={{ marginTop: '0px', paddingTop: '15px', marginBottom: '0px', paddingBottom: '0px'}}>
                <TextContent>
                  <Text className='bottom-margins' component={TextVariants.h3}>Activate Subscription Usage</Text>
                  <Text>
                  Gain visibility into the usage of your subcriptions against your total capacity over time. Opt in to Subcriptions Usage today!
                  &nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-activating-opening-subscriptionwatch">Learn more <ExternalLinkAltIcon /></a>
                  </Text>
                </TextContent>
              </CardBody>
              <CardBody className='flex-box' style={{ marginTop: '0px', paddingTop: '15px' }}>
                <TextContent>
                  <Text className='bottom-margins' component={TextVariants.h3}>Get the right usage data</Text>
                  <Text>
                  Account-wide usage reporting relies on multiple data streams to power Subscription Usage. Make sure that the right data is flowing for accurate reporting.
                  &nbsp;<a target="_blank" href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-setting-up-subscriptionwatch">Learn more <ExternalLinkAltIcon /></a>
                  </Text>
                </TextContent>
              </CardBody>
            </FlexItem>
            <FlexItem className='flex-image'>
              <img src= { require('../../static/images/subscriptionView.svg') }></img>
            </FlexItem>
          </Flex>
      </Card>
    );
};

export default BodyComponent;