const posterMapper = movie => {
  return movie.map(({ poster_path: link, ...props }) => ({
    link,
    ...props,
  }));
};

export default posterMapper;
