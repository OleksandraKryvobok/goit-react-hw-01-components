import PropTypes from 'prop-types';
import { StatTitle } from './StatTitle';
import { Container, List, Item, Label, Percentage } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
    return (
        <Container>
            <StatTitle title={title}></StatTitle>

            <List>
                {stats.map(({ id, label, percentage }) => (
                    <Item key={id}>
                        <Label>{label}</Label>
                        <Percentage>{percentage}%</Percentage>
                    </Item>
                ))}
            </List>
        </Container>
    );
};

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
};