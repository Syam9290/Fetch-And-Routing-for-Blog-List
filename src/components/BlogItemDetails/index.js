// Write your JS code here

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogListItem: {}, isLoading: true}

  componentDidMount() {
    this.getBlogItemDetails()
  }

  getBlogItemDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)

    const updatedData = {
      id: data.id,
      author: data.author,
      avatarUrl: data.avatar_url,
      imageUrl: data.image_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }

    this.setState({blogListItem: updatedData, isLoading: false})
  }

  blogItemDetailsSection = () => {
    const {blogListItem} = this.state

    return (
      <div className="blogItemDetailsBg">
        <h1 className="title">{blogListItem.title}</h1>
        <div className="avatarBg">
          <img
            src={blogListItem.avatarUrl}
            className="avatarImg"
            alt={blogListItem.author}
          />
          <p className="text">{blogListItem.author}</p>
        </div>
        <img
          src={blogListItem.imageUrl}
          className="imageUrlItem"
          alt={blogListItem.topic}
        />
        <p className=" content">{blogListItem.content}</p>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state
    const renderBlogItemDetails = this.blogItemDetailsSection

    return (
      <ul className="listBg">
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
        ) : (
          renderBlogItemDetails()
        )}
      </ul>
    )
  }
}

export default BlogItemDetails
