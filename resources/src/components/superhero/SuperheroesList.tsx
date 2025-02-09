import React, { useEffect } from 'react';
import { Table, Tag, Spin } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { useIDispatch, useISelector } from '../../hooks';
import { getSuperheroesRequest } from '../../slices/SuperheroSlice';

export const SuperheroesList: React.FC = () => {
    const { 
        create: { superhero },
        list: { 
            pending, 
            superheroes
        }
    } = useISelector(({ superhero }) => superhero)
    
    const dispatch = useIDispatch();
    useEffect(() => {
        dispatch(getSuperheroesRequest());
    }, [superhero]);

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
    
    const renderSuperheroesTable = () => {
        const superheroesList = superheroes ?? [];
        return <Table 
            dataSource={superheroesList} 
            columns={columns} 
            pagination={{
                defaultCurrent: 1,
                pageSize: 5,
                total: superheroesList.length,
            }} 
        />;
    }
    return pending ? <Spin /> : renderSuperheroesTable();
}
