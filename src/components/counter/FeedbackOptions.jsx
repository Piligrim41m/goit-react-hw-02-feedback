import React from "react";


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    const onButtonClick = evt => {
    onLeaveFeedback(evt.target.dataset.name);
  };
    return (
        <div style={{
                display: 'flex',
                gap:'10px'}}>
            {options.map(item => (
                <button
                    type="button"
                    data-name={item}
                    className="btn"
                    onClick={onButtonClick}
                    key={item}
                >{item}</button>
           ))}
        </div>
    )
}
export default FeedbackOptions