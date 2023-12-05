import React from 'react';
import './home.css';
import { Card, Stack, Heading, Text, Image, CardBody, Grid } from '@chakra-ui/react'

export default function Home() {

    const categoryData = [
        {
            id: 1,
            src: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand',
            description: "Psilocybe Cubensis",

        },
        {
            id: 2,
            src: 'https://i.imgur.com/tXpKMMz.jpeg',
            description: "Exotic Psilocybe",

        },
        {
            id: 3,
            src: 'https://i.imgur.com/Izp4vM2_d.webp?maxwidth=760&fidelity=grand',
            description: "Gourmet and Medicinal Cultures",

        },
    ];

    return (
        <div className='body'>
            {categoryData.map((category) => (
                <div key={category.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={category.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Text className="description">
                                    {category.description}
                                </Text>
                            </Stack>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
}
