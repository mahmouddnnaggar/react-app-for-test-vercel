import { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([
    {
      publisher: '101 Cookbooks',
      title: 'Best Pizza Dough Ever',
      8: 'http://www.101cookbooks.com/archives/001199.html',
      recipe_id: '47746',
      image_url:
        'http://forkify-api.herokuapp.com/images/best_pizza_dough_recipe1b20.jpg',
      social_rank: 100,
      publisher_url: 'http://www.101cookbooks.com',
    },
    {
      publisher: 'The Pioneer Woman',
      title: 'Deep Dish Fruit Pizza',
      source_url: 'http://thepioneerwoman.com/cooking/2012/01/fruit-pizza/',
      recipe_id: '46956',
      image_url: 'http://forkify-api.herokuapp.com/images/fruitpizza9a19.jpg',
      social_rank: 100,
      publisher_url: 'http://thepioneerwoman.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Pizza Dip',
      source_url: 'http://www.closetcooking.com/2011/03/pizza-dip.html',
      recipe_id: '35477',
      image_url:
        'http://forkify-api.herokuapp.com/images/Pizza2BDip2B12B500c4c0a26c.jpg',
      social_rank: 99.99999999999994,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Cauliflower Pizza Crust (with BBQ Chicken Pizza)',
      source_url:
        'http://www.closetcooking.com/2013/02/cauliflower-pizza-crust-with-bbq.html',
      recipe_id: '41470',
      image_url:
        'http://forkify-api.herokuapp.com/images/BBQChickenPizzawithCauliflowerCrust5004699695624ce.jpg',
      social_rank: 99.9999999999994,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'Closet Cooking',
      title: 'Pizza Quesadillas (aka Pizzadillas)',
      source_url:
        'http://www.closetcooking.com/2012/11/pizza-quesadillas-aka-pizzadillas.html',
      recipe_id: '35478',
      image_url:
        'http://forkify-api.herokuapp.com/images/Pizza2BQuesadillas2B2528aka2BPizzadillas25292B5002B834037bf306b.jpg',
      social_rank: 99.99999999999835,
      publisher_url: 'http://closetcooking.com',
    },
    {
      publisher: 'Two Peas and Their Pod',
      title: 'Sweet Potato Kale Pizza with Rosemary & Red Onion',
      source_url:
        'http://www.twopeasandtheirpod.com/sweet-potato-kale-pizza-with-rosemary-red-onion/',
      recipe_id: '54454',
      image_url:
        'http://forkify-api.herokuapp.com/images/sweetpotatokalepizza2c6db.jpg',
      social_rank: 99.9999999991673,
      publisher_url: 'http://www.twopeasandtheirpod.com',
    },
    {
      publisher: 'My Baking Addiction',
      title: 'Pizza Dip',
      source_url: 'http://www.mybakingaddiction.com/pizza-dip/',
      recipe_id: '2ec050',
      image_url:
        'http://forkify-api.herokuapp.com/images/PizzaDip21of14f05.jpg',
      social_rank: 99.99999999826605,
      publisher_url: 'http://www.mybakingaddiction.com',
    },
    {
      publisher: 'The Pioneer Woman',
      title: 'Pizza Potato Skins',
      source_url:
        'http://thepioneerwoman.com/cooking/2013/04/pizza-potato-skins/',
      recipe_id: '6fab1c',
      image_url: 'http://forkify-api.herokuapp.com/images/pizza3464.jpg',
      social_rank: 99.99999999760887,
      publisher_url: 'http://thepioneerwoman.com',
    },
  ]);

  const deleteCard = function (index) {
    const newData = data.filter((e, i) => i !== index);
    setData(newData);
  };

  return (
    <>
      <div className="container my-12 px-8 grid grid-cols-3 gap-6">
        {data.map((element, index) => (
          <Card
            key={element.recipe_id}
            title={element.title}
            image={element.image_url}
            index={index}
            deleteFn={deleteCard}
          ></Card>
        ))}
      </div>
    </>
  );
}

function Card({ title, image, index, deleteFn }) {
  const [counter, setCounter] = useState(0);

  const handlePlusClick = function () {
    if (counter < 10) setCounter(c => c + 1);
  };
  const handleMinusClick = function () {
    if (counter > 0) setCounter(c => c - 1);
  };

  return (
    <div className="bg-slate-700 text-white rounded shadow-lg overflow-hidden hover:-translate-y-2 transition-[transform] delay-75 duration-300 w-full">
      <img src={image} alt="pizza" className="w-full h-56 object-cover" />
      <div className="py-4 px-2">
        <h2 className="font-bold text-2xl line-clamp-1">{title}</h2>
        <p className="text-gray-200 line-clamp-3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          tenetur vero asperiores, veritatis excepturi error quasi incidunt
          corporis nobis eaque!
        </p>

        <div className="flex justify-between items-center pt-1 px-4">
          <i
            className="fa-solid fa-minus cursor-pointer text-2xl p-1"
            onClick={handleMinusClick}
          ></i>
          <span>{counter}</span>
          <i
            className="fa-solid fa-plus cursor-pointer text-2xl p-1"
            onClick={handlePlusClick}
          ></i>
        </div>

        <button
          className="bg-red-600 rounded w-full text-base uppercase py-1 mt-3 hover:opacity-90 delay-75 duration-500 transition-opacity"
          onClick={() => {
            deleteFn(index);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default App;
