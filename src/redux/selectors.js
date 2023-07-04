export const getContacts = state => state.contacts.items; 

export const getFilter = state => state.filter; 


export const getVisibleContacts = state => {
  const contacts = getContacts(state); 
  const filter = getFilter(state); 
  const normalizedFilter = filter.toLowerCase(); 

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
