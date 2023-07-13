const Comment = ({ data }) => {
  //   const { snippet, id } = data;
  const detailSnippet = data?.map((e) => e.snippet.topLevelComment.snippet);

  return (
    <div>
      <div className="font-semibold text-gray-500 text-lg">Comments</div>
      {detailSnippet?.map((e) => (
        <div className="flex flex-row my-5">
          <div>
            <img
              className="h-10 mx-1 rounded-full"
              src={e?.authorProfileImageUrl}
              alt="user-icon"
            />
          </div>
          <div className="flex flex-col ml-6">
            <span className="font-bold text-base">{e?.authorDisplayName}</span>
            <span className="text-sm">{e?.textDisplay}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Comment;
