import { Box, Container, Heading, HStack, IconButton, Link, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { BsFillChatDotsFill } from "react-icons/bs";
import { FaHeart, FaUserAlt } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Post() {
    const { postId } = useParams()

    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])

    useEffect(() => {
        setPost({
            'id': Math.floor(Math.random() * 99999),
            'title': 'Quisque ut scelerisque risus. Fusce at scelerisque erat, at bibendum magna.',
            'author': 'bibendum',
            'text': 'Ut sed felis leo. In non nisi nec eros mattis aliquet. Vestibulum sed lectus purus. Mauris et dapibus urna. Morbi faucibus diam in vehicula eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec egestas neque a lorem pellentesque, eu eleifend mi pulvinar. Nam condimentum sit amet ipsum a fringilla. Fusce et mauris id lectus pulvinar tristique non vitae velit.',
            'points': Math.floor(Math.random() * 99)
        })

        setComments([
            {
                'author': 'lorem',
                'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel assumenda quasi repudiandae inventore veniam dolores, veritatis tempore officiis asperiores reprehenderit quod, nesciunt laborum praesentium, ad nostrum qui odit amet!'
            }, {
                'author': 'lorem',
                'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel assumenda quasi repudiandae inventore veniam dolores, veritatis tempore officiis asperiores reprehenderit quod, nesciunt laborum praesentium, ad nostrum qui odit amet!'
            }, {
                'author': 'lorem',
                'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel assumenda quasi repudiandae inventore veniam dolores, veritatis tempore officiis asperiores reprehenderit quod, nesciunt laborum praesentium, ad nostrum qui odit amet!'
            }, {
                'author': 'lorem',
                'text': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore vel assumenda quasi repudiandae inventore veniam dolores, veritatis tempore officiis asperiores reprehenderit quod, nesciunt laborum praesentium, ad nostrum qui odit amet!'
            }
        ])
    }, [])

    return (
        <Container>
            <VStack>
                <Box borderWidth='1px' borderRadius='md' p='2' backgroundColor='teal.50'>
                    <HStack align='center'>
                        <Heading size='xl'>
                            <FaUserAlt color='teal' />
                        </Heading>
                        <Link color='teal.700' fontWeight='bold'>
                            {post.author}
                        </Link>
                    </HStack>
                </Box>

                <Link color='teal.500'>
                    <Heading size='lg'>
                        {post.title} - {postId}
                    </Heading>
                </Link>

                <Text>{post.text}</Text>

                <HStack spacing={3}>
                    <IconButton icon={<FaHeart />} />
                    <Heading size='sm'>{post.points} point(s)</Heading>
                    <IconButton icon={<BsFillChatDotsFill />} />
                    <Heading size='sm'>{comments.length} comment(s)</Heading>
                </HStack>
            </VStack>
        </Container>
    )
}