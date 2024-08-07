import { useState } from 'react';
import { Button } from "@/components/ui/button";

const catColors = [
  { name: 'Tabby', colors: ['#8B4513', '#D2691E', '#CD853F', '#DEB887'] },
  { name: 'Calico', colors: ['#000000', '#FFFFFF', '#FFA500'] },
  { name: 'Siamese', colors: ['#8B4513', '#D2B48C', '#F4A460', '#FFDAB9'] },
  { name: 'Black', colors: ['#000000', '#1C1C1C', '#2F4F4F'] },
  { name: 'White', colors: ['#FFFFFF', '#FFFAFA', '#F0FFF0'] },
  { name: 'Orange', colors: ['#FFA500', '#FF8C00', '#FF4500'] },
];

const ColorPaletteSelector = () => {
  const [selectedPalette, setSelectedPalette] = useState(null);

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 mb-4">
        {catColors.map((palette, index) => (
          <Button
            key={index}
            onClick={() => setSelectedPalette(palette)}
            className="h-12 w-full"
            style={{
              background: `linear-gradient(to right, ${palette.colors.join(', ')})`,
            }}
          />
        ))}
      </div>
      {selectedPalette && (
        <div className="text-center">
          <p className="font-bold mb-2">{selectedPalette.name}</p>
          <div className="flex justify-center space-x-2">
            {selectedPalette.colors.map((color, index) => (
              <div
                key={index}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPaletteSelector;
