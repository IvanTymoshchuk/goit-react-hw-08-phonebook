import styled from '@emotion/styled';

export const ListWrap = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: ${(p) => p.theme.space[4]}px;
`;
export const List = styled.li`
  padding: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: ${(p) => p.theme.fontSize.m};
  color: ${(p) => p.theme.colors.white};
`;
