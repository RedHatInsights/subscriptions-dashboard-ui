import React from 'react';
import {
  Card,
  Flex,
  FlexItem,
  Button
} from '@patternfly/react-core';
import './Overview.scss';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';

const SubscriptionPortfolio = () => {

    return (
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', alignItems: 'start', gap: '20px'}}>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolio-flex' target="_blank" href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">
                        <Button style={{ background: 'white', padding: 0}}>
                            <img className='standard-image' src= { require('../../static/images/rhel.svg') }></img>
                            <a target='_blank' href='https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux'>Red Hat</a>
                            <br />
                            <a style={{ paddingLeft: '10px', paddingRight: '10px' }} target="_blank" href="https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux">Enterprise Linux</a>       
                        </Button>
                    </a>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolio-flex' target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">
                        <Button style={{ background: 'white', padding: 0}}>
                            <img className='standard-image' src= { require('../../static/images/openshift.svg') }></img>
                            <a target='_blank' href='https://www.redhat.com/en/technologies/cloud-computing/openshift'>Red Hat</a>
                            <br />
                            <a style={{ paddingLeft: '10px', paddingRight: '10px' }} target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">OpenShift</a>
                        </Button>
                    </a>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolio-flex' target='_blank' href='https://www.redhat.com/en/technologies/management/ansible'>
                        <Button style={{ background: 'white', padding: 0}}>
                            <img className='standard-image' src= { require('../../static/images/ansible.svg') }></img>
                            <a target='_blank' href='https://www.redhat.com/en/technologies/management/ansible'>Red Hat</a>
                            <br />
                            <a style={{ paddingLeft: '10px', paddingRight: '10px' }} target='_blank' href="https://www.redhat.com/en/technologies/management/ansible">Ansible Automation Platform</a>
                        </Button>
                    </a>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1'}} className='subscription-card-margin'>
                <Card style={{ textAlign: 'center' }}>
                    <a className='portfolio-flex' target="_blank" href='https://www.redhat.com/en/technologies/all-products'>
                        <Button style={{ background: 'white', padding: 0 }}>
                            <PlusCircleIcon className='standard-image' style={{ color: 'gray' }}/>
                            <a target='_blank' href='https://www.redhat.com/en/technologies/all-products'>View all</a>
                            <br />
                            <a style={{ paddingLeft: '10px', paddingRight: '10px' }} target='_blank' href="https://www.redhat.com/en/technologies/all-products">Red Hat Products</a>
                        </Button>
                    </a>
                </Card>
            </FlexItem>
        </Flex>
    );
}

export default SubscriptionPortfolio;