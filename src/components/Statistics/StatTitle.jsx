import PropTypes from 'prop-types';
import { Title } from "./Statistics.styled";

export const StatTitle = ({ title  }) => {
    return (
        title && <Title>{title}</Title>
    );
};

StatTitle.propTypes = {
    name: PropTypes.string
}