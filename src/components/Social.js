import { HStack, Icon } from '@chakra-ui/react';
import {  FaInstagram, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const Social = () => {
  return (
    <HStack spacing="24">
      
      <a href="https://www.instagram.com/miss___heer/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaInstagram} boxSize="50" />
      </a>
      <a href="https://www.linkedin.com/in/hiral-dholakiya-25b5001b8/" target="_blank" rel="noopener noreferrer">
        <Icon as={FaLinkedin} boxSize="50" />
      </a>
    </HStack>
  );
};

export default Social;
