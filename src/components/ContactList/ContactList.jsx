import React from 'react';
import { ListWrap, List } from './ContactList.styled';
import { Button } from 'components/FormList/FormList.styled';
import { UserDeleteOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { getVisibleContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  return (
    <ListWrap>
      {contacts.map(({ id, name, number }) => (
        <List key={id}>
          {name + ' : ' + number}

          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            <UserDeleteOutlined />
          </Button>
        </List>
      ))}
    </ListWrap>
  );
};

export default ContactList;
