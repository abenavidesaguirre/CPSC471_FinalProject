const Button = ({ text, buttonType, buttonStyle }) => {
    return (
        <div className={buttonType}>
            <button className={buttonStyle}>{text}</button>
        </div>
    )
  }
  
  export default Button