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
  FlexItem,
  List,
  ListItem
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
            <CardBody>
                <p className='headingFont bottomMargins'>Welcome to Subscription services</p>
                <p className='bodyFont' style={{ marginRight: '80px' }}>Empower your buying decisions with data. Subscription services provide reporting that is designed to make your subscription choices data-driven</p>
            </CardBody>
          </FlexItem>
        </Flex>
      </Card>
      <Main>
        <Stack hasGutter>
          <StackItem>
          <Card>
            <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'end' }}>
              <FlexItem flex={{ default: 'flex_3' }}>
              <CardBody className='headingFont'>See all your subscriptions</CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Register your RHEL systems</p>
                  <p className='bodyFont bottomMargins'>Get the full value of your RHEL subscriptions, including updates and security patches, through registration</p>
                  <List>
                    <ListItem className='bodyFont'>For a guided registration experience, try the <AppLink to="/"> Registration Assistant</AppLink>.</ListItem>
                    <ListItem className='bodyFont'>Review registration alternatives and select the best option for your workflow. <AppLink to="/"> Learn more</AppLink>.</ListItem>
                  </List>
                </CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Activate Subscriptions Usage</p>
                  <p className='bodyFont'>
                  Gain visibility into the usage of your subcriptions against your total capacity over time. Opt in to Subcriptions Usage today! 
                  <AppLink to="/"> Learn more</AppLink>.
                  </p>
                </CardBody>
                <CardBody>
                  <p className='titleCard bottomMargins'>Get the right usage data</p>
                  <p className='bodyFont'>
                  Account-wide usage reporting relies on multiple data streams to power Subscriptions Usage. Make sure that the right data is flowing for accurate reporting. 
                  <AppLink to="/"> Learn more</AppLink>.
                  </p>
                </CardBody>
              </FlexItem>
              <FlexItem flex={{ default: 'flex_1' }} style={{ marginTop: '30px', height: "100%,", objectFit: 'cover'}}>
                <img src= { require('../../../static/images/subscriptionView.png') }></img>
              </FlexItem>
            </Flex>
          </Card>
          </StackItem>
          <StackItem>
            <p className='headingFont bottomMargins'>Build your subscription portfolio</p>
            <p className='bodyFont'>Buy subscriptions for your workloads. We give you data that drives your decisions.</p>
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
