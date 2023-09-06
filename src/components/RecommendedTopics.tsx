import { CSSProperties } from "react";
import { useMediaQuery } from '../hooks/useMediaQuery';
import { RecommendedTopic, TopicPosition } from "./RecommendedTopic";
import { RECOMMENDED_TOPICS } from "../constant/topics";
import { styled } from "styled-components";

const SectionWrapper = styled.section`
	display: grid;
	grid-template-columns: repeat(var(--topics), minmax(140px, 1fr));
	grid-gap: 8px;
`;

export const RecommendedTopics = () => {
	const isMobile = useMediaQuery('(max-width: 768px)');
	const renderTopicsNumber = isMobile ? 2 : 4;

	const renderRecommendedTopics = (topics: typeof RECOMMENDED_TOPICS, amount: number) => {
		return topics.map(({ text, icon }, idx) => {
			let position = '';
			const modDivision = (idx + 1) % amount;
			if (modDivision === 1) {
				position = 'first';
			} else if (modDivision === 0) {
				position = 'last';
			} else if (modDivision % 2 === 0) {
				position = 'odd';
			} else {
				position = 'even';
			}

			return <RecommendedTopic text={text} key={idx} position={position as TopicPosition}>{icon}</RecommendedTopic>
		});
	};

	const styles = {
		"--topics": renderTopicsNumber,
	} as CSSProperties;

	return (
		<SectionWrapper style={styles}>
			{renderRecommendedTopics(RECOMMENDED_TOPICS, renderTopicsNumber)}
		</SectionWrapper>
	);
};
