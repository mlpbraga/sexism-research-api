const UsersRequestFormatter = {
  format(user) {
    const {
      username,
      email,
      name,
      birth,
      gender,
      votes,
    } = user;

    const countVotes = votes.length;
    return {
      username,
      email,
      name,
      birth,
      gender,
      countVotes,
    };
  },
};

module.exports = UsersRequestFormatter;
