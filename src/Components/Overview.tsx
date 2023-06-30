import React, { useEffect } from 'react';

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

/**
 * A smart component that handles all the api calls and data needed by the dumb components.
 * Smart components are usually classes.
 *
 * https://reactjs.org/docs/components-and-props.html
 * https://medium.com/@thejasonfile/dumb-components-and-smart-components-e7b33a698d43
 */
const SubscriptionOverview = () => {
  useEffect(() => {
    insights?.chrome?.appAction?.('sample-page');
  }, []);

  return (
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
                Buy subscriptions for your workloads. We give you data that
                drives your decisions.
              </Text>
            </TextContent>
          </StackItem>
          <StackItem>
            <SubscriptionPortfolio />
          </StackItem>
          <StackItem style={{ marginTop: '10px' }}>
            <Dropdown />
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default SubscriptionOverview;
