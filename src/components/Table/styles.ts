import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(0deg);
  }
  from {
    transform: rotate(360deg);
  }
`;

export const TablePosts = styled.table`
  width: 100%;
  height: calc(100% - 84px);
  display: flex;
  flex-direction: column;
  border-radius: 3px 3px 0px 0px;
  border: 1px solid ${props => props.theme.colors.border};
  
  .container {
    position: relative;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  tr {
    display: flex;
  }

  .content {
    position: absolute;
    left: 33%;
    top: 0;
  }

  .title,
  .content,
  .date {
    max-height: 100%;
    width: 34%;
    flex-direction: column;

    td {
      border-bottom: 1px solid ${props => props.theme.colors.secondary}
    }
  }

  .date {
    position: absolute;
    left: 67%;
    top: 0;
  }

  tr th {
    width: 100%;
    text-align: left;
    padding: 15px 0 15px 30px;
  }

  tr th {
    background: ${props => props.theme.colors.secondary};
    color: ${props => props.theme.colors.font_secondary};
    font-size: 15px;
  }

  tr td {
    font-size: 14px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 20px 0 20px 30px;
    line-height: 0px;
  }

  tfoot {
    display: flex;
    justify-content: space-between;
    align-items: center;

     tr {
      margin-bottom: 5px;
    }

    tr:last-child {
      margin-bottom: 4px;
    }

    td {
      padding: 10px 0 10px 20px;
    }
  }

  .pagination {
    display: flex;
    align-items: center;
    margin-right: 30px;
  }

  .pagination td.active {
    border: 2px solid ${props => props.theme.colors.border};
    border-radius: 4px;
    padding: 10px 5px;
    margin: 0 15px;
  }

  .iconAnimate {
    animation: ${rotate} 2s linear infinite;
    cursor: not-allowed;
  }
`;

export const Pagination = styled.td`
  &.pageIcon,
  &.pageIcon ~ td { 
    font-size: 13px;
    color: ${props => props.theme.colors.font_tertiary};
    cursor: pointer;
    padding: 0;
  }

  &.pageIcon svg {
    fill: ${props => props.theme.colors.font_primary};
  }

  &.pageIcon .firstOrLastPage {
    fill: #A3A3A3;
  }
`;