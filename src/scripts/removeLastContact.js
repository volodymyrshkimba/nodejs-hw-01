import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const currentContacts = await readContacts();

    if (currentContacts.length === 0) return;

    currentContacts.pop();
    await writeContacts(currentContacts);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
