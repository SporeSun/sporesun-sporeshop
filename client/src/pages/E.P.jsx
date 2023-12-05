import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Stack, Text, Image, CardBody } from '@chakra-ui/react'

export default function eP() {

    const categoryData = [
        {
            id: 1,
            src: "https://i.imgur.com/PILVuRL_d.webp?maxwidth=760&fidelity=grand",
            name: "Psilocybe Natalensis",
        },
        {
            id: 2,
            src: "https://i.imgur.com/2VaQUSS_d.webp?maxwidth=760&fidelity=grand",
            name: "Psilocybe Caerulipes",
        },
        {
            id: 3,
            src: "https://i.imgur.com/tXpKMMz_d.webp?maxwidth=760&fidelity=grand",
            name: "Psilocybe Subaeruginosa",
        },
        {
            id: 4,
            src: "https://i.imgur.com/e1xTT8A_d.webp?maxwidth=760&fidelity=grand",
            name: "APE x Natalensis",
        }
    ];
    
    return (
        <div className='body'>
            {categoryData.map((exotic) => (
                <div key={exotic.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={exotic.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Link to={exotic.link}>
                                    <Text className="description">
                                        {exotic.name}
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