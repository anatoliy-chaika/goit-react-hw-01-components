import styled from '@emotion/styled';

export const StatisticBlock = styled.div`
  margin: 50px auto;
  max-width: 1000px;
  padding: 20px;
  border-radius: 10px;
  background-color: #f5f5f5;
`;

export const Title = styled.h2`
  text-align: center;
  margin: 20px;
`;

export const StatisticList = styled.ul`
  display: flex;

  justify-content: space-between;
`;

export const StatisticItem = styled.li`
  display: flex;
  padding: 15px;
  gap: 15px;
  flex-direction: column;
  min-width: 100px;
  background-color: ${randomColor};
`;

export const Lable = styled.span`
  text-align: center;
`;

export const Percentage = styled.span`
  text-align: center;
`;

function randomColor() {
  return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;
}
