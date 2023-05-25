import React from 'react';
import {
  Card,
  Flex,
  FlexItem,
  Button
} from '@patternfly/react-core';
import './sample-page.scss';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

const SubscriptionPortfolio = () => {

    return (
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolioFlex' target="_blank" href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">
                        <Button style={{ background: 'white', padding: 0}}>
                            <img className='standardImage' src= { require('../../../static/images/rhel.jpg') }></img>
                            <a target="_blank" href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">Red Hat<br />Enterprise Linux</a>       
                        </Button>
                    </a>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolioFlex' target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">
                        <Button style={{ background: 'white', padding: 0}}>
                            <img className='standardImage' src= { require('../../../static/images/openshift.jpg') }></img>
                            <a target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">Red Hat<br />OpenShift</a>
                        </Button>
                    </a>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolioFlex' target='_blank' href='https://www.redhat.com/en/technologies/management/ansible'>
                        <Button style={{ background: 'white', padding: 0}}>
                            <img className='standardImage' src= { require('../../../static/images/ansible.jpg') }></img>
                            <a target='_blank' href="https://www.redhat.com/en/technologies/management/ansible">Red Hat<br />Ansible Automation Platform</a>
                        </Button>
                    </a>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolioFlex' target="_blank" href='https://www.redhat.com/en/technologies/all-products'>
                        <Button style={{ background: 'white', padding: 0 }}>
                            <PlusCircleIcon className='standardImage' style={{ color: 'gray' }}/>
                            <a target='_blank' href="https://www.redhat.com/en/technologies/all-products">View all<br />Red Hat Products</a>
                        </Button>
                    </a>
                </Card>
            </FlexItem>
        </Flex>
    );
}

export default SubscriptionPortfolio;