import React from 'react'

import { useNavigate } from 'react-router-dom'

const UpdateTopic = ({
    title,
    tiltleInputChange,
    description,
    descriptionInputChange,
    onSubmitForm,
    updateTopic,
    topicTitle,
    topicDescription }) => {

    const navigate = useNavigate();

    return (
        <form className='form' onSubmit={
            onSubmitForm}>
            <div>
                <label>Modifier mon topic</label>
            </div>
            <div>
                <input
                    type="text"
                    className="title"
                    placeholder={topicTitle}
                    value={title}
                    onChange={tiltleInputChange} />
            </div>
            <div>
                <input
                    type="text"
                    className="description"
                    placeholder={topicDescription}
                    value={description}
                    onChange={descriptionInputChange} />
            </div>
            <button
                type="submit">
                Envoyer
            </button>
            {updateTopic && navigate("/alltopics")}
        </form>
    )
}

export default UpdateTopic