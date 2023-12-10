import React, { useEffect } from 'react';
import './home.css';
import { Card, Stack, Heading, Text,  Image, CardBody, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {QUERY_CATEGORIES} from '../utils/queries';
import { gql, useLazyQuery, useQuery } from '@apollo/client';
export default function Home() {

    var {loading, error, data } = useQuery(QUERY_CATEGORIES);
    if(loading){
      return 'Loading...'
    }
    if(error){
      return `Error! ${error.message}`;
    }
    if(data){
      console.log(data);
    }
    return (
        <>
            <div className='body'>
            {data.getCategories.map((category) => (
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
                                <img src = {category.image}></img>
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