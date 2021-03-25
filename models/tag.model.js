module.exports = mongoose => {
  const Tag = mongoose.model(
    "tag",
    mongoose.Schema(
      {
        title: String,
        User: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
      },
      { timestamps: true }
    )
  );

  return Tag;
};
