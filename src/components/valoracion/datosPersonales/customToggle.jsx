import React, {useState, useContext} from 'react';
import AccordionContext from 'react-bootstrap/AccordionContext';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle';
import classNames from 'classnames';

function CustomToggle({eventKey, title, handleSearchTreatment}) {

  const [treatment, setTreatment] = useState([]);
  const currentEventKey = useContext(AccordionContext); // <-- Will update every time the eventKey changes.



  const toggleOnClick = useAccordionToggle(eventKey, () => {
    handleSearchTreatment(eventKey);
  });

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      className={classNames('myDefaultStyling', {'myCollapsedStyling': isCurrentEventKey})}
      onClick={toggleOnClick}
    >
      {title}
    </button>
  );
}

export default CustomToggle;
