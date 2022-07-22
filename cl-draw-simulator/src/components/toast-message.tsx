import { Toast } from 'react-bootstrap';
import GlobalStyle from '../styling/global-style';

const ToastMessage = ({ title, message }: any) => {
  return (
    <Toast autohide={true} style={GlobalStyle.toast.body}>
      <Toast.Header style={GlobalStyle.toast.header}>
        <strong className="me-auto">{title}</strong>
      </Toast.Header>
      <Toast.Body>{message}</Toast.Body>
    </Toast>
  );
};

export default ToastMessage;
