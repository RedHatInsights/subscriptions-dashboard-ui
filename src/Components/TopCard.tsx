import React from 'react';
import {
    Card,
    CardBody,
    Divider,
    Flex,
    FlexItem,
    TextContent,
    Text,
    TextVariants
  } from '@patternfly/react-core';
import './Overview.scss';

const TopCard = () => {
    return (
      <Card>
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
          <FlexItem className='title-card-left-flex'>
            <img className='top-image' src= { require('../../static/images/subs.png') }></img>
          </FlexItem>
          <Divider orientation={{ default: 'vertical' }} className='divider' />
          <FlexItem className='title-card-right-flex' style={{ flex: '8' }}>
            <CardBody>
              <TextContent>
                <Text className='bottom-margins' component={ TextVariants.h1 }>Welcome to Subscription Services</Text>
                <Text>Empower your buying decisions with data. Subscription services provide reporting that is designed to make your subscription choices data-driven.</Text>
              </TextContent>
            </CardBody>
          </FlexItem>
        </Flex>
      </Card>
    );
};

export default TopCard;

