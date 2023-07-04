import styled from '@emotion/styled';

export const Container = styled.div`
    padding: 40px;
    width: 400px;
    margin: 0 auto;
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: ${(p) => p.theme.fontSize.xl};
  color: ${(p) => p.theme.colors.white};
`;