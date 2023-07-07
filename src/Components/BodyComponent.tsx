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
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import SubsIcon from '../../static/images/subscriptionView.svg';

const BodyComponent = () => {
  return (
    <Card>
      <Flex
        className="body-component__flex"
        display={{ default: 'inlineFlex' }}
      >
        <FlexItem className="body-component--flex-item">
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
                <TextListItem className="body-component--text-list-margins">
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
          <CardBody className="body-component--flex-item body-component--text-list-margins">
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
          <CardBody className="body-component--flex-item pf-u-pt-md">
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
        <FlexItem className="body-component--image">
          <img src={SubsIcon}></img>
        </FlexItem>
      </Flex>
    </Card>
  );
};

export default BodyComponent;
