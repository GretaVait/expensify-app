import React from 'react';

const EditExpensePage = (props) => {
  return (
    <div>
      This is from edit comp with id of {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;
