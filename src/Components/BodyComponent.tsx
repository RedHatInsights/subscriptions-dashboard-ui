import React from 'react';
import {
  Card,
  CardBody,
  Content,
  ContentVariants,
  Flex,
  FlexItem,
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
            <Content>
              <Content component={ContentVariants.h2}>
                See all your subscriptions
              </Content>
            </Content>
          </CardBody>
          <CardBody className="pf-u-pb-xs pf-u-mb-xs">
            <Content>
              <Content component={ContentVariants.h3}>
                Register your RHEL systems
              </Content>
              <Content
                className="pf-u-pb-xs pf-u-mb-xs"
                component={ContentVariants.p}
              >
                Get the full value of your RHEL subscriptions, including updates
                and security patches, through registration.
              </Content>
              <Content component={ContentVariants.ul}>
                <Content
                  component="li"
                  className="body-component--text-list-margins"
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
                </Content>
                <Content component="li">
                  Review registration alternatives and select the best option
                  for your workflow.{' '}
                  <a
                    target="_blank"
                    href="https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_rhel_system_registration/index"
                    rel="noreferrer"
                  >
                    {' '}
                    Learn more <ExternalLinkAltIcon />
                  </a>
                </Content>
              </Content>
            </Content>
          </CardBody>
          <CardBody className="body-component--flex-item body-component--text-list-margins">
            <Content>
              <Content component={ContentVariants.h3}>
                Activate Subscriptions Usage
              </Content>
              <Content component={ContentVariants.p}>
                Gain visibility into the usage of your subscriptions against
                your total capacity over time. Opt in to Subscriptions Usage
                today! &nbsp;
                <a
                  target="_blank"
                  href="https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_the_subscriptions_service/assembly-activating-opening-subscriptionwatch"
                  rel="noreferrer"
                >
                  Learn more <ExternalLinkAltIcon />
                </a>
              </Content>
            </Content>
          </CardBody>
          <CardBody className="body-component--flex-item pf-u-pt-md">
            <Content>
              <Content component={ContentVariants.h3}>
                Get the right usage data
              </Content>
              <Content component={ContentVariants.p}>
                Account-wide usage reporting relies on multiple data streams to
                power Subscriptions Usage. Make sure that the right data is
                flowing for accurate reporting. &nbsp;
                <a
                  target="_blank"
                  href="https://docs.redhat.com/en/documentation/subscription_central/1-latest/html/getting_started_with_the_subscriptions_service/assembly-setting-up-subscriptionwatch"
                  rel="noreferrer"
                >
                  Learn more <ExternalLinkAltIcon />
                </a>
              </Content>
            </Content>
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
