import { useState } from 'react';
import { Button } from "@/components/ui/button";

const questions = [
  { question: "How does your cat react to strangers?", options: ["Hides", "Curious", "Friendly"] },
  { question: "What's your cat's favorite toy?", options: ["Laser pointer", "Catnip mouse", "Cardboard box"] },
  { question: "How often does your cat meow?", options: ["Rarely", "Occasionally", "Constantly"] },
];

const personalities = [
  "Your cat is an Introverted Explorer! They're curious but cautious, preferring to observe from a safe distance.",
  "Your cat is a Playful Adventurer! They love to explore and are always up for a good play session.",
  "Your cat is a Social Butterfly! They're outgoing and love attention from both familiar faces and new friends.",
];

const CatPersonalityQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState('');

  const handleAnswer = (answer) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const personalityIndex = Math.floor(Math.random() * personalities.length);
      setResult(personalities[personalityIndex]);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult('');
  };

  if (result) {
    return (
      <div className="text-center">
        <p className="mb-4 text-lg">{result}</p>
        <Button onClick={resetQuiz}>Take Quiz Again</Button>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="text-center">
      <p className="mb-4 text-lg">{question.question}</p>
      <div className="space-y-2">
        {question.options.map((option, index) => (
          <Button key={index} onClick={() => handleAnswer(option)} className="w-full">
            {option}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default CatPersonalityQuiz;
