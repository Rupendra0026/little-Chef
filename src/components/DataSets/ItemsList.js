import biriyani from '../../Images/biriyani.jpg'
import drinks from '../../Images/drinks.jpg'
import pizza from '../../Images/pizza.jpg'
import shakes from '../../Images/shakes.jpg'
import friedrice from '../../Images/friedrice.jpg'
import icecreams from '../../Images/icecreams.jpg'
import cakes from '../../Images/cakes.jpg'
import noodles from '../../Images/noodels.jpg'
import tiffins from '../../Images/tiffins.jpg'


export const foodItems = [
  { name: 'Item1', price: 450, category: 'drinks', type: 'veg',img:drinks},
  { name: 'Item2', price: 720, category: 'cakes', type: 'non veg' ,img:cakes},
  { name: 'Item3', price: 310, category: 'pizzas', type: 'veg',img:pizza },
  { name: 'Item4', price: 550, category: 'icecreams', type: 'non veg' ,img:icecreams},
  { name: 'Item5', price: 810, category: 'biriyani', type: 'veg' ,img:biriyani},
  { name: 'Item6', price: 280, category: 'shakes', type: 'non veg' ,img:shakes},
  { name: 'Item7', price: 670, category: 'noodles', type: 'veg' ,img:noodles},
  { name: 'Item8', price: 420, category: 'tiffins', type: 'non veg' ,img:tiffins },
  { name: 'Item9', price: 600, category: 'friedrice', type: 'veg' ,img:friedrice},
  { name: 'Item10', price: 880, category: 'drinks', type: 'non veg',img:drinks },
  { name: 'Item11', price: 240, category: 'cakes', type: 'veg' ,img:cakes},
  { name: 'Item12', price: 770, category: 'pizzas', type: 'non veg' ,img:pizza},
  { name: 'Item13', price: 420, category: 'icecreams', type: 'veg',img:icecreams },
  { name: 'Item14', price: 920, category: 'biriyani', type: 'non veg',img:biriyani},
  { name: 'Item15', price: 330, category: 'shakes', type: 'veg' ,img:shakes},
  { name: 'Item16', price: 600, category: 'noodles', type: 'non veg' ,img:noodles},
  { name: 'Item17', price: 480, category: 'tiffins', type: 'veg' ,img:tiffins},
  { name: 'Item18', price: 790, category: 'friedrice', type: 'non veg' ,img:friedrice },
  { name: 'Item19', price: 270, category: 'drinks', type: 'veg',img:drinks },
  { name: 'Item20', price: 910, category: 'cakes', type: 'non veg' ,img:cakes},
  { name: 'Item21', price: 360, category: 'pizzas', type: 'veg' ,img:pizza},
  { name: 'Item22', price: 680, category: 'icecreams', type: 'non veg' ,img:icecreams },
  { name: 'Item23', price: 480, category: 'biriyani', type: 'veg' ,img:biriyani},
  { name: 'Item24', price: 750, category: 'shakes', type: 'non veg' ,img:shakes},
  { name: 'Item25', price: 520, category: 'noodles', type: 'veg' ,img:noodles},
  { name: 'Item26', price: 310, category: 'tiffins', type: 'non veg' ,img:tiffins},
  { name: 'Item27', price: 900, category: 'friedrice', type: 'veg' ,img:friedrice},
  { name: 'Item28', price: 230, category: 'drinks', type: 'non veg',img:drinks },
  { name: 'Item29', price: 790, category: 'cakes', type: 'veg',img:cakes },
  { name: 'Item30', price: 420, category: 'pizzas', type: 'non veg' ,img:pizza},
  { name: 'Item31', price: 640, category: 'icecreams', type: 'veg' ,img:icecreams},
  { name: 'Item32', price: 550, category: 'biriyani', type: 'non veg',img:biriyani },
  { name: 'Item33', price: 280, category: 'shakes', type: 'veg' ,img:shakes},
  { name: 'Item34', price: 730, category: 'noodles', type: 'non veg' ,img:noodles},
  { name: 'Item35', price: 490, category: 'tiffins', type: 'veg' ,img:tiffins},
  { name: 'Item36', price: 860, category: 'friedrice', type: 'non veg' ,img:friedrice },
  { name: 'Item37', price: 330, category: 'drinks', type: 'veg' ,img:drinks},
  { name: 'Item38', price: 940, category: 'cakes', type: 'non veg',img:cakes },
  { name: 'Item39', price: 390, category: 'pizzas', type: 'veg' ,img:pizza},
  { name: 'Item40', price: 710, category: 'icecreams', type: 'non veg' ,img:icecreams},
  { name: 'Item41', price: 520, category: 'biriyani', type: 'veg' ,img:biriyani},
  { name: 'Item42', price: 780, category: 'shakes', type: 'non veg' ,img:shakes},
  { name: 'Item43', price: 550, category: 'noodles', type: 'veg' ,img:noodles},
  { name: 'Item44', price: 350, category: 'tiffins', type: 'non veg',img:tiffins },
  { name: 'Item45', price: 960, category: 'friedrice', type: 'veg' ,img:friedrice },
  { name: 'Item46', price: 270, category: 'drinks', type: 'non veg' ,img:drinks},
  { name: 'Item47', price: 680, category: 'cakes', type: 'veg' ,img:cakes},
  { name: 'Item48', price: 440, category: 'pizzas', type: 'non veg',img:pizza },
  { name: 'Item49', price: 760, category: 'icecreams', type: 'veg' ,img:icecreams},
  { name: 'Item50', price: 590, category: 'biriyani', type: 'non veg',img:biriyani },
];

// export const uniqueCategories = [...new Set(foodItems.map(item => item.category))];
  
export   const uniqueCategoriesWithImg = foodItems.reduce((acc, item) => {
  const existingCategory = acc.find(
    (entry) => entry.category === item.category
  );
  if (!existingCategory) {
    acc.push({ category: item.category, imgs: item.img });
  }

  return acc;
}, []);