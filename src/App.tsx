import React, { Fragment, useEffect } from 'react';
import NotificationsPortal from '@redhat-cloud-services/frontend-components-notifications/NotificationPortal';
import { useChrome } from '@redhat-cloud-services/frontend-components/useChrome';

import SubscriptionOverview from './Components/SubscriptionOverview';
import './App.scss';

const App = () => {
  const { updateDocumentTitle } = useChrome();

  useEffect(() => {
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
