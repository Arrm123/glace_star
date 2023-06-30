import './back.scss';
import { Link, useParams } from 'react-router-dom';
import arrow from '../../assets/images/arrowBack.svg';

const Back = ({link}) => {
    let {path} = useParams();
    return(
        <Link to={link ? link : `/categories/${path}`} activeclassname="active" className='menu'>
            <div className='back'>
                <img src={arrow} alt='back'/>
            </div>
        </Link>       
    )
}

export default Back;