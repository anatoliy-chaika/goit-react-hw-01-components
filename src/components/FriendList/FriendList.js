import PropTypes from 'prop-types';
import {
  FriendsBlock,
  FriendsList,
  FriendsItem,
  FriendStatus,
  FriendsImg,
  FriendsName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsBlock>
      <FriendsList>
        {friends.map(({ avatar, name, isOnline, id }) => (
          <FriendsItem key={id}>
            <FriendStatus isActive={isOnline}></FriendStatus>
            <FriendsImg src={avatar} alt="User avatar" width="48" />
            <FriendsName>{name}</FriendsName>
          </FriendsItem>
        ))}
      </FriendsList>
    </FriendsBlock>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
