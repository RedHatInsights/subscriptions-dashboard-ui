import React from 'react';
import { Button, Card, Flex, FlexItem } from '@patternfly/react-core';
import './Overview.scss';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

const SubscriptionPortfolio = () => {
  return (
    <Flex
      display={{ default: 'inlineFlex' }}
      style={{ display: 'flex', alignItems: 'start', gap: '20px' }}
    >
      <FlexItem flex={{ default: 'flex_1' }}>
        <Card style={{ textAlign: 'center' }}>
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
            rel="noreferrer"
          >
            <Button style={{ background: 'white', padding: 0 }}>
              <img
                className="standard-image"
                src={require('../../static/images/rhel.svg')}
              ></img>
              <a
                target="_blank"
                href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
                rel="noreferrer"
              >
                Red Hat
              </a>
              <br />
              <a
                className="pf-u-pl-md pf-u-pr-md"
                target="_blank"
                href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
                rel="noreferrer"
              >
                Enterprise Linux
              </a>
            </Button>
          </a>
        </Card>
      </FlexItem>
      <FlexItem flex={{ default: 'flex_1' }}>
        <Card style={{ textAlign: 'center' }}>
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
            rel="noreferrer"
          >
            <Button style={{ background: 'white', padding: 0 }}>
              <img
                className="standard-image"
                src={require('../../static/images/openshift.svg')}
              ></img>
              <a
                target="_blank"
                href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
                rel="noreferrer"
              >
                Red Hat
              </a>
              <br />
              <a
                className="pf-u-pl-md pf-u-pr-md"
                target="_blank"
                href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
                rel="noreferrer"
              >
                OpenShift
              </a>
            </Button>
          </a>
        </Card>
      </FlexItem>
      <FlexItem flex={{ default: 'flex_1' }}>
        <Card style={{ textAlign: 'center' }}>
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/management/ansible"
            rel="noreferrer"
          >
            <Button style={{ background: 'white', padding: 0 }}>
              <img
                className="standard-image"
                src={require('../../static/images/ansible.svg')}
              ></img>
              <a
                target="_blank"
                href="https://www.redhat.com/en/technologies/management/ansible"
                rel="noreferrer"
              >
                Red Hat
              </a>
              <br />
              <a
                className="pf-u-pl-md pf-u-pr-md"
                target="_blank"
                href="https://www.redhat.com/en/technologies/management/ansible"
                rel="noreferrer"
              >
                Ansible Automation Platform
              </a>
            </Button>
          </a>
        </Card>
      </FlexItem>
      <FlexItem
        flex={{ default: 'flex_1' }}
        className="subscription-card-margin"
      >
        <Card style={{ textAlign: 'center' }}>
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/all-products"
            rel="noreferrer"
          >
            <Button style={{ background: 'white', padding: 0 }}>
              <PlusCircleIcon
                className="standard-image"
                style={{ color: 'gray' }}
              />
              <a
                target="_blank"
                href="https://www.redhat.com/en/technologies/all-products"
                rel="noreferrer"
              >
                View all
              </a>
              <br />
              <a
                className="pf-u-pl-md pf-u-pr-md"
                target="_blank"
                href="https://www.redhat.com/en/technologies/all-products"
                rel="noreferrer"
              >
                Red Hat Products
              </a>
            </Button>
          </a>
        </Card>
      </FlexItem>
    </Flex>
  );
};

export default SubscriptionPortfolio;
