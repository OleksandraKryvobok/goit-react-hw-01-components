import PropTypes from 'prop-types';
import { ProfileMain } from "./ProfileMain";
import { ProfileStats } from "./ProfileStats";
import { Container } from './Profile.styled';

export const Profile = ({ user }) => {
    return (
        <Container>
            <ProfileMain user={user}/>
            <ProfileStats user={user}/>
        </Container>
    )
};

Profile.propTypes = {
    user: PropTypes.shape().isRequired,
};