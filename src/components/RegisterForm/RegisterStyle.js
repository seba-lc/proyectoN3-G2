import './RegisterStyle.css'

const RegisterStyle = ({children}) => {
  return (
    <div className='register-style'>
      <div className='register-box container p-0'>
        {children}
      </div>
    </div>
  );
};

export default RegisterStyle;