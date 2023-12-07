import React from 'react';
import './home.css';
import { Card, Stack, Heading, Text,  Image, CardBody, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
export default function Home() {

    const categoryData = [
        {
            _id: 1,
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            name: "Category 1",
            description: "Number 1",

        },
        {
            _id: 2,
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            name: "Category 2",
            description: "Number 2",

        },
        {
            _id: 3,
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            name: "Category 3",
            description: "Number 3",

        },
        {
            _id: 4,
            src: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
            name: "Category 4",
            description: "Number 4",

        }
    ];

    return (
        <>
            <div className='body'>
            {categoryData.map((category) => (
                <div key={category._id} className='key'>
                    <Link to={`/category/${category.name}`}>
                    <Card maxW='sm' mx={10} my={10}>
                        <CardBody>
                            <Image
                                src={category.src}
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
