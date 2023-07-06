import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operation';
import {
  Container,
  ContainerBox,
  Form,
  Input,
  Button,
  Title,
  Span,
} from '../LoginForm/LoginForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Container>
      <Title>Register</Title>
      <Form onSubmit={handleSubmit}>
        <ContainerBox>
          <Input
            type="text"
            name="name"
            placeholder="Enter your nane"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </ContainerBox>
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
          Register
        </Button>
      </Form>
    </Container>
  );
};
