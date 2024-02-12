import './styles.scss';
import { useState } from 'react';


function App() {

  const [newListElement, setNewListElement] = useState ([]);
  const [newProduct, setNewProduct] = useState (' ');
  const [countProduct, setCountProduct] = useState(0);
  
  const handleAddButton = () => {
    setNewListElement(
      [...newListElement, { 
      id: newListElement.length + 1, 
      title: newProduct, 
      isAdded: false 
      }])
    setNewProduct(" ");
  }

  const handleAddToBasketButton = (ids) => {
    setNewListElement(
      newListElement.map((item) =>
        item.id === ids ? {...item, isAdded: true} : item))
        newListElement.filter((item) => item.isAdded === ids);
    setCountProduct(countProduct + 1)
  }

  const handleDeleteButton = (ids) => {
  const avtiveList = newListElement.filter((item) => item.id !== ids);
    setNewListElement(avtiveList);
    setCountProduct(countProduct - 1)
  }

  return (

    <>

      <div className="container">
        <div className='page-header'>
            <h1>Lista zakupów:</h1>
            <button className="btn clear-btn">Wyczyść</button>
        </div>
        
      <nav className='page-header-nav'>
        <input 
            className="page-header-input"
            type="text" 
            value={newProduct}
            onChange={(e) => setNewProduct(e.target.value)}
        />

        <button className ="add-to-list-btn btn" onClick={() => handleAddButton()}>Dodaj</button>
      </nav>      
        <ul className="main-page-product-list">
            
          {newListElement.map((item, index) => (
            <li className="list-element" key={index}>
              <div className='list-element-item'>
                {item.title}
              </div>
              <div className='list-element-item'>
                <button className="add-to-basket-btn btn" onClick={() => handleAddToBasketButton(item.id)}>Dodaj do koszyka</button>
                <button className="delete-btn btn" onClick={() => handleDeleteButton(item.id)} >Usuń</button>
              </div>
            </li>
          ))}

        </ul>

        <footer className='main-page-footer'>
          <div className='main-page-footer-item'>
            <p>W koszyku:
              <span className='counter'>
                {countProduct}
              </span>
            </p>
            
          </div>
              
        </footer>
      </div>
    
    </>
  )};


export default App;

