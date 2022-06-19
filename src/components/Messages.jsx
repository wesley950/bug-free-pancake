import { Container, Grid, GridItem, Heading, Stack, StackDivider, Text, Textarea } from "@chakra-ui/react";

export default function Messages() {
    const chats = [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eos illum earum nulla magnam mollitia ab saepe, eveniet aut iste voluptate aspernatur reprehenderit pariatur veniam magni consectetur hic quia natus.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus iste ex, soluta ipsam nobis veniam repudiandae aperiam, nam ducimus nemo magni? Nostrum eligendi ipsum saepe. Eum maxime voluptatum magni voluptatibus?',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi distinctio pariatur fugiat veritatis quasi vitae quo amet quam quidem perspiciatis adipisci ipsam omnis facere quia, non sapiente consequatur consequuntur possimus.',
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, dicta. Earum libero mollitia at tempora doloremque esse et provident doloribus magnam quisquam velit consectetur, maxime hic optio nobis adipisci molestias!'
    ]

    return (
        <Container>
            <Heading color='teal.400'>
                Messages
            </Heading>

            {/* <Box borderWidth='1px' borderRadius='md' p='6'>

            </Box> */}

            <Grid
                templateAreas={`"nav main"
                                "nav footer"`}
                gridTemplateRows={'1fr'}
                gridTemplateColumns={'150px 1fr'}
                gap='1'>

                <GridItem pl='2' bg='pink.300' area={'nav'} p='6'>
                    <Stack direction='column' divider={<StackDivider />}>
                        {
                            chats.map(chat => {
                                return (
                                    <Text noOfLines={2}>
                                        {chat}
                                    </Text>
                                )
                            })
                        }
                    </Stack>
                </GridItem>

                <GridItem pl='2' bg='green.300' area={'main'}>
                    Main
                </GridItem>

                <GridItem pl='2' area={'footer'}>
                    <Textarea placeholder="Type something..." />
                </GridItem>
            </Grid>
        </Container>
    )
}