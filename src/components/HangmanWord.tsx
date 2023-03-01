interface HangmanWordProps {
    guessedLetters: string[]
    wordToGuess: string

}

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {
    return (   
     <div 
    style={{ 
        display: 'flex', 
        gap: '.25em', 
        fontSize: '6rem', 
        fontWeight: 'bold', 
        textTransform: 'uppercase',
        }}
        >
            {wordToGuess.split('').map((letter, index) => (
                <span style={{ borderBottom: '.1em solid black' }}>
                    <span 
                    style={{ 
                        visibility: guessedLetters.includes(letter) 
                        ? 'visible' 
                        : 'hidden',
                        }}
                        >
                        {letter}
                        </span>
                    
                </span>
            ))}
    </div>
    )
}