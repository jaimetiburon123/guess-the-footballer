// players.js — the squad of mystery players.
// Age is calculated from the birth date, so it never goes out of date.
// Clubs and shirt numbers change with transfers: check them before submitting.

const PLAYERS = [
  { name: "Kylian Mbappé", club: "Real Madrid", league: "LaLiga", country: "France", position: "Forward", shirt: 10, born: "1998-12-20" },
  { name: "Vinícius Júnior", club: "Real Madrid", league: "LaLiga", country: "Brazil", position: "Forward", shirt: 7, born: "2000-07-12" },
  { name: "Jude Bellingham", club: "Real Madrid", league: "LaLiga", country: "England", position: "Midfielder", shirt: 5, born: "2003-06-29" },
  { name: "Federico Valverde", club: "Real Madrid", league: "LaLiga", country: "Uruguay", position: "Midfielder", shirt: 8, born: "1998-07-22" },
  { name: "Trent Alexander-Arnold", club: "Real Madrid", league: "LaLiga", country: "England", position: "Defender", shirt: 12, born: "1998-10-07" },
  { name: "Thibaut Courtois", club: "Real Madrid", league: "LaLiga", country: "Belgium", position: "Goalkeeper", shirt: 1, born: "1992-05-11" },
  { name: "Lamine Yamal", club: "Barcelona", league: "LaLiga", country: "Spain", position: "Forward", shirt: 10, born: "2007-07-13" },
  { name: "Pedri", club: "Barcelona", league: "LaLiga", country: "Spain", position: "Midfielder", shirt: 8, born: "2002-11-25" },
  { name: "Raphinha", club: "Barcelona", league: "LaLiga", country: "Brazil", position: "Forward", shirt: 11, born: "1996-12-14" },
  { name: "Robert Lewandowski", club: "Barcelona", league: "LaLiga", country: "Poland", position: "Forward", shirt: 9, born: "1988-08-21" },
  { name: "Julián Álvarez", club: "Atlético Madrid", league: "LaLiga", country: "Argentina", position: "Forward", shirt: 19, born: "2000-01-31" },

  { name: "Erling Haaland", club: "Manchester City", league: "Premier League", country: "Norway", position: "Forward", shirt: 9, born: "2000-07-21" },
  { name: "Rodri", club: "Manchester City", league: "Premier League", country: "Spain", position: "Midfielder", shirt: 16, born: "1996-06-22" },
  { name: "Phil Foden", club: "Manchester City", league: "Premier League", country: "England", position: "Midfielder", shirt: 47, born: "2000-05-28" },
  { name: "Mohamed Salah", club: "Liverpool", league: "Premier League", country: "Egypt", position: "Forward", shirt: 11, born: "1992-06-15" },
  { name: "Virgil van Dijk", club: "Liverpool", league: "Premier League", country: "Netherlands", position: "Defender", shirt: 4, born: "1991-07-08" },
  { name: "Florian Wirtz", club: "Liverpool", league: "Premier League", country: "Germany", position: "Midfielder", shirt: 7, born: "2003-05-03" },
  { name: "Alexander Isak", club: "Liverpool", league: "Premier League", country: "Sweden", position: "Forward", shirt: 9, born: "1999-09-21" },
  { name: "Alisson", club: "Liverpool", league: "Premier League", country: "Brazil", position: "Goalkeeper", shirt: 1, born: "1992-10-02" },
  { name: "Bukayo Saka", club: "Arsenal", league: "Premier League", country: "England", position: "Forward", shirt: 7, born: "2001-09-05" },
  { name: "Martin Ødegaard", club: "Arsenal", league: "Premier League", country: "Norway", position: "Midfielder", shirt: 8, born: "1998-12-17" },
  { name: "Declan Rice", club: "Arsenal", league: "Premier League", country: "England", position: "Midfielder", shirt: 41, born: "1999-01-14" },
  { name: "William Saliba", club: "Arsenal", league: "Premier League", country: "France", position: "Defender", shirt: 2, born: "2001-03-24" },
  { name: "Cole Palmer", club: "Chelsea", league: "Premier League", country: "England", position: "Midfielder", shirt: 10, born: "2002-05-06" },
  { name: "Bruno Fernandes", club: "Manchester United", league: "Premier League", country: "Portugal", position: "Midfielder", shirt: 8, born: "1994-09-08" },

  { name: "Harry Kane", club: "Bayern Munich", league: "Bundesliga", country: "England", position: "Forward", shirt: 9, born: "1993-07-28" },
  { name: "Jamal Musiala", club: "Bayern Munich", league: "Bundesliga", country: "Germany", position: "Midfielder", shirt: 10, born: "2003-02-26" },
  { name: "Joshua Kimmich", club: "Bayern Munich", league: "Bundesliga", country: "Germany", position: "Midfielder", shirt: 6, born: "1995-02-08" },
  { name: "Michael Olise", club: "Bayern Munich", league: "Bundesliga", country: "France", position: "Forward", shirt: 17, born: "2001-12-12" },

  { name: "Lautaro Martínez", club: "Inter", league: "Serie A", country: "Argentina", position: "Forward", shirt: 10, born: "1997-08-22" },
  { name: "Nicolò Barella", club: "Inter", league: "Serie A", country: "Italy", position: "Midfielder", shirt: 23, born: "1997-02-07" },
  { name: "Rafael Leão", club: "AC Milan", league: "Serie A", country: "Portugal", position: "Forward", shirt: 10, born: "1999-06-10" },
  { name: "Luka Modrić", club: "AC Milan", league: "Serie A", country: "Croatia", position: "Midfielder", shirt: 14, born: "1985-09-09" },
  { name: "Kevin De Bruyne", club: "Napoli", league: "Serie A", country: "Belgium", position: "Midfielder", shirt: 11, born: "1991-06-28" },

  { name: "Ousmane Dembélé", club: "PSG", league: "Ligue 1", country: "France", position: "Forward", shirt: 10, born: "1997-05-15" },
  { name: "Achraf Hakimi", club: "PSG", league: "Ligue 1", country: "Morocco", position: "Defender", shirt: 2, born: "1998-11-04" },
  { name: "Vitinha", club: "PSG", league: "Ligue 1", country: "Portugal", position: "Midfielder", shirt: 17, born: "2000-02-13" },
  { name: "Khvicha Kvaratskhelia", club: "PSG", league: "Ligue 1", country: "Georgia", position: "Forward", shirt: 7, born: "2001-02-12" },

  { name: "Lionel Messi", club: "Inter Miami", league: "MLS", country: "Argentina", position: "Forward", shirt: 10, born: "1987-06-24" },
  { name: "Son Heung-min", club: "LAFC", league: "MLS", country: "South Korea", position: "Forward", shirt: 7, born: "1992-07-08" },
  { name: "Cristiano Ronaldo", club: "Al Nassr", league: "Saudi Pro League", country: "Portugal", position: "Forward", shirt: 7, born: "1985-02-05" },
  { name: "Victor Osimhen", club: "Galatasaray", league: "Süper Lig", country: "Nigeria", position: "Forward", shirt: 45, born: "1998-12-29" },
];
