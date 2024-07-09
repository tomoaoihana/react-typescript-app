import { Box, Stack, Image, Text } from "@chakra-ui/react";
import { FC, memo } from "react";

type Props = {
  id: number;
  imageUrl: string;
  userName: string;
  fullName: string;
  onclick: (id: number) => void;
};

export const UserCard: FC<Props> = memo((props) => {
  const { id, userName, fullName, imageUrl, onclick } = props;
  return (
    <Box
      w={"260px"}
      height={"260px"}
      bg={"white"}
      borderRadius={"10px"}
      shadow={"md"}
      p={4}
      _hover={{ cursor: "pointer", opacity: 0.8 }}
      onClick={() => onclick(id)}
    >
      <Stack alignItems={"center"}>
        <Image
          borderRadius={"full"}
          boxSize={"160px"}
          // src="https://picsum.photos/800"
          src={imageUrl}
          alt="プロフィール画像"
          margin={fullName}
        />
        <Text fontSize={"lg"} fontWeight={"bold"}>
          {userName}
        </Text>
        <Text fontSize={"sm"} color={"gray"}>
          {fullName}
        </Text>
      </Stack>
    </Box>
  );
});
