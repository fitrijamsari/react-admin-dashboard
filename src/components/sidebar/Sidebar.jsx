import "./sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">ffjadmin</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li>
            <span>Dashbaord</span>
          </li>
          <li>
            <span>Dashbaord</span>
          </li>
          <li>
            <span>Dashbaord</span>
          </li>
          <li>
            <span>Dashbaord</span>
          </li>
        </ul>
      </div>
      <div className="bottom">color options</div>
    </div>
  );
}

export default Sidebar;
