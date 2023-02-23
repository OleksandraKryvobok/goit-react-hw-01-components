import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { List, Item } from './FriendList.styled';

export const FriendList = ({ friends }) => {
    return (
        <List>
            {friends.map((friend) => (
                <Item key={friend.id}>
                    <FriendListItem friend={friend} />
                </Item>
            ))}
        </List>
    );
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
        })
    ).isRequired,
};