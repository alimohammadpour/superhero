import { Card, Flex } from 'antd';
import React from 'react';
import { CreateSuperhero } from './CreateSuperhero';
import { SuperheroesList } from './SuperheroesList';

export const Superhero: React.FC = () => {
    return (
        <div style={{ maxWidth: '500px', margin: '5% auto' }}>
            <Card title="Create your Superhero" hoverable>
                <Flex vertical justify="space-between">
                    <CreateSuperhero />
                    <SuperheroesList />
                </Flex>
            </Card>
        </div>
    );
}
