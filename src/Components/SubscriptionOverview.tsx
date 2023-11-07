import React from 'react';

import {
  Stack,
  StackItem,
  Text,
  TextContent,
  TextVariants,
} from '@patternfly/react-core';

import { Main } from '@redhat-cloud-services/frontend-components/Main';

import './Overview.scss';
import TopCard from './TopCard';
import SubscriptionPortfolio from './SubscriptionPortfolio';
import Dropdown from './Dropdown';
import BodyComponent from './BodyComponent';

const SubscriptionOverview = () => (
  <React.Fragment>
    <TopCard />
    <Main>
      <Stack hasGutter>
        <StackItem>
          <BodyComponent />
        </StackItem>
        <StackItem>
          <TextContent>
            <Text component={TextVariants.h2}>
              Build your subscription portfolio
            </Text>
            <Text>
              Buy subscriptions for your workloads. We give you data that drives
              your decisions.
            </Text>
          </TextContent>
        </StackItem>
        <StackItem>
          <SubscriptionPortfolio />
        </StackItem>
        <StackItem className="pf-u-mt-sm">
          <Dropdown />
        </StackItem>
      </Stack>
    </Main>
  </React.Fragment>
);

export default SubscriptionOverview;
