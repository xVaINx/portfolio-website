"use client";
import React from "react";
import {
    Center,
    Box,
    Button
  } from "@chakra-ui/react";
  import { AiOutlineDownload } from "react-icons/ai";

const Resume = () => {

  return (
    <>
      <Center>
        <Box width={["90vw", "90vw", "80vw"]} height="100%" marginTop="2rem" marginBottom="4rem">
        <Button as="a" href="/files/ak_resume.pdf" colorScheme="teal" size="sm" download="AYUSH_KUMAR_RESUME">
              Download&nbsp;
              <AiOutlineDownload fill="black"/>
        </Button>
          <div
            style={{
              position: "relative",
              width: "100%",
              height: 0,
              paddingTop: "141.4286%",
              paddingBottom: 0,
              boxShadow: "0 2px 8px 0 rgba(63, 69, 81, 0.16)",
              marginTop: "1em",
              marginBottom: "0.9em",
              overflow: "hidden",
              borderRadius: "8px",
              willChange: "transform",
            }}
          >
            <iframe
              title="Resume"
              loading="lazy"
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                top: 0,
                left: 0,
                border: "none",
                padding: 0,
                margin: 0,
              }}
              src="/files/ak_resume.pdf"
              allowFullScreen
            ></iframe>
          </div>
        </Box>
      </Center>
    </>
  );
};

export default Resume;