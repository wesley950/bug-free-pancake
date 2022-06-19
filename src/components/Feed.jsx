import { Button, Container, Heading, Spinner, Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import FeedPost from "./FeedPost";

export default function Feed() {
    const [posts, setPosts] = useState([])

    const initialPosts = [
        {
            'id': Math.floor(Math.random() * 99999),
            'title': 'Quisque ut scelerisque risus. Fusce at scelerisque erat, at bibendum magna.',
            'author': 'bibendum',
            'text': 'Ut sed felis leo. In non nisi nec eros mattis aliquet. Vestibulum sed lectus purus. Mauris et dapibus urna. Morbi faucibus diam in vehicula eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec egestas neque a lorem pellentesque, eu eleifend mi pulvinar. Nam condimentum sit amet ipsum a fringilla. Fusce et mauris id lectus pulvinar tristique non vitae velit.',
            'points': Math.floor(Math.random() * 99),
            'commentsCount': Math.floor(Math.random() * 99)

        },
        {
            'id': Math.floor(Math.random() * 99999),
            'title': 'Aliquam commodo lacus quis nulla suscipit, id accumsan lacus consequat. Cras tempor non magna id aliquet.',
            'author': 'Integer',
            'text': 'Maecenas massa justo, placerat ac dui id, accumsan facilisis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vulputate nulla nibh. Nunc lacus nibh, molestie ut risus in, varius commodo nulla. Vestibulum eleifend auctor erat, id interdum massa tempor quis. Morbi ultrices condimentum venenatis. Nunc arcu tortor, dignissim ut ornare ut, pulvinar et justo. Pellentesque aliquam nunc eget mauris eleifend malesuada. Cras ex urna, gravida eget porta eget, dapibus non eros.',
            'points': Math.floor(Math.random() * 99),
            'commentsCount': Math.floor(Math.random() * 99)

        },
        {
            'id': Math.floor(Math.random() * 99999),
            'title': 'Cras id massa at tortor fermentum eleifend. Nullam sed orci nec mauris tempor pellentesque eget et tellus.',
            'author': 'Vivamus',
            'text': 'Maecenas et dui ornare, fermentum odio nec, venenatis arcu. Aliquam consectetur sem non felis ultrices, eu accumsan nulla viverra. Suspendisse et nulla cursus, laoreet justo ac, volutpat neque. Aliquam eu est ac massa euismod condimentum nec id leo. Aenean quis lorem massa. Ut efficitur ultrices erat. Proin pulvinar eleifend augue, fermentum pharetra tellus sagittis vel. Morbi pellentesque arcu id tellus commodo, eu convallis nisi luctus.',
            'points': Math.floor(Math.random() * 99),
            'commentsCount': Math.floor(Math.random() * 99)

        }
    ]

    const postsToAdd = [
        {
            'id': Math.floor(Math.random() * 99999),
            'title': 'Quisque ut scelerisque risus. Fusce at scelerisque erat, at bibendum magna.',
            'author': 'bibendum',
            'text': 'Ut sed felis leo. In non nisi nec eros mattis aliquet. Vestibulum sed lectus purus. Mauris et dapibus urna. Morbi faucibus diam in vehicula eleifend. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec egestas neque a lorem pellentesque, eu eleifend mi pulvinar. Nam condimentum sit amet ipsum a fringilla. Fusce et mauris id lectus pulvinar tristique non vitae velit.',
            'points': Math.floor(Math.random() * 99),
            'commentsCount': Math.floor(Math.random() * 99)
        },
        {
            'id': Math.floor(Math.random() * 99999),
            'title': 'Cras id massa at tortor fermentum eleifend. Nullam sed orci nec mauris tempor pellentesque eget et tellus.',
            'author': 'Vivamus',
            'text': 'Maecenas et dui ornare, fermentum odio nec, venenatis arcu. Aliquam consectetur sem non felis ultrices, eu accumsan nulla viverra. Suspendisse et nulla cursus, laoreet justo ac, volutpat neque. Aliquam eu est ac massa euismod condimentum nec id leo. Aenean quis lorem massa. Ut efficitur ultrices erat. Proin pulvinar eleifend augue, fermentum pharetra tellus sagittis vel. Morbi pellentesque arcu id tellus commodo, eu convallis nisi luctus.',
            'points': Math.floor(Math.random() * 99),
            'commentsCount': Math.floor(Math.random() * 99)

        },
        {
            'id': Math.floor(Math.random() * 99999),
            'title': 'Aliquam commodo lacus quis nulla suscipit, id accumsan lacus consequat. Cras tempor non magna id aliquet.',
            'author': 'Integer',
            'text': 'Maecenas massa justo, placerat ac dui id, accumsan facilisis elit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vulputate nulla nibh. Nunc lacus nibh, molestie ut risus in, varius commodo nulla. Vestibulum eleifend auctor erat, id interdum massa tempor quis. Morbi ultrices condimentum venenatis. Nunc arcu tortor, dignissim ut ornare ut, pulvinar et justo. Pellentesque aliquam nunc eget mauris eleifend malesuada. Cras ex urna, gravida eget porta eget, dapibus non eros.',
            'points': Math.floor(Math.random() * 99),
            'commentsCount': Math.floor(Math.random() * 99)

        },
    ]

    useEffect(() => {
        setPosts([...initialPosts])
    }, [])

    const loadMorePosts = () => {
        const loadingContentSpinner = document.getElementById('loading-content-spinner')
        loadingContentSpinner.hidden = false

        setTimeout(() => {
            setPosts([...posts, ...postsToAdd])
            loadingContentSpinner.hidden = true
        }, 1500);
    }

    return (
        <Container>
            <Heading color='teal.400'>
                Recent Posts
            </Heading>

            <Stack direction='column' spacing={4}>
                {
                    posts.map(post => {
                        return (
                            <FeedPost post={post} />
                        )
                    })
                }

                <Spinner alignSelf='center' color='teal.400' id='loading-content-spinner' hidden />
                <Button color='teal' onClick={loadMorePosts}>Load more...</Button>
            </Stack>
        </Container>
    )
}