import React from 'react';
import {
  Card,
  CardBody,
  Content,
  ContentVariants,
  Divider,
  Flex,
  FlexItem,
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
            <Content>
              <Content component={ContentVariants.h1}>
                Welcome to Subscription Services
              </Content>
              <Content component={ContentVariants.p}>
                Empower your buying decisions with data. Subscription Services
                provide reporting that is designed to make your subscription
                choices data-driven.
              </Content>
            </Content>
          </CardBody>
        </FlexItem>
      </Flex>
    </Card>
  );
};

export default TopCard;
