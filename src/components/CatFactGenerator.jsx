import { useState } from "react";
import { Button } from "@/components/ui/button";

const catFacts = [
  "Cats can jump up to six times their length.",
  "A cat's hearing is better than a dog's.",
  "Cats have over 20 vocalizations, including the purr, meow, and chirp.",
  "The first cat in space was a French cat named Felicette in 1963.",
  "Cats have a third eyelid called the nictitating membrane.",
  "A group of kittens is called a kindle.",
  "Cats can rotate their ears 180 degrees.",
  "The oldest known pet cat was found in a 9,500-year-old grave on Cyprus.",
  "Cats can't taste sweetness.",
  "A cat's nose print is unique, like a human's fingerprint.",
];

const CatFactGenerator = () => {
  const [fact, setFact] = useState("");

  const generateFact = () => {
    const randomIndex = Math.floor(Math.random() * catFacts.length);
    setFact(catFacts[randomIndex]);
  };

  return (
    <div className="text-center">
      <Button onClick={generateFact} className="mb-4">
        Generate Cat Fact
      </Button>
      {fact && (
        <p className="bg-gray-100 p-4 rounded-lg shadow-inner">{fact}</p>
      )}
    </div>
  );
};

export default CatFactGenerator;
