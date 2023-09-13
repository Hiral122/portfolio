import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/image';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import profile from '../assets/profile.jfif'
import React from 'react'

function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    const handleHireMeClick = () => {
        // Define the URL to your resume file
        const resumeUrl = '/path-to-your-resume.pdf';

        // Create a temporary link element to trigger the download
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'Heer_Dholakiya_Resume.pdf'; // The name you want for the downloaded file
        link.click();
    };

    return (
        <Stack>
            <Circle position="absolute" bg="blue.100" opacity="0.1"
                w="300px" h="300px" alignSelf="flex-end" />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hi, I am</Text>
                    <Text fontSize="7xl" fontWeight="bold" bgGradient="linear(to-r, cyan.400, blue.500, purple.600)" bgClip='text' >Heer Dholakiya</Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}> As a frontend developer, I adeptly blend HTML, CSS, JS , React js and Chakra UI <br></br>to build modern, responsive, and visually appealing web interfaces.🗣</Text>
                    <Button mt={8} colorScheme="blue" onClick={handleHireMeClick}>Hire Me</Button>
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="transparent" boxShadow="lg"
                    boxSize="300px" src={profile} />
            </Flex>
        </Stack>
    )
}

export default Header;
