import { Box, Container, Heading, HStack, IconButton, Link, Stack, Text } from "@chakra-ui/react";
import { FaHeart, FaUserAlt } from 'react-icons/fa';

import { Link as ReachLink } from 'react-router-dom';


export default function FeedPost(props) {
    const post = props.post

    return (
        <Box borderRadius='lg' borderWidth='1px' p='6'>
            <Container>
                <Stack direction='column'>
                    <Box borderWidth='1px' borderRadius='md' p='2' backgroundColor='teal.50'>
                        <Stack direction='row' align='center'>
                            <Heading size='xl'>
                                <FaUserAlt color='teal' />
                            </Heading>
                            <Link color='teal.700' fontWeight='bold'>
                                {post.author}
                            </Link>
                        </Stack>
                    </Box>

                    <Link as={ReachLink} to={'/post/' + post.id} color='teal.500'>
                        <Heading size='lg' noOfLines={4}>
                            {post.title}
                        </Heading>
                    </Link>

                    <Text noOfLines={3}>{post.text}</Text>

                    <HStack spacing={3} align='center'>
                        <IconButton icon={<FaHeart />} />
                        <Heading size='sm'>{post.points} point(s)</Heading>
                        {/* <IconButton icon={<BsFillChatDotsFill />} /> */}
                        <Heading size='sm'>{post.commentsCount} comment(s)</Heading>
                    </HStack>
                </Stack>
            </Container>
        </Box>
    )
}