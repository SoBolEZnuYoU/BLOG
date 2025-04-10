import { useDispatch } from 'react-redux';
import { removeCommentAsync, openModal, CLOSE_MODAL } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import { Icon } from '../../../../../../components';
import styled from 'styled-components';

const CommentContainer = ({ className, id, postId, author, publishedAt, content }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				question: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="comment-block">
				<div className="information">
					<div className="author">
						<Icon id="fa-user-circle-o" size="25px" />
						{author}
					</div>
					<div className="published-at">
						<Icon id="fa-calendar-o" size="23px" />
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon id="fa-trash-o" onClick={() => onCommentRemove(id)} />
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	width: 100%;
	gap: 15px;

	.comment-block {
		border: 2px solid #1c1c1c;
		width: 100%;
		padding: 10px;

		.information {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 15px;

			.author {
				display: flex;
				align-items: end;
				gap: 5px;
				font-size: 19px;
				line-height: 17px;
			}

			.published-at {
				display: flex;
				align-items: end;
				gap: 5px;
				font-size: 19px;
				line-height: 17px;
			}
		}

		.comment-text {
			font-size: 25px;
		}
	}

	.fa.fa-trash-o {
		margin-top: 15px;
	}
`;
