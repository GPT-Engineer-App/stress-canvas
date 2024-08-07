import { useState } from 'react';
import { Button } from "@/components/ui/button";

const catNames = [
  "Whiskers", "Luna", "Oliver", "Bella", "Leo", "Nala", "Milo", "Lucy",
  "Simba", "Kitty", "Charlie", "Lily", "Max", "Zoe", "Tiger", "Chloe",
  "Oscar", "Stella", "Felix", "Molly", "Jasper", "Sophie", "Smokey", "Daisy"
];

const CatNameGenerator = () => {
  const [catName, setCatName] = useState('');

  const generateName = () => {
    const randomIndex = Math.floor(Math.random() * catNames.length);
    setCatName(catNames[randomIndex]);
  };

  return (
    <div className="text-center">
      <Button onClick={generateName} className="mb-4">
        Generate Cat Name
      </Button>
      {catName && (
        <p className="text-2xl font-bold text-purple-600">{catName}</p>
      )}
    </div>
  );
};

export default CatNameGenerator;
