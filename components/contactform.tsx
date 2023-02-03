import { useState } from 'react'
import { FormControl, Box, Input, Textarea, Heading, Button, Text } from '@chakra-ui/react'
import { sectionHeadingSize, boxShadow } from '@/styles/presets';
const selected = {

    content: '""',
    bg: "themeRed",
    height: "5px",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
}


export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
    const [isDone, setIsDone] = useState<boolean>(false);
    const handleSubmit = async (event: any) => {
        event.preventDefault();
        setIsSubmitting(true)
        const name = event.target.name.value;
        const subject = event.target.subject.value;
        const message = event.target.message.value;
        const email = event.target.email.value;
        const res = await fetch('https://formspree.io/f/xgeborpn', {
            body: JSON.stringify({
                name: name,
                subject: subject,
                email: email,
                message: message
            }),
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
        })
        if (res.ok) {
            setIsDone(true)

        } else {
            alert("Something went wrong")
            setIsSubmitting(false);
            console.warn("Something went wrong");
        }
    }

    return (
        <>
            {!isDone ? <form onSubmit={handleSubmit}>
                <FormControl
                    pointerEvents={isSubmitting ? "none" : "all"}
                    display="flex" flexDir="column" gap="1rem" onSubmit={() => console.log('hate')} isRequired>
                    <Box display="grid" gridTemplateColumns="1fr 1fr" columnGap="1rem">
                        <Box>
                            <Heading fontSize="xl" >Name</Heading>
                            <Box
                                overflow="hidden"
                                position="relative"
                                _after={selected}
                            >
                                <Input name="name" variant='contact' type='text' />
                            </Box>
                        </Box>
                        <Box>
                            <Heading fontSize="xl">Email</Heading>
                            <Box
                                overflow="hidden"
                                position="relative"
                                _after={selected}
                            >
                                <Input name="email" variant='contact' type='email' />
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Heading fontSize="xl">Subject</Heading>
                        <Box
                            overflow="hidden"
                            position="relative"
                            _after={selected}
                        >
                            <Input name="subject" variant='contact' type='text' />
                        </Box>
                    </Box>
                    <Box>
                        <Heading fontSize="xl">Message</Heading>
                        <Box
                            overflow="hidden"
                            position="relative"
                            _after={selected}
                        >
                            <Textarea minLength={5} name="message" variant='contact' />
                        </Box>
                    </Box>
                    <Button variant="submit" type='submit'

                    >Submit!</Button>
                </FormControl>
            </form> :
                <Box
                    display="flex"
                    flexDir="column"
                    gap="1rem"
                    bg="themeGrey.bg"
                    position="relative"
                    boxShadow={boxShadow}
                    padding="50px"
                    _after={selected}>

                    <Heading as="p" fontSize="6xl">Message Delivered.</Heading>
                    <Text color="themeGrey.light">I will try my best to respond!</Text>
                    <Button variant="submit" onClick={() => { setIsDone(false) }}>Send Another</Button>
                </Box>}
        </>
    )
}