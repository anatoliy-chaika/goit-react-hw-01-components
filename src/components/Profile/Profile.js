import PropTypes from 'prop-types';
import {
  DescriptionBlock,
  DescriptionText,
  DescriptionImg,
  DescriptionName,
  Statistics,
  StatisticsLabel,
  StatisticsQuantity,
  ProfileBlock,
} from './Profile.styled';

export const Profile = ({
  item: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileBlock>
      <DescriptionBlock>
        <DescriptionImg src={avatar} alt="User avatar" />
        <DescriptionName>{username}</DescriptionName>
        <DescriptionText>@{tag}</DescriptionText>
        <DescriptionText>{location}</DescriptionText>
      </DescriptionBlock>

      <Statistics>
        <li>
          <StatisticsLabel>Followers</StatisticsLabel>
          <StatisticsQuantity>{followers}</StatisticsQuantity>
        </li>
        <li>
          <StatisticsLabel>Likes</StatisticsLabel>
          <StatisticsQuantity>{likes}</StatisticsQuantity>
        </li>
        <li>
          <StatisticsLabel>Views</StatisticsLabel>
          <StatisticsQuantity>{views}</StatisticsQuantity>
        </li>
      </Statistics>
    </ProfileBlock>
  );
};

Profile.propTypes = {
  item: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
