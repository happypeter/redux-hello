import React, { Component } from 'react'
import store from './store'

class CommentBox extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
    let newComment = this.commentInput.value
    console.log(store.getState())
    store.dispatch({type: 'ADD_COMMENT', comment: newComment})
    console.log(store.getState())
    this.commentForm.reset()
  }

  render() {
    console.log(store.getState())
    let comments = store.getState()
    return (
      <div className="comment-box">
        {
          comments.map(item => (
            <li className="comment" key={Math.random()}>{item}</li>
          ))
        }
        <form ref={value => this.commentForm = value}
          onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" className="input" ref={value => this.commentInput = value} />
          <button type="submit" className="submit-btn">提交</button>
        </form>
        <div className="underline"></div>
      </div>
    );
  }
}

export default CommentBox
