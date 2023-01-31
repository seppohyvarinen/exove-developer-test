const Image = ({ transParency }) => {
  return (
    <div className="transParentImg" style={{ opacity: transParency / 100 }}>
      <div className="content">{transParency}</div>
    </div>
  );
};

export default Image;
