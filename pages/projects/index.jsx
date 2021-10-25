import {
  Container,
  Text,
  Box,
  Link,
  Stack,
  useColorModeValue,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { LinkIcon, ExternalLinkIcon, StarIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import Transition from "../../components/transition.jsx";
import Head from "../../components/head.jsx";

const Projects = () => {
  const [repos, setRepos] = useState([]);
  const pinned = ["AIKyaru", "YoutubeMusicLyrics"];

  useEffect(() => {
    fetch("https://api.github.com/users/IanDesuyo/repos").then(async res => {
      const data = await res.json();
      const result = [];
      const pinnedResult = [];

      data.forEach(repo => {
        const isPinned = pinned.includes(repo.name);
        const d = {
          name: repo.name,
          description: repo.description,
          url: repo.html_url,
          stars: repo.stargazers_count,
          homepage: repo.homepage,
          pinned: isPinned,
        };
        if (isPinned) {
          pinnedResult.push(d);
        } else {
          result.push(d);
        }
      });

      result.sort((a, b) => b.stars - a.stars);

      setRepos([...pinnedResult, ...result]);
    });
  }, []);
  return repos.length > 0 ? (
    <Transition>
      <Head title="My Projects" />
      <Container>
        {repos.map((repo, index) => (
          <Box
            bg={useColorModeValue("gray.100", "gray.700")}
            m={5}
            p={2}
            borderRadius="md"
            key={index}
          >
            <Text fontSize="2xl">
              {repo.pinned && <StarIcon mr={2} w={5} />}
              {repo.name}
            </Text>
            <Text>{repo.description}</Text>
            <Stack direction="row" spacing={4} mt={2}>
              {repo.url && (
                <Link href={repo.url}>
                  <Text>
                    <LinkIcon mr={2} />
                    Github
                  </Text>
                </Link>
              )}
              {repo.homepage && (
                <Link href={repo.homepage}>
                  <Text>
                    <ExternalLinkIcon mr={2} />
                    Website
                  </Text>
                </Link>
              )}
            </Stack>
          </Box>
        ))}
      </Container>
    </Transition>
  ) : (
    <Center h={40}>
      <Spinner size="xl" speed="1s" />
    </Center>
  );
};

export default Projects;
