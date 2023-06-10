import styled from "styled-components";

const Input = styled.input`
  padding: ${(props) => props.theme.spacing.small};
  border: 1px solid ${(props) => props.theme.color.secondary};
  border-radius: 4px;
`;

export default Input;
