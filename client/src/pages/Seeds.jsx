import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Stack, Text, Image, CardBody } from '@chakra-ui/react'

export default function gM() {

    const categoryData = [
        {
            id: 1,
            src: "https://i.imgur.com/yLnWwsR.jpg",
            name: "Lophophora Williamsii",
        }
    ];
    
    return (
        <div className='body'>
            {categoryData.map((seeds) => (
                <div key={seeds.id} className='key'>
                    <Card maxW='sm' mx={10} my={10} >
                        <CardBody className="card-body">
                            <Image
                                src={seeds.src}
                                borderRadius='lg'
                                className="image"
                            />
                            <Stack mt='6' spacing='3'>
                                <Link to={seeds.link}>
                                    <Text className="description">
                                        {seeds.name}
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