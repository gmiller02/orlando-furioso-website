import logo from './logo.svg';
import './App.css';
import CharacterMap from './components/CharacterMap';

const characters = [
  {
    name: "Agramante",
    description: "A Saracen king of Africa, the son of Troiano.",
    x: 100,
    y: 100
  },
  {
    name: "Angelica",
    description: "Daughter of the Khan of Cathay (a realm in India).",
    x: 200,
    y: 100
  },
  {
    name: "Atlante",
    description: "An African sorcerer, from Carena. Ruggiero’s foster-father.",
    x: 300,
    y: 100
  },
  {
    name: "Astolfo",
    description: "A knight of France, son of King Otho of England, and cousin to Rinaldo, Orlando, Bradamante, and Ricciardetto. His horse is Rabicano (‘The Arabian’). He bears Argalia’s magic lance, and a magic horn given him by Logistilla.",
    x: 400,
    y: 100
  },
  {
    name: "Bradamante",
    description: "A warrior-maid, of the House of Chiaramonte. Rinaldo’s sister, and Ricciardetto’s twin, she is in love with Ruggiero, with whom she founds the House of Este.",
    x: 100,
    y: 200
  },
  {
    name: "Brandimarte",
    description: "The son of Monodante. Brother to Oliviero, Ziliante, and Aldabella. A Christian knight in love with Fiordelisa. His horse is named Batoldo.",
    x: 200,
    y: 200
  },
  {
    name: "Charlemagne",
    description: "Charles the Great, King of the Franks and Lombards, and Emperor of Rome. He is Orlando’s uncle.",
    x: 300,
    y: 200
  },
  {
    name: "Doralice",
    description: "Daughter of the King of Granada, Stordilano.",
    x: 400,
    y: 200
  },
  {
    name: "Fiordelisa",
    description: "In love with the knight Brandimarte.",
    x: 100,
    y: 300
  },
  {
    name: "Fiordispina",
    description: "Of Spain. In love with the warrior-maid Bradamante.",
    x: 200,
    y: 300
  },
  {
    name: "Isabella",
    description: "A noble Saracen lady. Loved by Zerbino.",
    x: 300,
    y: 300
  },
  {
    name: "Leone",
    description: "A Byzantine prince.",
    x: 400,
    y: 300
  },
  {
    name: "Mandricardo",
    description: "King of the Tartars. His father was Agricane.",
    x: 100,
    y: 400
  },
  {
    name: "Marfisa",
    description: "An Asian warrior-queen. Ruggiero’s twin sister.",
    x: 200,
    y: 400
  },
  {
    name: "Medoro",
    description: "A Saracen, loved by Angelica.",
    x: 300,
    y: 400
  },
  {
    name: "Orlando",
    description: "Count of Brava. Lord of Anglante. Son of Milone. Nephew to Charlemagne, and Almone. In love with Angelica. His sword is Durindana. His horse is Brigliador. At the start of Boiardo’s ‘Orlando Innamorato’ we are told that he has a wife, Alda.",
    x: 400,
    y: 400
  },
  {
    name: "Ricciardetto",
    description: "Son of Amone. Twin brother to Bradamante. Brother to Rinaldo.",
    x: 100,
    y: 500
  },
  {
    name: "Rinaldo",
    description: "Son of Amone, brother of Bradamante and Ricciardetto. A nobleman from Montalbano, of the House of Chiaramonte. His horse is named Bayard, his sword Fusberta. At the start of Boiardo’s ‘Orlando Innamorato’ we are told that he has a wife, Clarice.",
    x: 200,
    y: 500
  },
  {
    name: "Rodomonte",
    description: "Of Sarza, King of Algiers. The son of King Ulieno. A noted Saracen leader.",
    x: 300,
    y: 500
  },
  {
    name: "Ruggiero",
    description: "Grandson of Agolante, in love with Bradamante. His father also named Ruggiero (II) was a heathen descendent of Alexander the Great, and Hector. His sister is Marfisa. Their mother was Galaciella, Agolante’s daughter. His horse is named Frontino, his sword Balisarda. With Bradamante he founds the House of Este.",
    x: 400,
    y: 500
  },
  {
    name: "Zerbino",
    description: "The Duke of Ross, son of the Scottish king. Brother to Ginevra. Loved by Isabella.",
    x: 100,
    y: 600
  }
];

const relationships = [
  // Two-Way Romance
  {
    characters: ["Bradamante", "Ruggiero"],
    type: "two-way-romance"
  },
  {
    characters: ["Isabella", "Zerbino"],
    type: "two-way-romance"
  },
  {
    characters: ["Brandimarte", "Fiordelisa"],
    type: "two-way-romance"
  },
  {
    characters: ["Angelica", "Medoro"],
    type: "two-way-romance"
  },
  {
    characters: ["Ricciardetto", "Fiordispina"],
    type: "two-way-romance",

  },
  {
    characters: ["Doralice", "Mandricardo"],
    type: "two-way-romance"
  },
  
  // One-Way Romance
  {
    characters: ["Orlando", "Angelica"],
    type: "one-way-romance"
  },
  {
    characters: ["Rinaldo", "Angelica"],
    type: "one-way-romance"
  },
  {
    characters: ["Fiordispina", "Bradamante"],
    type: "one-way-romance"
  },
  {
    characters: ["Rodomonte", "Doralice"],
    type: "one-way-romance"
  },
  {
    characters: ["Rodomonte", "Isabella"],
    type: "one-way-romance"
  },
  {
    characters: ["Leone", "Bradamante"],
    type: "one-way-romance"
  },
  
  // Duels
  {
    characters: ["Rodomonte", "Mandricardo"],
    type: "duel"
  },
  {
    characters: ["Bradamante", "Ruggiero"],
    type: "duel"
  },
  {
    characters: ["Marfisa", "Bradamante"],
    type: "duel"
  },
  {
    characters: ["Mandricardo", "Orlando"],
    type: "duel"
  },
  {
    characters: ["Mandricardo", "Zerbino"],
    type: "duel"
  },
  {
    characters: ["Mandricardo", "Marfisa"],
    type: "duel"
  },
  {
    characters: ["Rodomonte", "Bradamante"],
    type: "duel"
  },
  {
    characters: ["Rodomonte", "Ruggiero"],
    type: "duel"
  },
  {
    characters: ["Rodomonte", "Brandimarte"],
    type: "duel"
  }
];


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Orlando Furioso Relationship Chart
      </header>
      <CharacterMap characters={characters} relationships={relationships} />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
    </div>
  );
}

export default App;
