import React from 'react';
import { Button, Card, Flex, FlexItem } from '@patternfly/react-core';
import './Overview.scss';
import PlusCircleIcon from '@patternfly/react-icons/dist/js/icons/plus-circle-icon';

import RHELIcon from '../../static/images/rhel.svg';
import OpenShiftIcon from '../../static/images/openshift.svg';
import AnsibleIcon from '../../static/images/ansible.svg';

const PortfolioCard = ({
  href,
  src,
  product,
}: {
  product: string;
  src: string;
  href: string;
}) => (
  <FlexItem flex={{ default: 'flex_1' }}>
    <Card className="subscription-portfolio__card">
      <a
        className="subscription-portfolio__card-padding"
        target="_blank"
        href={href}
        rel="noreferrer"
      >
        <Button className="subscription-portfolio__button">
          <img className="subscription-portfolio--image-size" src={src}></img>
          <span>Red Hat</span>
          <br />
          <span className="pf-u-pl-md pf-u-pr-md">{product}</span>
        </Button>
      </a>
    </Card>
  </FlexItem>
);

const SubscriptionPortfolio = () => {
  return (
    <Flex
      display={{ default: 'inlineFlex' }}
      className="subscription-portfolio--flex"
    >
      <PortfolioCard
        href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux"
        src={RHELIcon}
        product="Enterprise Linux"
      />
      <PortfolioCard
        href="https://www.redhat.com/en/technologies/cloud-computing/openshift"
        src={OpenShiftIcon}
        product="OpenShift"
      />
      <PortfolioCard
        href="https://www.redhat.com/en/technologies/management/ansible"
        src={AnsibleIcon}
        product="Ansible Automation Platform"
      />
      <FlexItem
        flex={{ default: 'flex_1' }}
        className="subscription-card-margin"
      >
        <Card className="subscription-portfolio__card">
          <a
            className="subscription-portfolio__card-padding"
            target="_blank"
            href="https://www.redhat.com/en/technologies/all-products"
            rel="noreferrer"
          >
            <Button
              icon={
                <PlusCircleIcon className="subscription-portfolio--image-size subscription-portfolio--icon-color" />
              }
              className="subscription-portfolio__button subscription-portfolio__custom_button"
            >
              <span>View all</span>
              <br />
              <span className="pf-u-pl-md pf-u-pr-md">Red Hat Products</span>
            </Button>
          </a>
        </Card>
      </FlexItem>
    </Flex>
  );
};

export default SubscriptionPortfolio;
