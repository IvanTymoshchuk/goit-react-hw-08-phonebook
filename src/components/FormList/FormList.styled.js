import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Label = styled.label`
  color: ${(p) => p.theme.colors.white};
`;
export const Input = styled.input`
  width: 350px;
  margin-bottom: 15px;
  background: rgba(0, 0, 0, 0.3);
  border: ${(p) => p.theme.border.none};
  outline: none;
  padding: 10px;
  font-size: ${(p) => p.theme.fontSize.s};
  color: ${(p) => p.theme.colors.grey};
  text-shadow: ${(p) => p.theme.boxShadow.textShadow};
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow:${(p) => p.theme.boxShadow.textShadow};
  &:focus {
    box-shadow:${(p) => p.theme.boxShadow.boxShadow};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  color: ${(p) => p.theme.colors.white};
  padding: 5px 10px 5px;
  
  background: rgba(0, 0, 0, 0.3);
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: ${(p) => p.theme.boxShadow.boxShadow};
  :focus,
  :hover {
    color: ${(p) => p.theme.colors.green}; 
    box-shadow: ${(p) => p.theme.boxShadow.boxShadow};
  }
`;

export const Span = styled.span`
  display: flex;
  margin-bottom: 3px;
`;
