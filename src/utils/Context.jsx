import React, { useState, useContext, useEffect } from "react";
import { Data } from "./MemeData";

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const getIndexNumber = () => {
    return Math.floor(Math.random() * Data.length);
  };

  const defineMeme = (topText = '', bottomText = '', objectMeme = {}) => {
    return {
      textTop: topText,
      textBottom: bottomText,
      randomImage: objectMeme.url
    }
  };

  const [mounted, setMounted] = useState(true);
  const [indexNumber, setIndexNumber] = useState(getIndexNumber());
  const [objectMeme, setObjectMeme] = useState(Data[indexNumber]);
  const [formText, setFormText] = useState({
    textTop: '',
    textBottom: ''
  });
  const [meme, setMeme] = useState(defineMeme(formText.textTop, formText.textBottom, objectMeme));
  
  useEffect(() => {
    if (mounted) {
      const singleMeme = Data[indexNumber];
      setObjectMeme(singleMeme);
      setMounted(false);
    }
  }, [indexNumber, mounted]);

  useEffect(()=> {
    setMeme(defineMeme(formText.textTop, formText.textBottom, objectMeme));
  }, [formText, objectMeme])

  const handleClick = () => {
    setMounted(true);
    setIndexNumber(getIndexNumber());
  }

  const handleInputChange = ((event) => {
    const { name, value } = event.target;

    setFormText({
      ...formText, [name]: value
    });
  });

  return <AppContext.Provider value={{
    setIndexNumber,
    getIndexNumber,
    handleClick,
    meme,
    objectMeme,
    handleInputChange,
    formText
  }}>
    {children}
  </AppContext.Provider>
};

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }