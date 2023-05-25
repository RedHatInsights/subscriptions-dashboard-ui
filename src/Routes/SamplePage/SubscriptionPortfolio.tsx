import React from 'react';
import {
  Card,
  Flex,
  FlexItem,
  Button
} from '@patternfly/react-core';
import './sample-page.scss';
import AppLink from '../../Components/AppLink';
import PlusCircleIcon from '@patternfly/react-icons/dist/esm/icons/plus-circle-icon';
import { redirect } from 'react-router-dom';

const SubscriptionPortfolio = () => {

    const handleClick = (num: number) => {
        if (num == 1) {
            return redirect("/")
        } else if (num == 2) {
            return redirect("/")
        } else if (num == 3) {
            return redirect("/")
        } else {
            return redirect("/")
        }
    }

    return (
        <Flex display={{ default: 'inlineFlex' }} style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'start' }}>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                    <Button onClick={() => handleClick(1)} style={{ background: 'white', padding: 0}}>
                        <img className='standardImage' src= { require('../../../static/images/rhel.jpg') }></img>
                        <AppLink to="/">Red Hat<br />Enterprise Linux</AppLink>       
                    </Button>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                    <Button onClick={() => handleClick(2)} style={{ background: 'white', padding: 0}}>
                        <img className='standardImage' src= { require('../../../static/images/openshift.jpg') }></img>
                        <AppLink to="/">Red Hat<br />OpenShift</AppLink>
                    </Button>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                    <Button onClick={() => handleClick(3)} style={{ background: 'white', padding: 0}}>
                        <img className='standardImage' src= { require('../../../static/images/ansible.jpg') }></img>
                        <AppLink to="/">Red Hat<br />Ansible Automation Platform</AppLink>
                    </Button>
                </Card>
            </FlexItem>
            <FlexItem flex={{ default: 'flex_1' }}>
                <Card style={{ textAlign: 'center' }} className='portfolioFlex'>
                    <Button onClick={() => handleClick(4)} style={{ background: 'white', padding: 0 }}>
                        <PlusCircleIcon className='standardImage' style={{ color: 'gray' }}/>
                        <AppLink to="/">View all<br />Red Hat Products</AppLink>
                    </Button>
                </Card>
            </FlexItem>
        </Flex>
    );
}

export default SubscriptionPortfolio;