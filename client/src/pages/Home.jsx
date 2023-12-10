import React from 'react';
import './home.css';
import { Card, Stack, Heading, Text,  Image, CardBody, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { QUERY_CATEGORIES } from '../utils/queries';
import { useQuery } from '@apollo/client';
export default function Home() {

    const { loading, error, data } = useQuery(QUERY_CATEGORIES);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <>
            <div className='body'>
            {data.map((category) => (
                <div key={category._id} className='key'>
                    <Link to={`/category/${category.name}`}>
                    <Card maxW='sm' mx={10} my={10}>
                        <CardBody>
                            <Image
                                src={category.image}
                                borderRadius='lg'
                            />
                            <Stack mt='6' spacing='3'>
                                <Heading size='md'>{category.name}</Heading>
                                <Text>
                                    {category.description}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                    </Link> 
                </div>
            ))}
        </div>
       
        </>
    
    );
}