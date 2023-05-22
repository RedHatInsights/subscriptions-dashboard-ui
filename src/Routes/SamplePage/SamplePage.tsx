import React, { Suspense, lazy, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  Button,
  Spinner,
  Stack,
  StackItem,
  Title,
  Card,
  CardTitle,
  CardBody,
  Divider,
  Flex,
  FlexItem
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

  const handleAlert = () => {
    dispatch(
      addNotification({
        variant: 'success',
        title: 'Notification title',
        description: 'notification description',
      })
    );
  };

  return (
    <React.Fragment>
      <Card>
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
          <FlexItem style={{ marginTop: '30px', marginLeft: '20px'}}>
            <img style={{ height: "100%", width:"75px", objectFit: 'cover' }} src= { require('../../../static/images/Product_icon-Red_Hat-Generic-Service-RGB.png') }></img>
          </FlexItem>
          <Divider orientation={{ default: 'vertical' }} style={{ marginLeft: '5px' , marginTop: '20px', marginBottom: '20px'}} />
          <FlexItem style={{ margin: '0px 0 0 0px', height: '150px'}}>
            <CardBody style={{ fontWeight: "bold", fontSize: "25px" }}>Welcome to Subcription services</CardBody>
            <CardBody style={{ marginRight: '100px' }}>Empower your buying decisions with data. Subscription services provide reporting that is designed to make your subscription choices data-driven</CardBody>
          </FlexItem>
        </Flex>
      </Card>
      <Main>
        <Stack hasGutter>
          <StackItem>
            <Title headingLevel="h2" size="3xl">
              {' '}
              Alerts{' '}
            </Title>
            <Button variant="primary" onClick={handleAlert}>
              {' '}
              Dispatch alert{' '}
            </Button>
          </StackItem>
          <StackItem>
            <Suspense fallback={<Spinner />}>
              <SampleComponent />
            </Suspense>
          </StackItem>
          <StackItem>
            <Stack hasGutter>
              <StackItem>
                <Title headingLevel="h2" size="3xl">
                  {' '}
                  Links{' '}
                </Title>
              </StackItem>
              <StackItem>
                <AppLink to="/oops"> How to handle 500s in app </AppLink>
              </StackItem>
              <StackItem>
                <AppLink to="/no-permissions">
                  How to handle 403s in app
                </AppLink>
              </StackItem>
            </Stack>
          </StackItem>
        </Stack>
      </Main>
    </React.Fragment>
  );
};

export default SamplePage;
