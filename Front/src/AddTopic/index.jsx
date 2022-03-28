import React from 'react'

const AddTopic = ({ title, tiltleInputChange, description, descriptionInputChange, onSubmitForm }) => {
  return (
    <form className='form' onSubmit={
      onSubmitForm}>
      <div>
        <label>Ajouter un topic</label>
      </div>
      <div>
        <input
          type="text"
          className="title"
          placeholder='Titre'
          value={title}
          onChange={tiltleInputChange} />
      </div>
      <div>
        <input
          type="text"
          className="description"
          placeholder='Description'
          value={description}
          onChange={descriptionInputChange} />
      </div>
      <button
        type="submit">
        Envoyer
      </button>
    </form>
  )
}

export default AddTopic