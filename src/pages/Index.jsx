import { useState, useEffect } from "react";
import { Cat, Heart } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CatFactGenerator from "../components/CatFactGenerator";

const catImages = [
  "https://placekitten.com/800/400",
  "https://placekitten.com/801/400",
  "https://placekitten.com/802/400",
  "https://placekitten.com/803/400",
  "https://placekitten.com/804/400",
];

const catBreeds = [
  { name: "Siamese", description: "Vocal and social" },
  { name: "Persian", description: "Long-haired and calm" },
  { name: "Maine Coon", description: "Large and friendly" },
  { name: "British Shorthair", description: "Round-faced and easygoing" },
  { name: "Sphynx", description: "Hairless and energetic" },
  { name: "Bengal", description: "Spotted and active" },
];

const Index = () => {
  const [likes, setLikes] = useState(0);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    document.title = "Fancy Cat World";
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 flex items-center justify-center text-purple-600">
          <Cat className="mr-2" /> Fancy Cat World
        </h1>

        <Slider {...sliderSettings} className="mb-8">
          {catImages.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`Cat ${index + 1}`}
                className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Fascinating Feline Facts</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2">
                <li>Cats have been domesticated for over 4,000 years.</li>
                <li>They can make over 100 different vocal sounds.</li>
                <li>A group of cats is called a "clowder".</li>
                <li>Cats spend 70% of their lives sleeping.</li>
                <li>They have an excellent sense of balance and flexible bodies.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Fact Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <CatFactGenerator />
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {catBreeds.map((breed, index) => (
                <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                  <h3 className="font-semibold text-lg mb-2">{breed.name}</h3>
                  <p className="text-gray-600">{breed.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={() => setLikes(likes + 1)}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Heart className="mr-2" /> Like This Page
          </Button>
          <p className="mt-2 text-gray-600">This page has {likes} likes!</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
