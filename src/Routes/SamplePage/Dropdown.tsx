import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionToggle,
  Card,
  CardBody,
} from '@patternfly/react-core';
import './sample-page.scss';
import AppLink from '../../Components/AppLink';

const Dropdown = () => {
    const [expanded, setExpanded] = React.useState('bordered-toggle4')
    const onToggle = (id: string) => {
        if (id == expanded) {
        setExpanded('');
        } else {
        setExpanded(id);
        }
    }

    return (
        <Card>
              <CardBody className='headingFont'>Have more questions?</CardBody>
              <Accordion isBordered>
                <AccordionItem>
                  <AccordionToggle
                    onClick={ () => {
                      onToggle('bordered-toggle1');
                    }}   
                    isExpanded={expanded === 'bordered-toggle1'}
                    id='bordered-toggle1'
                  >
                    How can I see all my subscriptions?
                  </AccordionToggle>
                  <AccordionContent id="bordered-expand1" isHidden={expanded !== 'bordered-toggle1'}>
                    <p>
                      View details and status information for each of your subcriptions with <AppLink to="/"> Subscription Inventory</AppLink>.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionToggle
                    onClick={ () => {
                      onToggle('bordered-toggle2');
                    }}   
                    isExpanded={expanded === 'bordered-toggle2'}
                    id='bordered-toggle2'
                  >
                    What is a manifest?
                  </AccordionToggle>
                  <AccordionContent id="bordered-expand2" isHidden={expanded !== 'bordered-toggle2'}>
                    <p>
                      A manifest is a set of encrypted files that contains subscription
                      information that is used to import your subscriptions into Satellite. 
                      After the manifest is imported, you can use it to manage RHEL systems and 
                      synchronize content. Learn more about using manifests with the <AppLink to="/"> connected </AppLink>
                      and <AppLink to="/"> disconnected </AppLink> experience.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionToggle
                    onClick={ () => {
                      onToggle('bordered-toggle3');
                    }}   
                    isExpanded={expanded === 'bordered-toggle3'}
                    id='bordered-toggle3'
                  >
                    How is Subscription Usage counting the usage of my subscriptions?
                  </AccordionToggle>
                  <AccordionContent id="bordered-expand3" isHidden={expanded !== 'bordered-toggle3'}>
                    <p>
                      The purchase terms for a subscription determine how a usage is counted. These terms include 
                      a quantity and unit of measurement. Different subscriptions are sold with different terms, so 
                      usage counting varies across products. <AppLink to="/"> Learn more</AppLink>.
                    </p>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem>
                  <AccordionToggle
                    onClick={ () => {
                      onToggle('bordered-toggle4');
                    }}   
                    isExpanded={expanded === 'bordered-toggle4'}
                    id='bordered-toggle4'
                  >
                    How do I prepared to manage my RHEL subscriptions?
                  </AccordionToggle>
                  <AccordionContent id="bordered-expand4" isHidden={expanded !== 'bordered-toggle4'}>
                    <p>
                      Discover the processes and tools that you can use to manage 
                      your RHEL subscriptions. <AppLink to="/"> Learn more</AppLink>.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Card>
    );
};

export default Dropdown;