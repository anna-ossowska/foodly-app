import classes from './Spinner.module.css';

const Spinner = (props) => {
  return (
    <div className={`${props.className} ${classes.spinner}`}>
      <svg
        id="Capa_1"
        enableBackground="new 0 0 497 497"
        viewBox="0 0 497 497"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <circle cx="98" cy="376" fill="#A6D593" r="53" />
          <circle cx="439" cy="336" fill="#C6E4BA" r="46" />
          <circle cx="397" cy="112" fill="#DAEED2" r="38" />
          <ellipse
            cx="56.245"
            cy="244.754"
            fill="#99CF83"
            rx="56.245"
            ry="54.874"
          />
          <ellipse
            cx="217.821"
            cy="447.175"
            fill="#A6D593"
            rx="51.132"
            ry="49.825"
          />
          <ellipse
            cx="349.229"
            cy="427.873"
            fill="#B0D99F"
            rx="48.575"
            ry="47.297"
          />
          <ellipse
            cx="117.092"
            cy="114.794"
            fill="#80C365"
            rx="58.801"
            ry="57.397"
          />
          <ellipse
            cx="453.538"
            cy="216.477"
            fill="#D2EAC8"
            rx="43.462"
            ry="42.656"
          />
          {/* <circle cx="263" cy="62" fill="#4e5a61" r="62" /> */}
        </g>
      </svg>
    </div>
  );
};

export default Spinner;
