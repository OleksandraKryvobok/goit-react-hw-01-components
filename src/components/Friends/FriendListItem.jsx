import PropTypes from 'prop-types';
import { Status, Avatar, Name, ItemContainer } from './FriendList.styled';


export const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    return (
        <ItemContainer>
            <Status isOnline={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
        </ItemContainer>
    );
};

FriendListItem.propTypes = {
    friend: PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline:PropTypes.bool.isRequired,
    }).isRequired,
};