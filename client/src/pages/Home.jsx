import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
import { Card, Stack, Text, Image, CardBody } from '@chakra-ui/react'

export default function Home() {

    const categoryData = [
        {
            id: 1,
            src: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand',
            description: "Psilocybe Cubensis Spores",
            link: '/psilocybe-cubensis',

        },
        {
            id: 2,
            src: 'https://i.imgur.com/tXpKMMz.jpeg',
            description: "Exotic Psilocybe Spores",
            link: '/exotic-psilocybe',
        },
        {
            id: 3,
            src: 'https://i.imgur.com/g3UJKhF.jpg',
            description: "Gourmet and Medicinal Cultures",
            link: '/gourmet-and-medicinal-cultures',
        },
        {
            id: 4,
            src: 'https://i.imgur.com/PXqtcfv.jpg',
            description: "Live Plants",
            link: '/live-plants',
        },
        {
            id: 5,
            src: 'https://i.imgur.com/yLnWwsR.jpg',
            description: "Seeds",
            link: '/seeds',
        },
        {
            id: 6,
            src: 'https://i.imgur.com/nJShOaS.jpg',
            description: "Lab Supplies",
            link: '/lab-supplies',
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
                                <Link to={category.link}>
                                    <Text className="description">
                                        {category.description}
                                    </Text>
                                </Link>
                            </Stack>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    );
}
