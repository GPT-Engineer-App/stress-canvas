import { useState, useEffect, useCallback } from "react";
import { Cat, Heart, Moon, Sun, ArrowUp, Sparkles } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CatFactGenerator from "../components/CatFactGenerator";
import CatNameGenerator from "../components/CatNameGenerator";
import ColorPaletteSelector from "../components/ColorPaletteSelector";
import CatPersonalityQuiz from "../components/CatPersonalityQuiz";
import FloatingCat from "../components/FloatingCat";
import CatNameGenerator from "../components/CatNameGenerator";
import ColorPaletteSelector from "../components/ColorPaletteSelector";
import CatPersonalityQuiz from "../components/CatPersonalityQuiz";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../components/ThemeProvider";
import confetti from 'canvas-confetti';

const catImages = [
  { url: "https://placekitten.com/800/400", caption: "Playful Kitten" },
  { url: "https://placekitten.com/801/400", caption: "Curious Cat" },
  { url: "https://placekitten.com/802/400", caption: "Sleepy Feline" },
  { url: "https://placekitten.com/803/400", caption: "Majestic Kitty" },
  { url: "https://placekitten.com/804/400", caption: "Adorable Furball" },
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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { theme, setTheme } = useTheme();

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const handleMouseMove = useCallback((e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    document.title = "Fancy Cat World";
    document.body.style.cursor = `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23ff69b4" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3.1-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z"/><path d="M8 14v.5"/><path d="M16 14v.5"/><path d="M11.25 16.25h1.5L12 17l-.75-.75Z"/></svg>') 12 12, auto`;

    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-gradient-to-b from-gray-900 to-purple-900 text-white' : 'bg-gradient-to-b from-purple-100 to-pink-100'} p-8 transition-colors duration-300 overflow-hidden`}>
      <div className="max-w-4xl mx-auto relative">
        <FloatingCat />
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-6 flex items-center justify-center text-purple-600"
        >
          <Cat className="mr-2" /> Fancy Cat World
        </motion.h1>

        <Slider {...sliderSettings} className="mb-8">
          {catImages.map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image.url}
                alt={`Cat ${index + 1}`}
                className="mx-auto object-cover w-full h-[400px] rounded-lg shadow-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 rounded-b-lg">
                <p className="text-center text-lg font-semibold">{image.caption}</p>
              </div>
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Cat Name Generator</CardTitle>
            </CardHeader>
            <CardContent>
              <CatNameGenerator />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cat Color Palette</CardTitle>
            </CardHeader>
            <CardContent>
              <ColorPaletteSelector />
            </CardContent>
          </Card>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Cat Personality Quiz</CardTitle>
          </CardHeader>
          <CardContent>
            <CatPersonalityQuiz />
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Popular Cat Breeds</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {catBreeds.map((breed, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <h3 className="font-semibold text-lg mb-2">{breed.name}</h3>
                  <p className="text-gray-600">{breed.description}</p>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="text-center">
          <Button
            onClick={() => {
              setLikes(likes + 1);
              const paw = document.createElement('div');
              paw.className = 'paw-print';
              paw.style.left = `${Math.random() * window.innerWidth}px`;
              document.body.appendChild(paw);
              setTimeout(() => document.body.removeChild(paw), 1000);
              confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 }
              });
            }}
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            <Heart className="mr-2" /> Like This Page
          </Button>
          <p className="mt-2 text-gray-600">This page has {likes} likes!</p>
        </div>
      </div>
      <div
        className="paw-trail"
        style={{
          position: 'fixed',
          left: mousePosition.x,
          top: mousePosition.y,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <Sparkles size={24} color="#ff69b4" />
      </div>
      <Button
        className="fixed bottom-4 right-4 rounded-full p-2"
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        {theme === 'dark' ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
      </Button>
      <AnimatePresence>
        {showScrollTop && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4"
          >
            <Button className="rounded-full p-2" onClick={scrollToTop}>
              <ArrowUp className="h-6 w-6" />
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
