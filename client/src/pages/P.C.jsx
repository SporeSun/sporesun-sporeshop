import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Stack, Text, Image, CardBody } from '@chakra-ui/react'

export default function pC() {

    const categoryData = [
        {
            id: 1,
            src: "https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand",
            name: "Avery's Albino",
        },
        {
            id: 2,
            src: "https://i.imgur.com/yirURMn_d.webp?maxwidth=760&fidelity=grand",
            name: "Choda MelMak",
        },
        {
            id: 3,
            src: "https://i.imgur.com/CjRBXoX_d.webp?maxwidth=1520&fidelity=grand",
            name: "Golden Teacher",
        },
        {
            id: 4,
            src: "https://i.imgur.com/NcZMM4T_d.webp?maxwidth=1520&fidelity=grand",
            name: "Hydra",
        },
        {
            id: 5,
            src: "https://i.imgur.com/wcKgehd_d.webp?maxwidth=1520&fidelity=grand",
            name: "Mr. Wickles",
        },
        {
            id: 6,
            src: "https://i.imgur.com/thNV7I5_d.webp?maxwidth=1520&fidelity=grand",
            name: "Shakti",
        },
        {
            id: 7,
            src: "https://i.imgur.com/l1eUsen_d.webp?maxwidth=760&fidelity=grand",
            name: "Tidalwave",
        },
        {
            id: 8,
            src: "https://i.imgur.com/egzo9Cs_d.webp?maxwidth=760&fidelity=grand",
            name: "Yeti 125",
        }

    ];
    
    return (
        <div className='body'>
            {categoryData.map((psilocybe) => (
                <div key={psilocybe.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={psilocybe.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Link to={psilocybe.link}>
                                    <Text className="description">
                                        {psilocybe.name}
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