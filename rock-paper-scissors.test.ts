import { Move, Outcome, createRockPaperScissors } from "./rock-paper-scissors";
describe('roc-paper-scissors', () => {
    describe('play', () => {

        describe('paper beats rock', ()=>{

            test('given player move paper and opponent move rock should return player wins', () => {
    
                //Arrange
                const expected = Outcome.PlayerWins;
                const PlayerMove = Move.Paper;
                const opponentMove = Move.Rock;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })

            test('given player move rock and opponent move paper should return player loses', () => {

                //Arrange

                const expected = Outcome.PlayerLoses;
                const PlayerMove = Move.Rock;
                const opponentMove = Move.Paper;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })
        })

        describe('scissors beats paper', ()=>{
            
            test('given player move paper and opponent move scissors should return player loses', () => {
    
                //Arrange
                const expected = Outcome.PlayerLoses;
                const PlayerMove = Move.Paper;
                const opponentMove = Move.Scissors;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })

            test('given player move scissors and opponent move paper should return player wins', () => {
    
                //Arrange
                const expected = Outcome.PlayerWins;
                const PlayerMove = Move.Scissors;
                const opponentMove = Move.Paper;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })
        })

        describe('rock beats scissors', ()=>{
            
            test('given player move rock and opponent move scissors should return player wins', () => {
    
                //Arrange
                const PlayerMove = Move.Rock;
                const opponentMove = Move.Scissors;
                const expected = Outcome.PlayerWins;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })

            test('given player move scissors and opponent move rock should return player loses', () => {
    
                //Arrange
                const expected = Outcome.PlayerLoses;
                const PlayerMove = Move.Scissors;
                const opponentMove = Move.Rock;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })
        })

        describe('tie', ()=>{
            test('given player move scissors and opponent move scissors should return tie', () => {
    
                //Arrange
                const expected = Outcome.Tie
                const PlayerMove = Move.Scissors;
                const opponentMove = Move.Scissors;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })

            test('given player move rock and opponent move rock should return tie', () => {
    
                //Arrange
                const expected = Outcome.Tie
                const PlayerMove = Move.Rock;
                const opponentMove = Move.Rock;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })

            test('given player move paper and opponent move paper should return tie', () => {
    
                //Arrange
                const expected = Outcome.Tie
                const PlayerMove = Move.Paper;
                const opponentMove = Move.Paper;

                const sut = createRockPaperScissors();
    
                //Act
                const actual = sut.play(PlayerMove, opponentMove);
    
                //Assert
                expect(actual).toBe(expected);
    
            })
        })

       
    })
})