import React from 'react';
import {
  Card,
  CardBody,
  Divider,
  Flex,
  FlexItem,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';
import './Overview.scss';
import SubsIcon from '../../static/images/subs.svg';

const TopCard = () => {
  return (
    <Card>
      <Flex display={{ default: 'inlineFlex' }} className="top-card--flex">
        <FlexItem className="top-card--left-flex">
          <img className="top-card__image" src={SubsIcon}></img>
        </FlexItem>
        <Divider
          orientation={{ default: 'vertical' }}
          className="top-card__divider"
        />
        <FlexItem className="top-card--right-flex">
          <CardBody>
            <TextContent>
              <Text component={TextVariants.h1}>
                Welcome to Subscriptions Services
              </Text>
              <Text component={TextVariants.p}>
                Empower your buying decisions with data. Subscription services
                provide reporting that is designed to make your subscription
                choices data-driven.
              </Text>
            </TextContent>
          </CardBody>
        </FlexItem>
      </Flex>
    </Card>
  );
};

export default TopCard;
