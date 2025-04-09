import { Icon } from '../../../../../../components';
import styled from 'styled-components';

const CommentContainer = ({ className, author, publishedAt, content }) => {
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
			<Icon id="fa-trash-o" />
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
