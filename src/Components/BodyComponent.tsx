import React from 'react';
import {
  Card,
  CardBody,
  Flex,
  FlexItem,
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextListVariants,
  TextVariants,
} from '@patternfly/react-core';
import './Overview.scss';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/esm/icons/external-link-alt-icon';

const BodyComponent = () => {
  return (
    <Card>
      <Flex className="body-flex" display={{ default: 'inlineFlex' }}>
        <FlexItem className="flex-box">
          <CardBody>
            <TextContent>
              <Text component={TextVariants.h2}>
                See all your subscriptions
              </Text>
            </TextContent>
          </CardBody>
          <CardBody className="pf-u-pb-xs pf-u-mb-xs">
            <TextContent>
              <Text component={TextVariants.h3}>
                Register your RHEL systems
              </Text>
              <Text
                className="pf-u-pb-xs pf-u-mb-xs"
                component={TextVariants.p}
              >
                Get the full value of your RHEL subscriptions, including updates
                and security patches, through registration.
              </Text>
              <TextList component={TextListVariants.ul}>
                <TextListItem
                  style={{
                    marginTop: '0px',
                    marginBottom: '0px',
                    paddingTop: '0px',
                    paddingBottom: '0px',
                  }}
                >
                  For a guided registration experience, try the{' '}
                  <a
                    target="_blank"
                    href="https://access.redhat.com/labs/registrationassistant/"
                    rel="noreferrer"
                  >
                    {' '}
                    Registration Assistant <ExternalLinkAltIcon />
                  </a>
                </TextListItem>
                <TextListItem>
                  Review registration alternatives and select the best option
                  for your workflow.{' '}
                  <a
                    target="_blank"
                    href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_rhel_system_registration/index"
                    rel="noreferrer"
                  >
                    {' '}
                    Learn more <ExternalLinkAltIcon />
                  </a>
                </TextListItem>
              </TextList>
            </TextContent>
          </CardBody>
          <CardBody
            className="flex-box"
            style={{
              marginTop: '0px',
              marginBottom: '0px',
              paddingTop: '0px',
              paddingBottom: '0px',
            }}
          >
            <TextContent>
              <Text component={TextVariants.h3}>
                Activate Subscription Usage
              </Text>
              <Text component={TextVariants.p}>
                Gain visibility into the usage of your subcriptions against your
                total capacity over time. Opt in to Subcriptions Usage today!
                &nbsp;
                <a
                  target="_blank"
                  href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-activating-opening-subscriptionwatch"
                  rel="noreferrer"
                >
                  Learn more <ExternalLinkAltIcon />
                </a>
              </Text>
            </TextContent>
          </CardBody>
          <CardBody className="flex-box pf-u-pt-md">
            <TextContent>
              <Text component={TextVariants.h3}>Get the right usage data</Text>
              <Text component={TextVariants.p}>
                Account-wide usage reporting relies on multiple data streams to
                power Subscription Usage. Make sure that the right data is
                flowing for accurate reporting. &nbsp;
                <a
                  target="_blank"
                  href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-setting-up-subscriptionwatch"
                  rel="noreferrer"
                >
                  Learn more <ExternalLinkAltIcon />
                </a>
              </Text>
            </TextContent>
          </CardBody>
        </FlexItem>
        <FlexItem className="flex-image">
          <img src={require('../../static/images/subscriptionView.svg')}></img>
        </FlexItem>
      </Flex>
    </Card>
  );
};

export default BodyComponent;
