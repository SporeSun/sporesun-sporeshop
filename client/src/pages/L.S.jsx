import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Stack, Text, Image, CardBody } from '@chakra-ui/react'

export default function gM() {

    const categoryData = [
        {
            id: 1,
            src: "https://i.imgur.com/nJShOaS.jpg",
            name: "Prepared Malt-Yeast Agar",
        }
    ];
    
    return (
        <div className='body'>
            {categoryData.map((supplies) => (
                <div key={supplies.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={supplies.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Link to={supplies.link}>
                                    <Text className="description">
                                        {supplies.name}
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