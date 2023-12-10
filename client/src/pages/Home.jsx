import React from 'react';
import './home.css';
import { Card, Stack, Heading, Text,  Image, CardBody, Grid } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import {QUERY_CATEGORIES} from '../utils/queries';
import { useLazyQuery } from '@apollo/client';
export default function Home() {

    const categoryData = useLazyQuery(QUERY_CATEGORIES)
    /*const categoryData = [
        {
            _id: 1,
            src: 'https://i.imgur.com/PILVuRL_d.webp?maxwidth=760&fidelity=grand',
            name: "Exotic Psilocybe Spores",
            description: "Explore our unique collection of Exotic Psilocybe Spores, featuring rare and potent varieties like Psilocybe Natalensis, Psilocybe Caerulipes, and more. Perfect for mycologists and enthusiasts seeking distinctive psychedelic experiences."
          },
          
          {
            _id: 2,
            src: 'https://i.imgur.com/Izp4vM2_d.webp?maxwidth=760&fidelity=grand',
            name: "Gourmet and Medicinal Cultures",
            description: "Dive into the world of culinary delights with our Gourmet and Medicinal Cultures. From Brown Beech Mushrooms to Lion's Mane, these varieties offer both exquisite flavors and health benefits."
          },
          
          {
            _id: 3,
            src: 'https://i.imgur.com/PXqtcfv.jpg',
            name: "Live Plants",
            description: "Our Live Plants category offers a selection of vibrant and healthy plants like Sweet Basil, Curry Tree, and more. Perfect for adding a touch of greenery to your space or garden."
          },
          
          {
            _id: 4,
            src: 'https://i.imgur.com/nJShOaS.jpg',
            name: "Lab Supplies",
            description: "Equipped for success! Our Lab Supplies range, featuring high-quality items like Prepared Malt-Yeast Agar, caters to both professional and amateur mycologists' laboratory needs."
          },
          
          {
            _id: 5,
            src: 'https://i.imgur.com/oEC8pLk_d.webp?maxwidth=760&fidelity=grand',
            name: "Psilocybe Cubensis Spores",
            description: "Discover the popular Psilocybe Cubensis Spores collection, boasting strains like Avery's Albino and Golden Teacher. Ideal for those seeking to explore the fascinating world of Psilocybe mushrooms."
          },
          
          {
            _id: 6,
            src: 'https://i.imgur.com/yLnWwsR.jpg',
            name: "Seeds",
            description: "Our Seeds category offers a diverse selection of plant seeds, including the rare Lophophora Williamsii. Perfect for enthusiasts and gardeners looking to cultivate unique plants."
          }
          
    ];*/

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
                                <Image>
                                  {category.image}
                                </Image>
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