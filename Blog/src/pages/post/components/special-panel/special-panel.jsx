import { Icon } from '../../../../components';
import styled from 'styled-components';

const SpecialPanelContainer = ({ className, publishedAt, actionButton }) => {
	return (
		<div className={className}>
			<div className="published-at">
				<Icon id="fa-calendar-o" />
				{publishedAt}
			</div>
			<div className="btn-box">
				{actionButton}
				<Icon id="fa-trash-o" size="25px" />
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
