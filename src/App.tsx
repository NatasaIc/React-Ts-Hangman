import { useEffect, useState } from 'react';
import words from './wordList.json';
import './App.scss';
import { HangmabDrawing } from './components/HangmanDrawing';
import { HangmanWord } from './components/HangmanWord';
import { Keyboard } from './components/KeyBoard';

function App() {
  const [wordToGuess, setWordToGuess] = useState(() => {
    return words[Math.floor(Math.random() * words.length)]
  });
  const [guessedLetters, setGuessedLetters] = useState<string[]>([])

  const incorrect = guessedLetters.filter(
    letter => !wordToGuess.includes(letter)
  );

  function addGuessedLetter(letter: string) {
    if (guessedLetters.includes(letter)) return

    setGuessedLetters(currentLetters => [...currentLetters, letter])
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key

      if (!key.match(/^[a-z]$/)) return

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler)

    return () => {
      document.removeEventListener("keypress", handler)
    }
  }, [guessedLetters])

  return (
<div style={{
  maxWidth: '800px',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  margin: '0 auto',
  alignItems: 'center',
}}>
  <div style={{ fontSize: '2rem', textAlign: 'center'}}>Lose Win</div>
<HangmabDrawing numberOfGuesses={incorrect.length}/>
<HangmanWord guessedLetters={guessedLetters} wordToGuess={wordToGuess}/>
<div style={{ alignSelf: 'stretch'}}>
<Keyboard />
</div>
</div>
);
}

export default App;
