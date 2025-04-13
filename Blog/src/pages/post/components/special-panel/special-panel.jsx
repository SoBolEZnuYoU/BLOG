import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions';
import { useServerRequest } from '../../../../hooks/';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, id, publishedAt, actionButton }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();
	const navigate = useNavigate();

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				question: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() =>
						navigate('/'),
					);
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && <Icon id="fa-calendar-o" />}
				{publishedAt}
			</div>
			<div className="btn-box">
				{actionButton}
				{publishedAt && (
					<Icon id="fa-trash-o" size="25px" onClick={() => onPostRemove(id)} />
				)}
			</div>
		</div>
	);
};

export const SpecialPanel = styled(SpecialPanelContainer)`
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
	}
`;
