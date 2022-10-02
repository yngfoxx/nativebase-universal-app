import {
  Box, Button, Center, Heading, Text, VStack
} from 'native-base'
import React from 'react'
import { Link as SolitoLink } from 'solito/link'
import { ColorModeSwitch } from '../../components'
  
  
export function AuthScreen() {
    return (
      <Center
        flex={1}
        _dark={{ bg: 'blueGray.900' }}
        _light={{ bg: 'blueGray.50' }}
      >
        <VStack alignItems="center" space="md">
          <Heading fontFamily={'heading'}>Authenticate</Heading>
          <Text fontFamily={'body'} w={'96'} textAlign={'center'}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Soluta quos nemo tempore voluptates officia architecto alias,
            quibusdam magni corrupti, natus animi numquam magnam dolorem
            quia necessitatibus aliquid. Quos, enim ad?
          </Text>
        </VStack>
        <ColorModeSwitch />
        <Box mt="6">
          <SolitoLink href="/elizabethblac/dashboard">
            <Button pointerEvents="none" variant="outline" colorScheme="coolGray">
              Open Merchant Dashboard
            </Button>
          </SolitoLink>
        </Box>
      </Center>
    )
}
  