import React from 'react';
import './App.css';

export function App() {
  console.log('App Rendering!');
  return (
    <div className='width margin'>
      <AppTitle />
      <Rating />
      <Accordion />
      <Rating />
    </div>
  );
}

function AppTitle() {
  console.log('AppTitle Rendering!');
  return <>This is APP component </>;
}

function Rating() {
  console.log('Rating Rendering!');
  return (
    <>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </>
  );
}

function Star() {
  console.log('Star Rendering!');
  return <div>Star</div>;
}

function Accordion() {
  console.log('Accordion Rendering!');
  return (
    <div>
      <AccordionTitle />
      <AccordionBody />
    </div>
  );
}

function AccordionTitle() {
  console.log('AccordionTitle Rendering!');
  return <h3>Menu</h3>;
}

function AccordionBody() {
  console.log('AccordionBody Rendering!');
  return (
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  );
}
