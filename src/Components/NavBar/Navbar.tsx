import { useState } from "react";
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  Image,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Icon,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { BsMoonStars, BsSunFill } from "react-icons/bs";
import { useRouter } from "next/router";
import ProfileDropDown from "./ProfileDropDown";

const Links: LinkType[] = [
  { title: "Home" },
  { title: "Emergency" },
  { title: "About" },
  { title: "Maps" },
];

export type LinkType = {
  title: string;
};

const NavBar: React.FC = () => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState(Links[0].title);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toggleColorMode, colorMode } = useColorMode();

  const NavLink = ({ children }: { children: LinkType }) => (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.300", "gray.800"),
      }}
      bg={
        selectedTab === children.title
          ? useColorModeValue("gray.200", "gray.700")
          : "none"
      }
      onClick={() => {
        setSelectedTab(children.title);
        if (children.title === "Home") {
          router.push("/");
        } else {
          router.push(`/Files/${children.title}`);
        }
      }}
    >
      {children.title}
    </Link>
  );

  return (
    <>
      <Box
        borderRadius={"0px 0px 4px 4px"}
        width="100%"
        pos={"fixed"}
        zIndex={1}
        boxShadow="dark-lg"
        position="fixed"
        bg={useColorModeValue("brand.700", "brand.900")}
        px={4}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack align={"center"} spacing={3}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <Box
              onClick={() => {
                setSelectedTab(Links[0].title);
                router.push("/");
              }}
            >
              <Image
                height={{ base: "14" }}
                src="/301px-Emblem_of_India.png"
                filter="auto"
                cursor="pointer"
                invert={colorMode === "light" ? 0 : 1}
              />
            </Box>
          </HStack>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              fontWeight={700}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link.title}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Button variant={"solid"} colorScheme={"teal"} size={"sm"} mr={4}>
              <Icon
                as={colorMode === "light" ? BsMoonStars : BsSunFill}
                onClick={toggleColorMode}
              />
            </Button>
            <ProfileDropDown />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box fontWeight={700} pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link.title}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default NavBar;
