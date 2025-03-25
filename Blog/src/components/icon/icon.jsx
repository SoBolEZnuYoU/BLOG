import styled from "styled-components";

const IconContainer = ({ className, id }) => (
	<div className={className}>
		<i className={`fa ${id}`} aria-hidden="true"></i>
	</div>
);

export const Icon = styled(IconContainer)`
	font-size: ${({size = '24px'}) => size};
	line-height: 0px;
	align-items: center;
`;
