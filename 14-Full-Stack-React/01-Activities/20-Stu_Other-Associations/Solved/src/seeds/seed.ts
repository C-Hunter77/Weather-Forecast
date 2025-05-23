import { Reader, LibraryCard, Book, Author } from '../models/index.js';

import readerSeedData from './readerSeedData.json' with { type: 'json' };
import authorSeedData from './authorSeedData.json' with { type: 'json' };
import bookSeedData from './bookSeedData.json' with { type: 'json' };

export const seedDatabase = async () => {
  await Author.bulkCreate(authorSeedData, {
    validate: true,
  });

  const books = await Book.bulkCreate(bookSeedData, {
    returning: true,
    validate: true,
  });

  console.log('\n----- AUTHORS AND BOOKS SEEDED -----\n');

  const readers = await Reader.bulkCreate(readerSeedData, {
    individualHooks: true,
    returning: true,
    validate: true,
  });

  for (const reader of readers) {
    console.log('Creating library card for reader with id:', reader.id);
    await LibraryCard.create({
      readerId: reader.id,
    });



    console.log('Checking out books for reader with id:', reader.id);
    const randomBooks = books.slice(Math.floor(Math.random() * books.length));
    await reader.addBooks(randomBooks);
  }
};
