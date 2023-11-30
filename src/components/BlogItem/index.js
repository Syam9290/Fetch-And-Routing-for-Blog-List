// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {item} = props
  const {author, avatarUrl, imageUrl, title, topic, id} = item

  return (
    <Link to={`/blogs/${id}`} className="blogLink">
      <li className="BlogListItem">
        <img src={imageUrl} className="imageUrl" alt={title} />
        <div>
          <p className="text">{topic}</p>
          <h4>{title}</h4>
          <div className="avatarBg">
            <img src={avatarUrl} className="avatarImg" alt={author} />
            <p className="text">{author}</p>
          </div>
        </div>
      </li>
    </Link>
  )
}

export default BlogItem
