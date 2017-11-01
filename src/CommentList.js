import React,{Component} from 'react'
import Comment from './Comment'

class CommentList extends Component{
	static defaultProps = {
		dataArray:[]
	}

	render(){

		return (

			<div>
				{
					this.props.dataArray.map((value,index)=>{
						return (
							<Comment comment={value} key={index}/>
						)
					})
				}
			</div>
		)
	}
}

export default CommentList;