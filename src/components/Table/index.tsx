import React, { useEffect, useState } from 'react';

import { FaChevronLeft, FaChevronRight, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';

import { TablePosts, Pagination } from './styles';

interface ITable {
  id: number;
  title: string;
  body: string;
};

interface IPagesInfo {
  pageCount: number;
  currentPage: number;
  perPage: number;
}

const Table: React.FC = () => {
  const keyAPI = '?_format=json&access-token=sbospRQSDhxd4jc3tiEz4xNavPZNcNH3fii3';
  const [posts, setPosts] = useState<ITable[]>([]);
  const [pagination, setPagination] = useState(1);
  const [loading, setLoading] = useState();
  const [finalPage, setFinalPage] = useState(false);
  const [pagesInfo, setPagesInfo] = useState<IPagesInfo>(Object);
  const [date] = useState('19/05/2019');

  useEffect(() => {
    async function loadPosts() {
      setLoading(true);

      const response = await api.get(`/posts${keyAPI}`, {
        params: {
          page: pagination
        }
      });

      setPosts(response.data.result);
      setPagesInfo(response.data._meta);
      setLoading(false);
    };
    
    loadPosts();
  }, [pagination]);

  function handlePage(action: string) {
      if(action === 'prev' && pagination === 1) return;
      else if (action === 'prev' && pagination > 1) setPagination(pagination - 1);
      else if (action === 'prev' && pagination === 2) setPagination(pagination - 1);
      
      if(action === 'next' && pagination === pagesInfo.pageCount) setFinalPage(true);
      else if (action === 'next' && pagination < pagesInfo.pageCount) setPagination(pagination + 1);
  };

  return (
    <TablePosts>
      <thead>
        <tr>
          <th>Título</th>
          <th>Conteúdo</th>
          <th>Data de publicação</th>
        </tr>
      </thead>
      <tbody className="container">
        <tr className="title">
          {posts.map(post => {
            return (!loading ? (
              <td key={post.id}>{post.title}...</td>
            ) : (
              <td key={post.id}>
                <FaSpinner className="iconAnimate"></FaSpinner>
              </td>
            ))
          })}
        </tr>

        <tr className="content">
          {posts.map(post => {
            return (!loading ? (
              <td key={post.id}>{post.body}...</td>
            ) : (
              <td key={post.id}>
                <FaSpinner className="iconAnimate"></FaSpinner>
              </td>
            ))
          }) }
        </tr>

        <tr className="date">
          {posts.map(post => {
            return (!loading ? (
              <td key={post.id}>{date}</td>
            ) : (
              <td key={post.id}>
                <FaSpinner className="iconAnimate"></FaSpinner>
              </td>
            ))
          }) }
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Exibindo {pagesInfo.perPage} postagens</td>
        </tr>

        <tr className="pagination">
          {!loading ? (
            <Pagination
              className="pageIcon" 
              onClick={() => handlePage('prev')}
            >
              <FaChevronLeft className={pagination === 1 ? "firstOrLastPage" : ""} />
            </Pagination>) : (
            <Pagination className="pageIcon"><FaSpinner className="pageIcon iconAnimate"></FaSpinner></Pagination>
          )}
          
          <td className="active">{pagination}</td>
          
          {!loading ? (
            <Pagination 
              className="pageIcon" 
              onClick={() => handlePage('next')}
            >
              <FaChevronRight className={finalPage ? "firstOrLastPage" : ""} />
            </Pagination>
          ) : (
            <Pagination className="pageIcon"><FaSpinner className="pageIcon iconAnimate"></FaSpinner></Pagination>
          )}
        </tr>
      </tfoot>
    </TablePosts>
  );
};

export default Table;