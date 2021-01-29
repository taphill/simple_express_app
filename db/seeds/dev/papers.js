
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('footnotes').del()
  .then(() => { 
    knex('papers').del()
  })
  .then(function () {
    return knex('papers').insert([
      { id: 1, title: 'Fooo', author: 'Bob', publisher: 'Minnesota' },
    ]);
  })
  .then(paper => {
    return knex('footnotes').insert([
      { note: 'Lorem', paper_id: 1 },
      { note: 'Dolor', paper_id: 1 }
    ])
  })
  .then(() => console.log('Seeding complete!'))
  .catch(error => console.log(`Error seeding data: ${error}`))
};
