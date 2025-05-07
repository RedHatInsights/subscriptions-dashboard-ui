import React from 'react';

import {
  Content,
  ContentVariants,
  Stack,
  StackItem,
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
          <Content>
            <Content component={ContentVariants.h2}>
              Build your subscription portfolio
            </Content>
            <Content component="p">
              Buy subscriptions for your workloads. We give you data that drives
              your decisions.
            </Content>
          </Content>
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
