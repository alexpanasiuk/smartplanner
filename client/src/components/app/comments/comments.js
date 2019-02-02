import React, {Component} from 'react';
import css from './comments.module.css';
import Textarea from 'react-textarea-autosize';

class Comments extends Component {
    constructor(props) {
        super(props);
        this.commentsListRef = React.createRef();
    }

    componentDidMount() {
        const list = this.commentsListRef.current;
        list.scroll({left: 0, top: list.scrollHeight, behavior: "smooth"})
    }

    renderComments = (comments) => (
        comments.map((comment, i) => {
            const time = new Date(comment.time);
            const timeString = time.toLocaleDateString() + ' ' + time.toLocaleTimeString().slice(0, -3);
            return (
                <li key={i} className={css.comment}>
                    <div className={css.commentHeader}>
                        <span className={css.commentAuthor}>{comment.creatorName}</span>
                        <span className={css.commentTime}>{timeString}</span>
                    </div>
                    <p className={css.commentText}>
                        {comment.text.split('\n').map((item, key) => 
                            <React.Fragment key={key}>{item}<br/></React.Fragment>
                        )}
                    </p>
                </li>
                )
        })
    )
    render(){
        return (
            <div className={css.comments}>
                <div className={css.title}>
                    {this.props.task.name}
                </div>
                <ul className={css.list} ref={this.commentsListRef}>
                    {this.props.task.comments[0] 
                        ? this.renderComments(this.props.task.comments)
                        : <li>Пока комментариев нет</li>}
                </ul>
                <form className={css.form} onSubmit={this.props.addComment}>
                    <Textarea 
                        className={css.textarea}
                        placeholder="Написать комментарий"
                        onChange={this.props.handleCommentText}
                        value={this.props.commentText}
                        minRows={3}
                        required
                    />
                    <input
                        className={css.submit}
                        type="submit" 
                        value="Добавить комментарий" 
                        />
                </form>
            </div>
        )
    }
}

export default Comments;
