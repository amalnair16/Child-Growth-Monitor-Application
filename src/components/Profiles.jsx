import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Link, useNavigate } from "react-router-dom";
import "../assets/css/Profiles.css";

const useLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

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
      name,
      description,
      dob: dob.toLocaleDateString(),
      gender,
      height,
      weight,
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
      <div>
        <br />
      </div>
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
  const [editing, setEditing] = useState(false);
  const [cardName, setCardName] = useState(name);
  const [cardDescription, setCardDescription] = useState(description);
  const [cardDob, setCardDob] = useState(dob);
  const [cardGender, setCardGender] = useState(gender);
  const [cardHeight, setCardHeight] = useState(height);
  const [cardWeight, setCardWeight] = useState(weight);
  const history = useNavigate();

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const updatedCard = {
      name: cardName,
      description: cardDescription,
      dob: cardDob,
      gender: cardGender,
      height: cardHeight,
      weight: cardWeight,
    };
    onEditCard(id, updatedCard);
    setEditing(false);
  };

  const handleLinkClick = () => {
    setTimeout(() => {
      history("/menu");
    }, 2);
  };

  return (
    <div className="card">
      {editing ? (
        <>
          <input
            type="text"
            value={cardName}
            onChange={(e) => setCardName(e.target.value)}
          />
          <input
            type="text"
            value={cardDescription}
            onChange={(e) => setCardDescription(e.target.value)}
          />
          <input
            type="text"
            value={cardDob}
            onChange={(e) => setCardDob(e.target.value)}
          />
          <select
            value={cardGender}
            onChange={(e) => setCardGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
          <input
            type="text"
            value={cardHeight}
            onChange={(e) => setCardHeight(e.target.value)}
          />
          <input
            type="text"
            value={cardWeight}
            onChange={(e) => setCardWeight(e.target.value)}
          />
          <button onClick={handleSaveClick} className="button button-33">
            Save
          </button>
        </>
      ) : (
        <>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Date of Birth: {dob}</p>
          <p>Gender: {gender}</p>
          <p>Height: {height}</p>
          <p>Weight: {weight}</p>
          <br />
          <button onClick={handleEditClick}>[ Edit ]</button>
          <button
            onClick={() => {
              onEditCard(id);
              handleLinkClick();
            }}
          >
            [ Select ]
          </button>
        </>
      )}
    </div>
  );
};

const Profiles = () => {
  const [cards, setCards] = useLocalStorage("cards", []);

  const handleCardCreate = (newCard) => {
    const updatedCards = [...cards, newCard];
    setCards(updatedCards);
  };

  const handleEditCard = (cardId, updatedCard) => {
    const updatedCards = cards.map((card) => {
      if (card.id === cardId) {
        return {
          ...card,
          ...updatedCard,
        };
      }
      return card;
    });

    // Find the index of the selected card
    const selectedIndex = updatedCards.findIndex((card) => card.id === cardId);

    // Move the selected card to the last index
    if (selectedIndex !== -1) {
      const selectedCard = updatedCards.splice(selectedIndex, 1)[0];
      updatedCards.push(selectedCard);
    }

    setCards(updatedCards);
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
    </div>
  );
};

export default Profiles;
