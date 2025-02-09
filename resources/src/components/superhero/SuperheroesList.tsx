import { Button, Card, Form, Input, InputNumber, Flex, List, Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';

export const SuperheroesList: React.FC = () => {
    const superheroes = [{}];
      
      const columns: ColumnsType = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          width: '40%'
        },
        {
          title: 'Superpower',
          dataIndex: 'superpower',
          key: 'superpower',
          width: '30%'
        },
        {
          title: 'Humility Score',
          dataIndex: 'humilityScore',
          key: 'humilityScore',
          width: '30%', 
          render: (item: number) => {
            const getHumilityScoreColor = (): string => item <= 5 ? 'volcano' : 'green'   
            return (
                <Tag color={getHumilityScoreColor()}>
                  {item}
                </Tag>
              );
          }
        },
      ];
    
    return <Table dataSource={superheroes} columns={columns} pagination={{
        defaultCurrent: 1,
        total: superheroes.length,
        pageSize: 5,
    }}/>;
}
