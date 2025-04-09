import styled from 'styled-components';
import { Icon } from '../../../../components';

const PostContentContainer = ({
	className,
	post: { id, title, imageUrl, content, publishedAt },
}) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title}></img>
			<h2>{title}</h2>
			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar-o" />
					{publishedAt}
				</div>
				<div className="btn-box">
					<Icon id="fa-pencil-square-o" size="23px" />
					<Icon id="fa-trash-o" size="25px" />
				</div>
			</div>
			<div>{content}</div>
		</div>
	);
};

export const PostContent = styled(PostContentContainer)`
	width: 1170px;
	margin: 0 auto;
	font-size: 25px;

	img {
		display: inline;
		float: left;
		width: 375px;
		height: 206px;
		margin: 15px 40px 20px 0;
	}

	h2 {
		font-size: 43px;
		margin-top: 0;
	}

	.special-panel {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-block: 20px;
		height: 30px;

		.published-at {
			display: flex;
			gap: 10px;
		}

		.btn-box {
			display: flex;
			align-items: end;
			gap: 20px;

			button {
				border: none;
				background-color: transparent;
			}
		}
	}
`;
