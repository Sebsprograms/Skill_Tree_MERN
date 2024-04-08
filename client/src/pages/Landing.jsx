import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <div>
            <Link className='btn' to='/skill-tree'>Go to Skill Tree</Link>
        </div>
    );
}

export default Landing;