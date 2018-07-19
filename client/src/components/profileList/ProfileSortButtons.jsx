export default (isActive) => {
  return (
    <div className="col s4 offset-s1">
      <a
        className={"waves-effect waves-light btn " + isActive(WESTERN)}
        onClick={this.setSort(WESTERN)}
      >
        Western
      </a>
    </div>
  );
};
