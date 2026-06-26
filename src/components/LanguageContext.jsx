import React, { createContext, useState, useContext, useEffect } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to load from localStorage, default to english
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('dharmik-lang') || 'english';
  });

  // Save to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('dharmik-lang', language);
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
