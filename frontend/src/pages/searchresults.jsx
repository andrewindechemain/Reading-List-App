import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useQuery, gql } from '@apollo/client';
import { useParams } from 'react-router-dom';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const GET_SEARCH_RESULT = gql`
  query GetSearchResult($title: String!) {
    book(title: $title) {
      title
      author
      coverPhotoURL
      readingLevel
    }
  }
`;

const SearchResults = ({ onAddToReadingList }) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToList = () => {
    setIsAdded(true);
    onAddToReadingList(book);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const getBackgroundColor = () => {
    switch (true) {
    case isAdded:
      return '#5ACCCC';
    case isHovered:
      return '#CFFAFA';
    default:
      return 'white';
    }
  };

  const getButtonText = () => {
    if (isAdded) return 'Added';
    return 'Add to Library';
  };

  const getButtonIcon = () => {
    if (isAdded) return <CheckCircleIcon style={{ marginLeft: '10px' }} />;
    return <LibraryAddIcon style={{ marginLeft: '10px' }} />;
  };

  const { query } = useParams();
  const { loading, error, data } = useQuery(GET_SEARCH_RESULT, {
    variables: { title: query },
  });
  if (loading) return <p>Loading...</p>;
  if (error) {
    return (
      <p>
        Error:
        {' '}
        {error.message}
      </p>
    );
  }
  if (!data || !data.book) return <p>No book found.</p>;

  const { book } = data;

  return (
    <div className="resultsPageContainer">
      <p className="searchResults">
        Search Results for &quot;
        <span className="resultquery">{query}</span>
        &quot;
      </p>
      <div className="imageGrid">
        <div className="imageCard">
          <img src={book.coverPhotoURL} alt={book.title} />
          <div className="bookInfo">
            <p className="bookTitle">{book.title}</p>
            <p className="bookAuthor">
              By:
              {' '}
              {book.author}
            </p>
            <button
              type="button"
              onClick={handleAddToList}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                display: 'flex',
                alignSelf: 'center',
                justifyContent: 'center',
                padding: '5px 10px',
                borderRadius: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
                backgroundColor: getBackgroundColor(),
                color: isAdded ? 'white' : '#335C6E',
              }}
            >
              {getButtonText()}
              {getButtonIcon()}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
SearchResults.propTypes = {
  onAddToReadingList: PropTypes.func.isRequired,
};

export default SearchResults;
