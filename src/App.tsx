import React, { Fragment, useEffect } from 'react';
import { Reducer } from 'redux';
import { getRegistry } from '@redhat-cloud-services/frontend-components-utilities/Registry';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { notificationsReducer } from '@redhat-cloud-services/frontend-components-notifications/redux';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';

import SubscriptionOverview from './Components/SubscriptionOverview';
import './App.scss';

const App = () => {
  const { updateDocumentTitle } = useChrome();

  useEffect(() => {
    const registry = getRegistry();
    registry.register({ notifications: notificationsReducer as Reducer });
    // You can use directly the name of your app
    updateDocumentTitle('Subscriptions Dashboard');
  }, []);

  return (
    <Fragment>
      <NotificationsPortal />
      <SubscriptionOverview />
    </Fragment>
  );
};

export default App;
