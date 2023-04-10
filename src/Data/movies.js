// Movies data from: https://www.themoviedb.org

/*
  interface Movie {
    id: number,
    name: string,
    genre: string[],
    release: string,
    duration: number,
    overview: string,
    images: string[],
    cast: string[],
    director: string,
    keywords: string[],
    userScore: number,
    trailer: string,
    price: number
  }
*/

export const movies = [
  {
    id: 1,
    name: 'The Panic in Needle Park',
    genre: ['Drama', 'Romance'],
    release: '13/07/1971',
    duration: 110,
    overview:
      'A stark portrayal of life among a group of heroin addicts who hang out in Needle Park in New York City. Played against this setting is a low-key love story between Bobby, a young addict and small-time hustler, and Helen, a homeless girl who finds in her relationship with Bobby the stability she craves.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rhJ8Dnl6Z9KR9R2zskBKIfrFeFs.jpg'
    ],
    cast: [
      'Al Pacino',
      'Kitty Winn',
      'Alan Vint',
      'Richard Bright',
      'Kiel Martin'
    ],
    director: 'Jerry Schatzberg',
    keywords: ['drug addiction', 'love', 'betrayal', 'death of pet', 'needle'],
    userScore: 68,
    trailer: 'https://www.youtube.com/watch?v=eNeN9ZU2CSM',
    price: 4
  },
  {
    id: 2,
    name: 'Blue Valentine',
    genre: ['Drama', 'Romance'],
    release: '29/12/2010',
    duration: 112,
    overview:
      'Dean and Cindy live a quiet life in a modest neighborhood. They appear to have the world at their feet at the outset of the relationship. However, his lack of ambition and her retreat into self-absorption cause potentially irreversible cracks in their marriage.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/vqQPrOc0XCloZhuOeR66wjsnyUo.jpg'
    ],
    cast: [
      'Ryan Gosling',
      'Michelle Williams',
      'John Doman',
      'Mike Vogel',
      'Ben Shenkman'
    ],
    director: 'Derek Cianfrance',
    keywords: [
      'dancing',
      'depression',
      'marriage',
      'love',
      'dysfunctional family'
    ],
    userScore: 69,
    trailer: 'https://www.youtube.com/watch?v=aw0NChcdQfQ',
    price: 6
  },
  {
    id: 3,
    name: 'Shutter Island',
    genre: ['Drama', 'Thriller', 'Mystery'],
    release: '18/02/2010',
    duration: 138,
    overview:
      'World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4GDy0PHYX3VRXUtwK5ysFbg3kEx.jpg'
    ],
    cast: [
      'Leonardo DiCaprio',
      'Mark Ruffalo',
      'Ben Kingsley',
      'Michelle Williams',
      'Max von Sydow'
    ],
    director: 'Martin Scorsese',
    keywords: [
      'based on novel or book',
      'investigation',
      'psychiatric hospital',
      'conspirancy theory',
      'psychological thriller'
    ],
    userScore: 82,
    trailer: 'https://www.youtube.com/watch?v=qdPw9x9h5CY',
    price: 10
  },
  {
    id: 4,
    name: 'Fight Club',
    genre: ['Drama', 'Thriller', 'Comedy'],
    release: '04/11/1999',
    duration: 139,
    overview:
      'A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground "fight clubs" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg'
    ],
    cast: [
      'Edward Norton',
      'Brad Pitt',
      'Helena Bonham Carter',
      'Meat Loaf',
      'Jared Leto'
    ],
    director: 'David Fincher',
    keywords: [
      'based on novel or book',
      'support group',
      'dual identity',
      'fight',
      'rage and hate'
    ],
    userScore: 84,
    trailer: 'https://www.youtube.com/watch?v=BdJKm16Co6M',
    price: 9
  },
  {
    id: 5,
    name: 'American Psycho',
    genre: ['Thriller', 'Drama', 'Crime'],
    release: '24/08/2000',
    duration: 102,
    overview:
      'A wealthy New York investment banking executive hides his alternate psychopathic ego from his co-workers and friends as he escalates deeper into his illogical, gratuitous fantasies.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9uGHEgsiUXjCNq8wdq4r49YL8A1.jpg'
    ],
    cast: [
      'Christian Bale',
      'Willem Dafoe',
      'Jared Leto',
      'Josh Lucas',
      'Samantha Mathis'
    ],
    director: 'Mary Harron',
    keywords: [
      'based on novel or book',
      'wall street',
      'psychopath',
      'serial killer',
      'dark comedy'
    ],
    userScore: 74,
    trailer: 'https://www.youtube.com/watch?v=5YnGhW4UEhc',
    price: 7
  },
  {
    id: 6,
    name: 'Your Name.',
    genre: ['Romance', 'Animation', 'Drama'],
    release: '26/08/2016',
    duration: 106,
    overview:
      'High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/q719jXXEzOoYaps6babgKnONONX.jpg'
    ],
    cast: [
      'Ryunosuke Kamiki',
      'Mone Kamishiraishi',
      'Ryo Narita',
      'Aoi Yuki',
      'Nobunaga Shimazaki'
    ],
    director: 'Makoto Shinkai',
    keywords: [
      'time travel',
      'anime',
      'natural disaster',
      'romance',
      'race against time'
    ],
    userScore: 85,
    trailer: 'https://www.youtube.com/watch?v=ayi6VfCKBcA',
    price: 5
  },
  {
    id: 7,
    name: 'The Batman',
    genre: ['Crime', 'Mystery', 'Thriller'],
    release: '02/03/2022',
    duration: 177,
    overview:
      'In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg'
    ],
    cast: [
      'Robert Pattinson',
      'Zoë Kravitz',
      'Paul Dano',
      'Jeffrey Wright',
      'John Turturro'
    ],
    director: 'Matt Reeves',
    keywords: [
      'superhero',
      'politician',
      'based on comic',
      'secret identity',
      'psychopath'
    ],
    userScore: 77,
    trailer: 'https://www.youtube.com/watch?v=vc7_mH2PWHs',
    price: 12
  },
  {
    id: 8,
    name: 'Pride & Prejudice',
    genre: ['Drama', 'Romance'],
    release: '16/09/2005',
    duration: 127,
    overview:
      "A story of love and life among the landed English gentry during the Georgian era. Mr. Bennet is a gentleman living in Hertfordshire with his overbearing wife and five daughters, but if he dies their house will be inherited by a distant cousin whom they have never met, so the family's future happiness and security is dependent on the daughters making good marriages.",
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sGjIvtVvTlWnia2zfJfHz81pZ9Q.jpg'
    ],
    cast: [
      'Keira Knightley',
      'Matthew Macfadyen',
      'Brenda Blethyn',
      'Donald Sutherland',
      'Rosamund Pike'
    ],
    director: 'Joe Wright',
    keywords: [
      'based on novel or book',
      'period drama',
      'family relationships',
      'england',
      'bachelor'
    ],
    userScore: 81,
    trailer: 'https://www.youtube.com/watch?v=Ur_DIHs92NM',
    price: 6
  },
  {
    id: 9,
    name: 'The Nice Guys',
    genre: ['Comedy', 'Crime', 'Action'],
    release: '16/06/2016',
    duration: 116,
    overview:
      'A private eye investigates the apparent suicide of a fading porn star in 1970s Los Angeles and uncovers a conspiracy.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/clq4So9spa9cXk3MZy2iMdqkxP2.jpg'
    ],
    cast: [
      'Ryan Gosling',
      'Russell Crowe',
      'Angourie Rice',
      'Margaret Qualley',
      'Kim Basinger'
    ],
    director: 'Shane Black',
    keywords: [
      'detective',
      'investigation',
      'pornography',
      '1970s',
      'conspiracy'
    ],
    userScore: 71,
    trailer: 'https://www.youtube.com/watch?v=GQR5zsLHbYw',
    price: 8
  },
  {
    id: 10,
    name: 'Gladiator',
    genre: ['Action', 'Drama', 'Adventure'],
    release: '05/05/2000',
    duration: 155,
    overview:
      "In the year 180, the death of emperor Marcus Aurelius throws the Roman Empire into chaos. Maximus is one of the Roman army's most capable and trusted generals and a key advisor to the emperor. As Marcus' devious son Commodus ascends to the throne, Maximus is set to be executed. He escapes, but is captured by slave traders. Renamed Spaniard and forced to become a gladiator, Maximus must battle to the death with other men for the amusement of paying audiences.",
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/dJ2Lr6oglSqyQtoynGl3C8LUnNH.jpg'
    ],
    cast: [
      'Russell Crowe',
      'Joaquin Phoenix',
      'Connie Nielsen',
      'Oliver Reed',
      'Richard Harris'
    ],
    director: 'Ridley Scott',
    keywords: [
      'gladiator',
      'rome, italy',
      'parent child relationship',
      'roman empire',
      'fight'
    ],
    userScore: 82,
    trailer: 'https://www.youtube.com/watch?v=P5ieIbInFpg',
    price: 8
  },
  {
    id: 11,
    name: 'Marriage Story',
    genre: ['Drama'],
    release: '06/11/2019',
    duration: 137,
    overview:
      'A stage director and an actress struggle through a grueling, coast-to-coast divorce that pushes them to their personal extremes.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2JRyCKaRKyJAVpsIHeLvPw5nHmw.jpg'
    ],
    cast: [
      'Adam Driver',
      'Scarlett Johansson',
      'Laura Dern',
      'Alan Alda',
      'Ray Liotta'
    ],
    director: 'Noah Baumbach',
    keywords: [
      'new york city',
      'husband wife relationship',
      'parent child relationship',
      'divorce',
      'theatre group'
    ],
    userScore: 78,
    trailer: 'https://www.youtube.com/watch?v=BHi-a1n8t7M',
    price: 10
  },
  {
    id: 12,
    name: 'Eternal Sunshine of the Spotless Mind',
    genre: ['Science Fiction', 'Drama', 'Romance'],
    release: '19/03/2004',
    duration: 108,
    overview:
      'Joel Barish, heartbroken that his girlfriend underwent a procedure to erase him from her memory, decides to do the same. However, as he watches his memories of her fade away, he realises that he still loves her, and may be too late to correct his mistake.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg'
    ],
    cast: [
      'Jim Carrey',
      'Kate Winslet',
      'Kirsten Dunst',
      'Mark Ruffalo',
      'Elijah Wood'
    ],
    director: 'Michel Gondry',
    keywords: [
      'new york city',
      'deja vu',
      'amnesia',
      'relationship problems',
      'love'
    ],
    userScore: 81,
    trailer: 'https://www.youtube.com/watch?v=Lv4BNEn4kKo',
    price: 7
  },
  {
    id: 13,
    name: 'A Bronx Tale',
    genre: ['Drama', 'Crime'],
    release: '14/09/1993',
    duration: 121,
    overview:
      "Set in the Bronx during the tumultuous 1960s, an adolescent boy is torn between his honest, working-class father and a violent yet charismatic crime boss. Complicating matters is the youngster's growing attraction - forbidden in his neighborhood - for a beautiful black girl.",
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sDbO6LmLYtyqAoFTPpRcMgPSCEO.jpg'
    ],
    cast: [
      'Robert De Niro',
      'Chazz Palminteri',
      'Lillo Brancato',
      'Francis Capra',
      'Taral Hicks'
    ],
    director: 'Robert De Niro',
    keywords: [
      'gambling',
      'black people',
      'italian american',
      'gangster',
      'loyalty'
    ],
    userScore: 78,
    trailer: 'https://www.youtube.com/watch?v=z50PjmZYS4A',
    price: 9
  },
  {
    id: 14,
    name: 'Scarface',
    genre: ['Action', 'Crime', 'Drama'],
    release: '09/02/1984',
    duration: 150,
    overview:
      'After getting a green card in exchange for assassinating a Cuban government official, Tony Montana stakes a claim on the drug trade in Miami. Viciously murdering anyone who stands in his way, Tony eventually becomes the biggest drug lord in the state, controlling nearly all the cocaine that comes through Miami. But increased pressure from the police, wars with Colombian drug cartels and his own drug-fueled paranoia serve to fuel the flames of his eventual downfall.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iQ5ztdjvteGeboxtmRdXEChJOHh.jpg'
    ],
    cast: [
      'Al Pacino',
      'Steven Bauer',
      'Michelle Pfeiffer',
      'Mary Elizabeth Mastrantonio',
      'Robert Loggia'
    ],
    director: 'Brian De Palma',
    keywords: [
      'gangster',
      'cocaine',
      'drug lord',
      'rise and fall',
      'loss of loved one'
    ],
    userScore: 82,
    trailer: 'https://www.youtube.com/watch?v=7pQQHnqBa2E',
    price: 10
  },
  {
    id: 15,
    name: 'Pulp Fiction',
    genre: ['Thriller', 'Crime'],
    release: '16/02/1995',
    duration: 154,
    overview:
      "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg'
    ],
    cast: [
      'John Travolta',
      'Samuel L. Jackson',
      'Uma Thurman',
      'Bruce Willis',
      'Ving Rhames'
    ],
    director: 'Quentin Tarantino',
    keywords: [
      'drug dealer',
      'boxer',
      'crime boss',
      'multiple storylines',
      'stolen money'
    ],
    userScore: 85,
    trailer: 'https://www.youtube.com/watch?v=s7EdQ4FqbhY',
    price: 8
  },
  {
    id: 16,
    name: 'The Perks of Being a Wallflower',
    genre: ['Drama'],
    release: '29/11/2012',
    duration: 103,
    overview:
      'Pittsburgh, Pennsylvania, 1991. High school freshman Charlie is a wallflower, always watching life from the sidelines, until two senior students, Sam and her stepbrother Patrick, become his mentors, helping him discover the joys of friendship, music and love.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aKCvdFFF5n80P2VdS7d8YBwbCjh.jpg'
    ],
    cast: [
      'Logan Lerman',
      'Emma Watson',
      'Ezra Miller',
      'Mae Whitman',
      'Kate Walsh'
    ],
    director: 'Stephen Chbosky',
    keywords: [
      'based on novel or book',
      'trauma',
      'friendship',
      'love',
      'high school'
    ],
    userScore: 78,
    trailer: 'https://www.youtube.com/watch?v=n5rh7O4IDc0',
    price: 6
  },
  {
    id: 17,
    name: 'Crazy, Stupid, Love.',
    genre: ['Comedy', 'Drama', 'Romance'],
    release: '29/07/2011',
    duration: 118,
    overview:
      "Cal Weaver is living the American dream. He has a good job, a beautiful house, great children and a beautiful wife, named Emily. Cal's seemingly perfect life unravels, however, when he learns that Emily has been unfaithful and wants a divorce. Over 40 and suddenly single, Cal is adrift in the fickle world of dating. Enter, Jacob Palmer, a self-styled player who takes Cal under his wing and teaches him how to be a hit with the ladies.",
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/p4RafgAPk558muOjnBMHhMArjS2.jpg'
    ],
    cast: [
      'Steve Carell',
      'Ryan Gosling',
      'Julianne Moore',
      'Emma Stone',
      'Jonah Bobo'
    ],
    director: 'John Requa',
    keywords: [
      'midlife crisis',
      'marriage',
      'relationship',
      'love',
      'soulmates'
    ],
    userScore: 73,
    trailer: 'https://www.youtube.com/watch?v=8iCwtxJejik',
    price: 4
  },
  {
    id: 18,
    name: 'Uncut Gems',
    genre: ['Drama', 'Thriller', 'Crime'],
    release: '13/12/2019',
    duration: 136,
    overview:
      'A charismatic New York City jeweler always on the lookout for the next big score makes a series of high-stakes bets that could lead to the windfall of a lifetime. Howard must perform a precarious high-wire act, balancing business, family, and encroaching adversaries on all sides in his relentless pursuit of the ultimate win.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6XN1vxHc7kUSqNWtaQKN45J5x2v.jpg'
    ],
    cast: [
      'Adam Sandler',
      'Lakeith Stanfield',
      'Julia Fox',
      'Kevin Garnett',
      'Idina Menzel'
    ],
    director: 'Benny Safdie',
    keywords: [
      'gambling',
      'infidelity',
      'relationship',
      'basketball',
      'new york city'
    ],
    userScore: 71,
    trailer: 'https://www.youtube.com/watch?v=vTfJp2Ts9X8',
    price: 6
  },
  {
    id: 19,
    name: 'Spirited Away',
    genre: ['Animation', 'Family', 'Fantasy'],
    release: '17/07/2003',
    duration: 125,
    overview:
      'A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.',
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg'
    ],
    cast: [
      'Rumi Hiiragi',
      'Miyu Irino',
      'Mari Natsuki',
      'Bunta Sugawara',
      'Akio Nakamura'
    ],
    director: 'Hayao Miyazaki',
    keywords: [
      'witch',
      'magic',
      'parent child relationship',
      'anime',
      'parallel world'
    ],
    userScore: 85,
    trailer: 'https://www.youtube.com/watch?v=ByXuk9QqQkk',
    price: 5
  },
  {
    id: 20,
    name: 'Ratatouille',
    genre: ['Animation', 'Comedy', 'Family', 'Fantasy'],
    release: '29/06/2007',
    duration: 111,
    overview:
      "Remy, a resident of Paris, appreciates good food and has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, the rodent gourmet finds himself ideally placed to realize his dream.",
    images: [
      'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg'
    ],
    cast: [
      'Patton Oswalt',
      'Ian Holm',
      'Lou Romano',
      'Brian Dennehy',
      'Peter Sohn'
    ],
    director: 'Brad Bird',
    keywords: [
      'paris, france',
      'sibling relationship',
      'restaurant',
      'mouse',
      'disney'
    ],
    userScore: 78,
    trailer: 'https://www.youtube.com/watch?v=NgsQ8mVkN8w',
    price: 7
  }
]
