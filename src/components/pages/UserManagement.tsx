/* eslint-disable react-hooks/exhaustive-deps */

import { FC, memo, useCallback, useEffect } from "react";
import {
  Spinner,
  Wrap,
  WrapItem,
  Center,
  useDisclosure,
} from "@chakra-ui/react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";
import { UserDetailModal } from "../organisms/user/UserDetailModal";
import { useSelectUsers } from "../../hooks/useSelectUsers";

export const UserManagement: FC = memo(() => {
  const { getUsers, loading, users } = useAllUsers();
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { onSelectUser, selectedUser } = useSelectUsers();
  console.log(selectedUser);

  useEffect(() => getUsers(), []);

  const onClickUser = useCallback(
    (id: number) => {
      // console.log(id);
      onSelectUser({ id, users });
      onOpen();
    },
    [users, onSelectUser, onOpen]
  );

  return (
    <>
      {loading ? (
        <Center height={"100vh"}>
          <Spinner />
        </Center>
      ) : (
        <Wrap p={{ base: 4, md: 10 }}>
          {users.map((user) => (
            <WrapItem key={user.id} mx={"auto"}>
              <UserCard
                id={user.id}
                imageUrl="https://picsum.photos/800"
                userName={user.username}
                fullName={user.name}
                onclick={onClickUser}
              />
            </WrapItem>
          ))}
        </Wrap>
      )}
      <UserDetailModal onClose={onClose} isOpen={isOpen} />
    </>
  );
});
