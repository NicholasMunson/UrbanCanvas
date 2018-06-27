
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('art_card').del()
    .then(function () {
      // Inserts seed entries
      return knex('art_card').insert([{
        id: 1,
        imgUrl: 'http://via.placeholder.com/500x500',
        description: 'Bacon ipsum dolor amet pastrami prosciutto doner bacon landjaeger salami ground round chicken strip steak short ribs beef ribs sirloin spare ribs. Fatback chuck ground round, drumstick cupim brisket jerky pork loin venison beef ribs burgdoggen shank corned beef tri-tip. Ribeye filet mignon turducken tri-tip chuck, drumstick tenderloin short ribs fatback cow. Flank picanha jerky shank. Kevin ball tip shankle ribeye jowl venison. Ham hock pork belly tenderloin, doner swine prosciutto porchetta. Pork loin strip steak leberkas salami meatball drumstick',
        location: '1234 yo mama'
      }, {
        id: 2,
        imgUrl: 'http://via.placeholder.com/500x500',
        description: 'Bacon ipsum dolor amet pastrami prosciutto doner bacon landjaeger salami ground round chicken strip steak short ribs beef ribs sirloin spare ribs. Fatback chuck ground round, drumstick cupim brisket jerky pork loin venison beef ribs burgdoggen shank corned beef tri-tip. Ribeye filet mignon turducken tri-tip chuck, drumstick tenderloin short ribs fatback cow. Flank picanha jerky shank. Kevin ball tip shankle ribeye jowl venison. Ham hock pork belly tenderloin, doner swine prosciutto porchetta. Pork loin strip steak leberkas salami meatball drumstick',
        location: '1234 yo mama'
      }, {
        id: 3,
        imgUrl: 'http://via.placeholder.com/500x500',
        description: 'Bacon ipsum dolor amet pastrami prosciutto doner bacon landjaeger salami ground round chicken strip steak short ribs beef ribs sirloin spare ribs. Fatback chuck ground round, drumstick cupim brisket jerky pork loin venison beef ribs burgdoggen shank corned beef tri-tip. Ribeye filet mignon turducken tri-tip chuck, drumstick tenderloin short ribs fatback cow. Flank picanha jerky shank. Kevin ball tip shankle ribeye jowl venison. Ham hock pork belly tenderloin, doner swine prosciutto porchetta. Pork loin strip steak leberkas salami meatball drumstick',
        location: '1234 yo mama'
      }]);
    }).then(() => {
      return knex.raw('ALTER SEQUENCE art_card_id_seq RESTART WITH 4;');
    });
};
