import ReactDOM from 'react-dom/client';
import Router from './router';
import './index.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const toast = ReactDOM.createRoot(
  document.getElementById('toast') as HTMLElement,
);
root.render(<Router />);
toast.render(<ToastContainer />);
