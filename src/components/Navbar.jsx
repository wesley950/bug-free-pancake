import { Container, Link, Stack } from "@chakra-ui/react";
import { Link as ReachLink } from 'react-router-dom';

export default function Navbar() {
    return (
        <Container>
            <Stack direction='row' align='center' justify='center'>
                <Link as={ReachLink} to='/' color='teal.500' fontWeight='extrabold' fontSize='x-large'>Home</Link>
                {/* <Link as={ReachLink} to='/messages' color='teal.400' fontWeight='extrabold' fontSize='large'>Messages</Link> */}
                <Link as={ReachLink} to='/profile' color='teal.400' fontWeight='extrabold' fontSize='large'>Profile</Link>
                {/* <Link as={ReachLink} to='/logoff' color='red.400' fontWeight='extrabold' fontSize='large'>Logoff</Link> */}
            </Stack>
        </Container>
    )
}