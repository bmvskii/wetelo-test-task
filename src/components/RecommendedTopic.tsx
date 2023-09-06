import { PropsWithChildren, FC, HTMLAttributes } from "react";
import styled from "styled-components";
import cn from '../helpers/concatClassName';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 50px;
  min-width: 140px;
  position: relative;
  cursor: pointer;
  z-index: 1;

  .content {
    transition: opacity .2s ease;
  }

  &::before,
  &::after {
    transition: border-color .2s ease;
  }

  &:hover {
    &::before,
    &::after {
      border-color: var(--color-gray-dark);
    }

    .content {
      opacity: .8;
    }
  }

  &::before,
  &::after {
    display: block;
    position: absolute;
    content: '';
    top: 0;
    height: calc(100% - 2px);
    width: calc(50% + 16px);
    z-index: 0;
    border: 1px solid var(--color-gray-light);
  }

  &::before {
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-right: 0;
    left: 0;
  }

  &::after {
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-left: 0;
    right: 0;
  }

  &.first {
    .content {
      border-right: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    &::after {
      transform: skewX(-15deg);
    }
  }

  &.last {
    .content {
      border-left: 0;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    &::before {
      transform: skewX(-15deg);
    }
  }

  &.odd {
    .content {
      border-left: 0;
      border-right: 0;
      border-radius: 0;
    }

    &::before {
      transform: skewX(-15deg);
    }

    &::after {
      transform: skewX(15deg);
    }
  }

  &.even {
    .content {
      border-left: 0;
      border-right: 0;
      border-radius: 0;
    }

    &::before {
      transform: skewX(15deg);
    }

    &::after {
      transform: skewX(-15deg);
    }
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  z-index: 1;
`;

export type TopicPosition = 'first' | 'last' | 'odd' | 'even';

const Label = styled.h2`
  margin-left: 5px;
`;

const Icon = styled.div``;

type RecommendedTopicProps = PropsWithChildren<{
  text: string;
  position?: TopicPosition;
}> & HTMLAttributes<HTMLElement>;

export const RecommendedTopic: FC<RecommendedTopicProps> = (props) => {
  const { children, text, position = '', className = '', ...otherProps } = props;
  return (
    <Wrapper className={cn(position, className)} {...otherProps}>
      <Content className="content">
        <Icon>
          {children}
        </Icon>
        <Label>{text}</Label>
      </Content>
    </Wrapper >
  );
};
