import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const currentContacts = await readContacts();
    const oneContact = createFakeContact();
    await writeContacts([...currentContacts, oneContact]);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
