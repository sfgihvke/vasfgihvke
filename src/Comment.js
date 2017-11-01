import React,{Component} from 'react'

class Comment extends Component {

	render(){

		return (
			<div className='comment'>
				<div className='comment-user'>
					<span>{this.props.comment.username}&nbsp;</span>:
				</div>
				<p>&nbsp;{this.props.comment.content}</p>
			</div>
		)
	}
}

export default Comment