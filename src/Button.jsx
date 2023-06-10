import styled from "styled-components";

const Button = styled.button`
  background-color: ${(props) => props.theme.color.tertiary};
  color: white;
  padding: ${(props) => props.theme.spacing.small};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: ${(props) => props.theme.spacing.small};
`;

export default Button;
