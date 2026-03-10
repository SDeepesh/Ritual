// This file dynamically imports all food images from assets/fooditems
// and exports a mapping object for easy access.

const foodImages = {};

// Use Vite's glob import to get all images in the fooditems folder
const images = import.meta.glob('../assets/*.{png,jpg,jpeg,svg}', { eager: true });

for (const path in images) {
  // Extract filename without extension (e.g., "image1")
  const fileName = path.split('/').pop().replace(/\.\w+$/, '');
  foodImages[fileName] = images[path].default || images[path];
}

export default foodImages;
