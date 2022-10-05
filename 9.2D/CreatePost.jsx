import * as React from 'react'

const CreatePost = ({label, value, onChange}) => {
    return (
        <label>
          <input type="radio" checked={value} onChange={handleChange} /> {label}
        </label>
    )
}
export default CreatePost;