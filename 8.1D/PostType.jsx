import * as React from 'react'

const PostType = ({label, value, onChange}) => {
    return (
        <label>
          <input type="radio" checked={value} onChange={handleChange} /> {label}
        </label>
    )
}
export default PostType;