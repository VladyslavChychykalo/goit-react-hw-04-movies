const profileMapper = cast => {
  return cast.map(({ profile_path: link, ...props }) => ({
    link,
    ...props,
  }));
};

export default profileMapper;
