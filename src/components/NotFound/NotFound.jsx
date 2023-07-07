import { useNavigate } from "react-router-dom";
import img from '../../img/ERROR404.png';
import styles from './NotFound.module.css';

export default function NotFound(){
    const navigate = useNavigate();
    const handleNavigate = () => navigate('/');

    return(
        <div>
            <img src={img} alt="ERROR404" className={styles.imgerror}/>
            <button onClick={handleNavigate}>Click here to return</button>
        </div>
    );
};