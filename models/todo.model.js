
module.exports = mongoose => {
  const Todo = mongoose.model(
    "todo",
    mongoose.Schema(
      {
        title: String,
        description: String,
        published: Boolean,
        Tag:[
          {type: mongoose.Schema.Types.ObjectId, ref: 'tag'}
        ],
        User: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
      },
      { timestamps: true }
    )
  );

  return Todo;
};
