import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";
import { FaTrashAlt } from "react-icons/fa";
import { CgLogOff } from 'react-icons/cg';
import { useEffect, useState } from "react";

export default function Profile() {
    const [profile, setProfile] = useState({})

    useEffect(() => {
        setProfile({
            username: 'bilbaldo',
            accountCreated: new Date().toLocaleDateString(),
            reputation: Math.floor((Math.random() * 2 - 1) * 999)
        })
    }, [])

    return (
        <Container>
            <Heading>
                Profile
            </Heading>

            <VStack>
                <VStack spacing='1px'>
                    <Heading fontSize='lg'>Username</Heading>
                    <Text>{profile.username}</Text>
                </VStack>

                <VStack spacing='1px'>
                    <Heading fontSize='lg'>Account created</Heading>
                    <Text>{profile.accountCreated}</Text>
                </VStack>

                <VStack spacing='1px'>
                    <Heading fontSize='lg'>Reputation</Heading>
                    <Text>{profile.reputation} points</Text>
                </VStack>

                <Button leftIcon={<FaTrashAlt />} bg='red.200'>Request account deletion</Button>
                <Button leftIcon={<CgLogOff />} bg='red.400' color='white'>Logoff</Button>
            </VStack>
        </Container>
    )
}