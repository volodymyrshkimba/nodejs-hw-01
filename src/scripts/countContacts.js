import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const currentContacts = await readContacts();

    return currentContacts.length;
  } catch (error) {
    console.log(error);
  }
};

console.log(await countContacts());
