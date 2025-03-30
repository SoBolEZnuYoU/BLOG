import { Link, useNavigate } from 'react-router-dom';
import { Icon, Button } from '../../../../components';
import { useDispatch, useSelector } from 'react-redux';
import { ROLE } from '../../../../constants';
import {
	selectUserRole,
	selectUserLogin,
	selectUserSession,
} from '../../../../selectors';
import { logout } from '../../../../actions';
import styled from 'styled-components';

const RightAligned = styled.div`
	display: flex;
	justify-content: flex-end;
	gap: 24px;
`;

const StyledIcon = styled.div`
	cursor: pointer;
`;
const StyledLink = styled(Link)`
	color: #fff;
`;
const UserName = styled.div`
	display: flex;
	justify-content: right;
	align-items: center;
	gap: 10px;
	width: 100%;
	height: 40px;
	font-weight: 700;
	font-size: 25px;
	letter-spacing: -3%
`

const ControlPanelContainer = ({ className }) => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const roleId = useSelector(selectUserRole);
	const login = useSelector(selectUserLogin);
	const session = useSelector(selectUserSession);

	return (
		<div className={className}>
			<RightAligned>
				{roleId === ROLE.GUEST ? (
					<Button>
						<StyledLink to="/login">Войти</StyledLink>
					</Button>
				) : (
					<UserName>
						<div>{login}</div>
						<StyledIcon onClick={() => dispatch(logout(session))}>
							<Icon id="fa-sign-out" />
						</StyledIcon>
					</UserName>
				)}
			</RightAligned>
			<RightAligned>
				<StyledIcon onClick={() => navigate(-1)}>
					<Icon id="fa-backward" onClick={() => navigate(-1)} />
				</StyledIcon>
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
	gap: 20px;
`;
