import { Link, useNavigate } from 'react-router-dom';
import { Icon } from '../../../../components';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 24px;
`;

const StyledLink = styled(Link)`
	font-size: 18px;
	width: 115px;
	height: 30px;
	color: #fff;
	border: 1px solid #000;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 7px;
	background-color: #000;
`;

const StyledButton = styled.div`
	cursor: pointer;
`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();

	return (
		<div className={className}>
			<RightAligned>
				<StyledLink to="/login">Войти</StyledLink>
			</RightAligned>
			<RightAligned>
				<StyledButton onClick={() => navigate(-1)}>
					<Icon id="fa-backward" onClick={() => navigate(-1)} />
				</StyledButton>
				<Link to="/post">
					<Icon id="fa-file-text-o" />
				</Link>
				<Link to="/users">
					<Icon id="fa-users" />
				</Link>
			</RightAligned>
		</div>
	);
};

export const ControlPanel = styled(ControlPanelContainer)`
	display: flex;
	flex-direction: column;
	gap: 30px;
`;
