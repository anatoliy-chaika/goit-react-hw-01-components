import PropTypes from 'prop-types';
import {
  StatisticBlock,
  Title,
  StatisticList,
  StatisticItem,
  Lable,
  Percentage,
} from './Statistics.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <StatisticBlock>
      {title && <Title>{title}</Title>}
      <StatisticList>
        {stats.map(({ id, label, percentage }) => (
          <StatisticItem key={id} style={{ backgroundColor: randomColor() }}>
            <Lable>{label}</Lable>
            <Percentage>{percentage}%</Percentage>
          </StatisticItem>
        ))}
      </StatisticList>
    </StatisticBlock>
  );
};

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
