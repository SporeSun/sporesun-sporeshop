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
            name: "Lion's Mane",
        },
        {
            id: 3,
            src: "https://i.imgur.com/g3UJKhF_d.webp?maxwidth=760&fidelity=grand",
            name: "Antler Reishi",
        },
        {
            id: 4,
            src: "https://i.imgur.com/TZjZVTw_d.webp?maxwidth=760&fidelity=grand",
            name: "King Oyster Mushroom",
        }
    ];
    
    return (
        <div className='body'>
            {categoryData.map((gourmet) => (
                <div key={gourmet.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={gourmet.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Link to={gourmet.link}>
                                    <Text className="description">
                                        {gourmet.name}
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