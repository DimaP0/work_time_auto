import React, { useState, useRef, useEffect, useMemo } from 'react';
import styles from './Select.module.css';
//* категорически запрещается использовать одинаковые опции, ели вы не хотите получить непредсказуемые результаты  */
const Select = ({ options, onSelect, placeholder = 'Select an option' }) => {
  const [isOpen, setIsOpen] = useState(false);  // Открыт ли выпадающий список
  const [selectedOption, setSelectedOption] = useState(null);  // Выбранная опция
  const [searchTerm, setSearchTerm] = useState('');  // Поисковый запрос
  const dropdownRef = useRef(null);

  // Закрытие выпадающего списка при клике вне компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Отфильтрованные опции на основе поискового запроса
  const filteredOptions = useMemo(() => {
    return options.filter((option) =>
      option.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, options]);

  // Обработчик выбора опции
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);  // Закрываем список после выбора
    onSelect(option);  // Вызов колбэка при выборе опции
    setSearchTerm(''); // Сброс поискового запроса после выбора
  };

  // Обработчик изменения поискового запроса
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);  // Используем e.target.value для изменения поискового запроса
    if (!isOpen) {
      setIsOpen(true);  // Открываем список при вводе текста
    }
  };

  return (
    <div className={styles.selectContainer} ref={dropdownRef}>
      {/* Заголовок выпадающего списка */}
      <div
        className={`${styles.selectHeader} ${isOpen ? styles.open : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.name : placeholder}
        <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
      </div>

      {/* Выпадающий список с полем поиска */}
      {isOpen && (
        <div className={styles.dropdown}>
          {/* Поле поиска */}
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}  // Используем правильное событие для обновления
          />

          {/* Список опций */}
          <div className={styles.optionsList}>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option) => (
                <div
                  key={option.id}
                  className={`${styles.option} ${
                    selectedOption && selectedOption.id === option.id
                      ? styles.selected
                      : ''
                  }`}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.name}
                </div>
              ))
            ) : (
              <div className={styles.noOptions}>No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
