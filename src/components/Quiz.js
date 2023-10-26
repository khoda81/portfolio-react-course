import React, { useState } from "react";

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Madrid", "Paris"],
        correctAnswer: "Paris",
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswer: "Mars",
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correctAnswer: "4",
    },
];

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [quizFinished, setQuizFinished] = useState(false);

    const handleAnswerClick = (selectedAnswer) => {
        const correctAnswer = quizData[currentQuestion].correctAnswer;
        if (selectedAnswer === correctAnswer) {
            setScore(score + 1);
        }

        // Move to the next question or finish the quiz
        if (currentQuestion < quizData.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            // Quiz is finished
            setQuizFinished(true);
        }
    };

    const handleRestartClick = () => {
        setCurrentQuestion(0);
        setScore(0);
        setQuizFinished(false);
    };

    return (
        <div>
            {quizFinished ? (
                <QuizSummary score={score} totalQuestions={quizData.length} onRestartClick={handleRestartClick} />
            ) : (
                <Question
                    question={quizData[currentQuestion].question}
                    options={quizData[currentQuestion].options}
                    onAnswerClick={handleAnswerClick}
                />
            )}
        </div>
    );
}

function Question({ question, options, onAnswerClick }) {
    return (
        <div>
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <AnswerOption key={index} option={option} onAnswerClick={onAnswerClick} />
                ))}
            </ul>
        </div>
    );
}

function AnswerOption({ option, onAnswerClick }) {
    return (
        <li>
            <button onClick={() => onAnswerClick(option)}>{option}</button>
        </li>
    );
}

function QuizSummary({ score, totalQuestions, onRestartClick }) {
    return (
        <div>
            <h2>Quiz Finished!</h2>
            <p>
                Your Score: {score}/{totalQuestions}
            </p>
            <button onClick={onRestartClick}>Restart Quiz</button>
        </div>
    );
}
