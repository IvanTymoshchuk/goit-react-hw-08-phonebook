import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operation';
import {
  Container,
  ContainerBox,
  Form,
  Input,
  Button,
  Title,
  Span,
} from '../LoginForm/LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerBox>
          <Input
            type="email"
            name="email"
            placeholder="Enter your email address"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            title="Please enter a valid email address"
            required
          />
        </ContainerBox>
        <ContainerBox>
          <Input
            type="password"
            name="password"
            placeholder="Enter your password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            title="The password must contain only Latin letters (both upper and lower case), numbers and other symbols"
            required
          />
        </ContainerBox>
        <Button type="submit">
          <Span></Span>
          <Span></Span>
          <Span></Span>
          <Span></Span>
          Login
        </Button>
      </Form>
    </Container>
  );
};
