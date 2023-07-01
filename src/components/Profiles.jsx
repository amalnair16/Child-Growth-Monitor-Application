import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/css/Profiles.css";

const CardCreator = ({ onCardCreate }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [dob, setDob] = useState(new Date());
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDobChange = (date) => {
    setDob(date);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleCreateCard = () => {
    const newCard = {
      id: Date.now(),
      name: name,
      description: description,
      dob: dob.toLocaleDateString(),
      gender: gender,
      height: height,
      weight: weight,
    };

    onCardCreate(newCard);

    setName("");
    setDescription("");
    setDob(new Date());
    setGender("");
    setHeight("");
    setWeight("");
  };

  return (
    <div className="card-creator">
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={handleDescriptionChange}
      />
      <DatePicker selected={dob} onChange={handleDobChange} />
      
      <select value={gender} onChange={handleGenderChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <div><br /></div>
      <input
        type="text"
        placeholder="Height in CM"
        value={height}
        onChange={handleHeightChange}
      />
      <input
        type="text"
        placeholder="Weight in KG"
        value={weight}
        onChange={handleWeightChange}
      />
      <button onClick={handleCreateCard} className="button button-33">
        Create Profile
      </button>
    </div>
  );
};

const Card = ({
  id,
  name,
  description,
  dob,
  gender,
  height,
  weight,
  onEditCard,
}) => {
  const handleEditClick = () => {
    onEditCard(id);
  };

  return (
    <div className="card">
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Date of Birth: {dob}</p>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <br />
      <button onClick={handleEditClick}>[ Edit ]</button>
      <a href="/menu">
        {" "}
        <button> [ Select ]</button>
      </a>
    </div>
  );
};

const Profiles = () => {
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);

  useEffect(() => {
    const jsonData = localStorage.getItem("cards");
    if (jsonData) {
      const savedCards = JSON.parse(jsonData);
      setCards(savedCards);
    }
  }, []);

  const handleCardCreate = (newCard) => {
    const dummyCardJson = localStorage.getItem("dummyCard");
    let dummyCard = {};

    if (dummyCardJson) {
      dummyCard = JSON.parse(dummyCardJson);
    }

    dummyCard = {
      ...dummyCard,
      [newCard.id]: newCard,
    };

    const dummyCardJsonUpdated = JSON.stringify(dummyCard);
    localStorage.setItem("dummyCard", dummyCardJsonUpdated);

    const jsonData = localStorage.getItem("cards");
    let savedCards = [];

    if (jsonData) {
      savedCards = JSON.parse(jsonData);
    }

    const updatedCards = [...savedCards, newCard];

    const updatedCardsJson = JSON.stringify(updatedCards);
    localStorage.setItem("cards", updatedCardsJson);

    setCards(updatedCards);
  };

  const handleEditCard = (cardId) => {
    setEditingCardId(cardId);
  };

  const handleSaveCard = (cardId, updatedCard) => {
    // Find the index of the card in the array
    const cardIndex = cards.findIndex((card) => cardId === card.id);

    if (cardIndex !== -1) {
      // Update the card with the new data
      const updatedCards = [...cards];
      updatedCards[cardIndex] = {
        ...updatedCards[cardIndex],
        name: updatedCard.name,
        description: updatedCard.description,
        dob: updatedCard.dob,
        gender: updatedCard.gender,
        height: updatedCard.height,
        weight: updatedCard.weight,
      };

      // Set the updated cards array
      setCards(updatedCards);

      // Save the updated cards array to localStorage as JSON
      const jsonData = JSON.stringify(updatedCards);
      localStorage.setItem("cards", jsonData);

      // Clear the editing state
      setEditingCardId(null);
    }
  };

  return (
    <div className="profiles">
      <h2>Profiles</h2>
      <CardCreator onCardCreate={handleCardCreate} />
      <h2>Children Profiles</h2>
      {cards.map((card) => (
        <Card
          key={card.id}
          id={card.id}
          name={card.name}
          description={card.description}
          dob={card.dob}
          gender={card.gender}
          height={card.height}
          weight={card.weight}
          onEditCard={handleEditCard}
        />
      ))}

      {editingCardId !== null && (
        <EditCard
          card={cards.find((card) => card.id === editingCardId)}
          onSaveCard={(updatedCard) =>
            handleSaveCard(editingCardId, updatedCard)
          }
        />
      )}
    </div>
  );
};

const EditCard = ({ card, onSaveCard }) => {
  const [name, setName] = useState(card.name);
  const [description, setDescription] = useState(card.description);
  const [dob, setDob] = useState(card.dob);
  const [gender, setGender] = useState(card.gender);
  const [height, setHeight] = useState(card.height);
  const [weight, setWeight] = useState(card.weight);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleDobChange = (e) => {
    setDob(e.target.value);
  };

  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  };

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
  };

  const handleSaveClick = () => {
    const updatedCard = {
      name: name,
      description: description,
      dob: dob,
      gender: gender,
      height: height,
      weight: weight,
    };

    onSaveCard(updatedCard);
  };

  return (
    <div className="edit-card">
      <input type="text" value={name} onChange={handleNameChange} />
      <input
        type="text"
        value={description}
        onChange={handleDescriptionChange}
      />
      <input type="text" value={dob} onChange={handleDobChange} />
      <select value={gender} onChange={handleGenderChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      <input type="text" value={height} onChange={handleHeightChange} />
      <input type="text" value={weight} onChange={handleWeightChange} />
      <button onClick={handleSaveClick} className="button button-33">
        Save
      </button>
    </div>
  );
};

export default Profiles;
