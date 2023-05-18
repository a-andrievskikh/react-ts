import React from 'react';

type AccordionPropsType = {
  titleValue: string;
  collapsed: boolean;
};
export function Accordion(props: AccordionPropsType) {
  debugger;
  console.log('Accordion Rendering!');
  return (
    <div>
      <AccordionTitle title={props.titleValue} />
      {props.collapsed ? <AccordionBody /> : ''}
    </div>
  );
}

type AccordionTitlePropsType = {
  title: string;
};
function AccordionTitle(props: AccordionTitlePropsType) {
  debugger;
  console.log('AccordionTitle Rendering!');
  return <h3>{props.title}</h3>;
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
