import PropTypes from 'prop-types';
import { Info, Image, Name, Data } from './Profile.styled';

export const ProfileMain = ({ user: { username, tag, location, avatar } }) => {
    return (
        <Info>
            <Image
                    src={avatar}
                    alt="User avatar"
                    className="avatar"
            ></Image>
            <Name>{username}</Name>
            <Data>@{tag}</Data>
            <Data>{location}</Data>
        </Info>
    );
};

ProfileMain.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    }).isRequired,
};