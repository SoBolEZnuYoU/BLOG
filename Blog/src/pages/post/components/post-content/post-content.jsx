import styled from "styled-components";

const PostContentContainer = ({className, post}) => {
	return (
		<div className={className}>
			{post.content}
		</div>
	)
}

export const PostContent = styled(PostContentContainer)``
