import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map(({ id, avatar, name, isOnline }) => (
                <Item key={id}>
                    <Status isOnline={isOnline}></Status>
                    <Avatar src={avatar} alt="User avatar" width="48" />
                    <Name>{name}</Name>
                </Item>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
        })
    ).isRequired,
};