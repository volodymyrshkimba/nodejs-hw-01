import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();
    const newContacts = Array(number).fill(0).map(createFakeContact);
    await writeContacts([...currentContacts, ...newContacts]);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(1);
