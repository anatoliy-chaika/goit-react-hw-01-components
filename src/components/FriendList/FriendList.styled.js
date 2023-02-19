import styled from '@emotion/styled';

export const FriendsBlock = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 10px;
`;

export const FriendsList = styled.ul``;

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #eee;
  :last-child {
    border-bottom: none;
  }
`;

export const FriendStatus = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  margin-right: 12px;
  background-color: ${props => {
    if (props.isActive) {
      return 'green';
    }
  }};
`;

export const FriendsImg = styled.img`
  display: block;
  border-radius: 50%;
  margin: auto;
`;

export const FriendsName = styled.p`
  font-weight: bold;
  text-align: center;
`;
