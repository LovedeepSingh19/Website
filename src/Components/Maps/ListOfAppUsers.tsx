import { List, ListItem } from '@chakra-ui/react';
import React from 'react';

type ListOfAppUsersProps = {
    
};

const ListOfAppUsers:React.FC<ListOfAppUsersProps> = () => {
    
    return (
        <List p={10}>
            <ListItem m={2} cursor={'pointer'} onClick={() => {}} p={2} border={'1px solid'} borderRadius={4}>Hi</ListItem>
            <ListItem m={2} cursor={'pointer'} onClick={() => {}} p={2} border={'1px solid'} borderRadius={4}>Hi</ListItem>
            <ListItem m={2} cursor={'pointer'} onClick={() => {}} p={2} border={'1px solid'} borderRadius={4}>Hi</ListItem>
            <ListItem m={2} cursor={'pointer'} onClick={() => {}} p={2} border={'1px solid'} borderRadius={4}>Hi</ListItem>
            <ListItem m={2} cursor={'pointer'} onClick={() => {}} p={2} border={'1px solid'} borderRadius={4}>Hi</ListItem>
        </List>
    )
}
export default ListOfAppUsers;