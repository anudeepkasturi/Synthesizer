import React from 'react';

const NoteKey = ({note, pressed}) => (
  <li className={pressed ? "red" : "green"} key={note}>{note}</li>
);

export default NoteKey;
