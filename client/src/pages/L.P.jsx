import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Stack, Text, Image, CardBody } from '@chakra-ui/react'

export default function gM() {

    const categoryData = [
        {
            id: 1,
            src: "https://i.imgur.com/phK66nM.jpg",
            name: "Sweet Basil",
        },
        {
            id: 2,
            src: "https://i.imgur.com/m7jscmZ.jpg",
            name: "Curry Tree",
        },
        {
            id: 3,
            src: "https://i.imgur.com/m7jscmZ.jpg",
            name: "Trichocereus Terscheckii",
        }
    ];
    
    return (
        <div className='body'>
            {categoryData.map((plant) => (
                <div key={plant.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={plant.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Link to={plant.link}>
                                    <Text className="description">
                                        {plant.name}
                                    </Text>
                                </Link>
                            </Stack>
                        </CardBody>
                    </Card>
                </div>
            ))}
        </div>
    )
}