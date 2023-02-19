import styled from '@emotion/styled';

export const TableTransaction = styled.table`
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
  background-color: #f5f5f5;
  text-align: center;
  border-radius: 10px;
  border: 1px solid black;
`;

export const TableHead = styled.th`
  background-color: lightblue;
`;

export const TableRow = styled.tr`
  :nth-child(2n) {
    background-color: lightgreen;
  }
`;

export const TableData = styled.td``;
