import React from 'react';
import { Button, Card, Flex, FlexItem } from '@patternfly/react-core';
import './Overview.scss';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

const SubscriptionPortfolio = () => {
  return (
    <Flex
      display={{ default: 'inlineFlex' }}
      className="subscription-portfolio--flex"
    >
      <FlexItem flex={{ default: 'flex_1' }}>
        <Card className="subscription-portfolio__card">
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
            rel="noreferrer"
          >
            <Button className="subscription-portfolio__button">
              <img
                className="subscription-portfolio--image-size"
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
        <Card className="subscription-portfolio__card">
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
            rel="noreferrer"
          >
            <Button className="subscription-portfolio__button">
              <img
                className="subscription-portfolio--image-size"
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
        <Card className="subscription-portfolio__card">
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/management/ansible"
            rel="noreferrer"
          >
            <Button className="subscription-portfolio__button">
              <img
                className="subscription-portfolio--image-size"
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
        <Card className="subscription-portfolio__card">
          <a
            className="portfolio-flex"
            target="_blank"
            href="https://www.redhat.com/en/technologies/all-products"
            rel="noreferrer"
          >
            <Button className="subscription-portfolio__button">
              <PlusCircleIcon className="subscription-portfolio--image-size subscription-portfolio--icon-color" />
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
