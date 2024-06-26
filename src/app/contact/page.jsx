"use client";
import React,{useEffect} from "react";
import ContactForm from "./ContactForm";
import { Heading, Icon, Stack, Text, Tooltip,useDisclosure,Center,SimpleGrid } from "@chakra-ui/react";
import { IoIosMail } from "react-icons/io";
import { ImLocation } from "react-icons/im";
import { Link } from "@chakra-ui/next-js";
import SocialIcons from "../../components/SocialIcons";
import { RevealWrapper } from 'next-reveal'


const Contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <Center>
      <SimpleGrid my={["5rem","4rem"]} width={["90vw","95vw","85vw"]} templateColumns={[null,null,"40% 55%"]}>
        <RevealWrapper className="load-hidden" delay={300}>
            <Heading fontSize="2.8rem">
              Let&apos;s discuss on something{" "}
              <Text color="social.instagram" display="inline">
                cool
              </Text>{" "}
              together
            </Heading>

            <Stack marginTop="4rem">
              <Tooltip label="Send Mail">
                <Link
                  href="mailto:ayushsp19@gmail.com"
                  target="_blank"
                  className="contact-text-span"
                  my={3}
                  _hover={{ textDecoration: "none" }}
                >
                  <Icon as={IoIosMail} mx={2} />
                  <Text>ayushsp19@gmail.com</Text>
                </Link>
              </Tooltip>

              <Tooltip label="">
                  <Text className="contact-text-span" my={3} cursor="pointer">
                    <Icon as={ImLocation} mx={2} />
                    <span>Pune, Maharashtra, India</span>
                  </Text>
              </Tooltip>
            </Stack>
            <SocialIcons />
          
        </RevealWrapper>
        <ContactForm />
      </SimpleGrid>
    </Center>
  );
};

export default Contact;
