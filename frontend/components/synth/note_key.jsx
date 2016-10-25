import React from 'react';

const NoteKey = ({note, pressed}) => (
  <li className={pressed ? "red" : "green"}>{note}</li>
);

export default NoteKey;
