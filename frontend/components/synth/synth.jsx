import React from 'react';

import { NOTE_NAMES, TONES } from '../../util/tones';
import Note from '../../util/note';
import NoteKey from './note_key';

import $ from 'jquery';

class Synth extends React.Component {
  constructor(props) {
    super(props);
    this.notes = this.createNotes();
  }

  createNotes() {
    return NOTE_NAMES.map( note => {
      return [note, new Note(TONES[note])];
    });
  }

  onKeyDown(e) {
    let key = e.key;
    this.props.keyPressed(key);
  }

  onKeyUp(e) {
    let key = e.key;
    this.props.keyReleased(key);
  }

  playNotes() {
    this.notes.forEach( noteInfo => {
      if (this.props.notes.includes(noteInfo[0])) {
        noteInfo[1].start();
      } else {
        noteInfo[1].stop();
      }
    });
  }

  componentDidMount() {
    $(document).on('keydown', e => this.onKeyDown(e));
    $(document).on('keyup', e => this.onKeyUp(e));
  }

  render() {
    this.playNotes();
    const notes = this.notes.map((note, index) => {
      return (<NoteKey
        note={note[0]}
        pressed={this.props.notes.includes(note[0])} />
      );
    });

    return (
      <div>
        <input type="hidden" onKeyDown={this.onKeyDown} />
        <ul>
          {notes}
        </ul>
      </div>
    );
  }
}

export default Synth;
