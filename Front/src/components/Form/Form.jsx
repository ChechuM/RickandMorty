import './Form.css';
import logImg from './../../images/loginimg.png';
import validate from './Validation'
import React from 'react';
import { useParams } from 'react-router-dom';


export default function LogIn(props) {

    const [userData, setUserData] = React.useState({ username: '', password: '' });
    const [errors, setErrors] = React.useState({ username: '', password: '' })

    function handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;

        setUserData({
            ...userData,
            [name]: value,
        })

        setErrors(
            validate({
                ...userData,
                [name]: value,
            })
        )
    }

    function handleSubmit(event) {
        event.preventDefault();
        const errors = validate(userData);
        if (Object.values(errors).length === 0) {
            //   dispatch(actions.createFutbolista(input));
            props.login(userData)
            alert('Bienvenido al sitio')
            //puedo hacer que la web se redirija directamente a la página Home?
        }
        else {
            setErrors(errors);
            alert('Hay errores! checkea eso')
        }
    }

    return (
        <div>
            <img src={logImg} alt='rick and morty through the port' className='logInImg' />
            <form className='form' onSubmit={handleSubmit}>
                <label className="label">Username: </label>
                <input
                    type='text'
                    name='username'
                    value={userData.username}
                    placeholder='username'
                    onChange={handleInputChange} />
                {
                    errors.username && <p className='danger'>{errors.username}</p>
                }
                <br />
                <br />
                <label className="label">Password: </label>
                <input
                    type='password'
                    name='password'
                    value={userData.password}
                    placeholder='password'
                    onChange={handleInputChange} />
                {
                    errors.password && <p className='danger'>{errors.password}</p>
                }
                <br />
                <br />
                <button type='submit' value='submit' onClick={() => handleSubmit}>LOGIN</button>
            </form>
        </div>
    )
}