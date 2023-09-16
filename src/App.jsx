import { useEffect, useState } from "react";
import Card from "./components/Card";
import Checkout from "./components/Checkout";
import toast from 'react-hot-toast';

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [cardsData, setCardsData] = useState([]);
  const [cardsCalculation, setCardsCalculation] = useState({
    creditRemain: 20,
    courses: [],
    totalCredit: 0,
    totalPrice: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/utilis.json");
      const data = await response.json();
      setFetchData(data);
    };
    fetchData();
  }, []);

  const notifySuccessAddCard = () => toast.success('Course added successfully');
  const notifyErrorCardAlreadyExits = () => toast.error('Course already added');
  const notifyErrorRemain = () => toast.error("Reached the maximum limit of credit");


  const addData = (cardData) => {
    const is_Card_Already_Have = cardsData.some(
      (data) => data.id === cardData.id
    );

    if (is_Card_Already_Have === true) {
      notifyErrorCardAlreadyExits()
      return;
    } else {
      const { creditRemain, courses, totalCredit, totalPrice } =
        cardsCalculation;

      const credit_Remain = creditRemain - cardData.credit;
      let courses_ = courses;
      courses_.push(cardData.name);
      const total_Credit = totalCredit + cardData.credit;
      const price = totalPrice + cardData.price;

      if (credit_Remain < 0) {
        notifyErrorRemain()
        return;
      }

      notifySuccessAddCard()
      setCardsCalculation({
        creditRemain: credit_Remain,
        courses: courses_,
        totalCredit: total_Credit,
        totalPrice: price,
      });
      setCardsData([...cardsData, cardData]);
    }
  };

  return (
    <>
      <main className="bg-[#F3F3F3] pt-14">
        <h1 className="font-bold text-[2rem] text-center ">
          Course Registration
        </h1>

        <div className="flex justify-center items-center">
          {/* parent container */}
          <div className="flex flex-row mt-16 gap-x-12">
            {/* card */}
            <div className="w-[61.625rem] flex flex-row flex-wrap gap-[1.5rem]">
              {fetchData.map((data) => (
                <Card key={data.id} data={data} addData={addData} />
              ))}
            </div>

            {/* checkout container */}
            <div>
              <Checkout cardsData={cardsCalculation} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
