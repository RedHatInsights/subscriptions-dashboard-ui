import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionToggle,
  Card,
  CardBody,
  Content,
  ContentVariants,
} from '@patternfly/react-core';
import './Overview.scss';
import ExternalLinkAltIcon from '@patternfly/react-icons/dist/js/icons/external-link-alt-icon';
import { Link, useLocation } from 'react-router-dom';

const Dropdown = () => {
  const { pathname } = useLocation();
  const [expanded, setExpanded] = React.useState('bordered-toggle1');
  const onToggle = (id: string) => {
    if (id == expanded) {
      setExpanded('');
    } else {
      setExpanded(id);
    }
  };

  return (
    <Card>
      <CardBody>
        <Content>
          <Content component={ContentVariants.h2}>Have more questions?</Content>
        </Content>
      </CardBody>
      <div className="pf-u-pr-lg pf-u-pb-lg">
        <Accordion isBordered>
          <AccordionItem isExpanded={expanded === 'bordered-toggle1'}>
            <AccordionToggle
              onClick={() => {
                onToggle('bordered-toggle1');
              }}
              id="bordered-toggle1"
            >
              How can I see all my subscriptions?
            </AccordionToggle>
            <AccordionContent id="bordered-expand1">
              <p>
                View details and status information for each of your
                subscriptions with{' '}
                <Link to={pathname.replace('overview', 'inventory')}>
                  Subscriptions Inventory
                </Link>
                .
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem isExpanded={expanded === 'bordered-toggle2'}>
            <AccordionToggle
              onClick={() => {
                onToggle('bordered-toggle2');
              }}
              id="bordered-toggle2"
            >
              What is a manifest?
            </AccordionToggle>
            <AccordionContent id="bordered-expand2">
              <p>
                A manifest is a set of encrypted files that contains
                subscription information that is used to import your
                subscriptions into Satellite. After the manifest is imported,
                you can use it to manage RHEL systems and synchronize content.
                Learn more about using manifests with the{' '}
                <a
                  target="_blank"
                  href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/creating_and_managing_manifests_for_a_connected_satellite_server/index#doc-wrapper"
                  rel="noreferrer"
                >
                  {' '}
                  connected <ExternalLinkAltIcon />
                </a>
                &nbsp;and{' '}
                <a
                  target="_blank"
                  href="https://access.redhat.com/documentation/en-us/red_hat_subscription_management/2023/html-single/using_red_hat_subscription_management/index#using_manifests_con"
                  rel="noreferrer"
                >
                  {' '}
                  disconnected <ExternalLinkAltIcon />
                </a>{' '}
                &nbsp;experience.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem isExpanded={expanded === 'bordered-toggle3'}>
            <AccordionToggle
              onClick={() => {
                onToggle('bordered-toggle3');
              }}
              id="bordered-toggle3"
            >
              How is Subscriptions Usage counting the usage of my subscriptions?
            </AccordionToggle>
            <AccordionContent id="bordered-expand3">
              <p>
                The purchase terms for a subscription determine how usage is
                counted. These terms include a quantity and unit of measurement.
                Different subscriptions are sold with different terms, so usage
                counting varies across products.{' '}
                <a
                  target="_blank"
                  href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_the_subscriptions_service/index#assembly-using-subscriptionwatch-data"
                  rel="noreferrer"
                >
                  {' '}
                  Learn more <ExternalLinkAltIcon />
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem isExpanded={expanded === 'bordered-toggle4'}>
            <AccordionToggle
              onClick={() => {
                onToggle('bordered-toggle4');
              }}
              id="bordered-toggle4"
            >
              How do I prepare to manage my RHEL subscriptions?
            </AccordionToggle>
            <AccordionContent id="bordered-expand4">
              <p>
                Discover the processes and tools that are used to manage your
                RHEL subscriptions.{' '}
                <a
                  target="_blank"
                  href="https://access.redhat.com/documentation/en-us/subscription_central/2023/html-single/getting_started_with_rhel_system_registration/index"
                  rel="noreferrer"
                >
                  {' '}
                  Learn more <ExternalLinkAltIcon />
                </a>
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </Card>
  );
};

export default Dropdown;
