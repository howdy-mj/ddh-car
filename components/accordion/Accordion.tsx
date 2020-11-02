import React, { FC } from 'react';
import styled from 'styled-components';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { withStyles } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface AccordionProps {
  title: String;
  children?: JSX.Element;
}

const AccordionWrap: FC<AccordionProps> = ({ title, children }) => {
  return (
    <div>
      <AccordionStyled>
        <AccordionSummaryStyled
          // expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Title>{title} 정보</Title>
        </AccordionSummaryStyled>
        <AccordionDetails>{children}</AccordionDetails>
      </AccordionStyled>
    </div>
  );
};

export default AccordionWrap;

const AccordionStyled = withStyles({
  root: {
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(Accordion);

const AccordionSummaryStyled = withStyles({
  root: {
    borderBottom: `1px solid rgb(102, 102, 102)`,
    marginBottom: -1,
    minHeight: '4.9rem',
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(AccordionSummary);

const Title = styled.h2`
  font-size: 1.8rem;
  color: ${(props) => props.theme.greyishBrown};
`;
