import React, { Component } from 'react'
import NotefulForm from '../NotefulForm/NotefulForm'
import './AddNote.css'
import AppContext from '../AppContext';

export default class AddNote extends Component {
  static defaultProps = {
    folders: [],
  }

  render() {
    return (
      <AppContext.Consumer>
        {context => (
        <section className='AddNote'>
          <h2>Create a note</h2>
          <NotefulForm>
            <div className='field'>
              <label htmlFor='note-name-input'>
                Name
              </label>
              <input type='text' id='note-name-input' />
            </div>
            <div className='field'>
              <label htmlFor='note-content-input'>
                Content
              </label>
              <textarea id='note-content-input' />
            </div>
            <div className='field'>
              <label htmlFor='note-folder-select'>
                Folder
              </label>
              <select id='note-folder-select'>
                <option value={null}>...</option>
                {context.folders.map(folder =>
                  <option key={folder.id} value={folder.id}>
                    {folder.name}
                  </option>
                )}
              </select>
            </div>
            <div className='buttons'>
              <button type='submit'>
                Add note
              </button>
            </div>
          </NotefulForm>
        </section>
        )
      }
      </AppContext.Consumer>
    )
  }
}
