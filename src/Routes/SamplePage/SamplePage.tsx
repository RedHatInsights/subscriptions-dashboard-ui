import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Spinner,
  Stack,
  StackItem,
} from '@patternfly/react-core';

import { Main } from '@redhat-cloud-services/frontend-components/Main';
import {
  PageHeader,
  PageHeaderTitle,
} from '@redhat-cloud-services/frontend-components/PageHeader';
import { addNotification } from '@redhat-cloud-services/frontend-components-notifications/redux';

const SampleComponent = lazy(
  () => import('../../Components/SampleComponent/sample-component')
);

import './sample-page.scss';
import AppLink from '../../Components/AppLink';
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
const SamplePage = () => {
  const dispatch = useDispatch();

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
            <p className='headingFont bottomMargins'>Build your subscription portfolio</p>
            <p className='bodyFont'>Buy subscriptions for your workloads. We give you data that drives your decisions.</p>
          </StackItem>
          <StackItem>
            <SubscriptionPortfolio />
          </StackItem>
          <StackItem style={{ marginTop: '10px' }}>
            <Dropdown />
          </StackItem>
          <StackItem>
            <Suspense fallback={<Spinner />}>
              <SampleComponent />
            </Suspense>
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default SamplePage;
