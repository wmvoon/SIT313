import * as React from 'react';
import './App.css';
import Question from './PostQuestion';
import Article from './PostArticle';
function SelectedPostType(props) {
  const value = props.value.toString();
  if (value === "Question") {
    return <Question></Question>;
  } else if (value === "Article") {
    return <Article></Article>;
  } else {
    return;
  }
}

function PostPage() {
  const [value, setValue] = React.useState(
    {
      PostType: ""
    });


  const handleChange = event => {
    const target = event.target
    const name = target.name
    const value = target.value
    setValue({
      ...value,
      [name]: value
    });
  };

  return (
    <div>
      <div className='center'>
        <h1>New Post</h1>
      </div>
      <form>
        <div>
          <label>Select Post Type: </label>
          <RadioButton
            label="Article"
            name="PostType"
            value="Article"
            checked={true}
            onChange={handleChange}
          />

          <RadioButton
            label="Question"
            name="PostType"
            value="Question"
            onChange={handleChange}
          />
        </div>
      </form>

      <div>
        <SelectedPostType value={value.PostType} />
      </div>
    </div>
  );
}

const RadioButton = ({ label, name, value, onChange }) => {
  return (
    <label>
      <input type="radio" name={name} value={value} onChange={onChange} />
      {label}
    </label>
  );
};

export default PostPage;