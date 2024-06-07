import styled from 'styled-components';

// Contact section
export const Contact = styled.section`
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
    h1{
        font-size: 2rem;

    }
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 600px;
        margin: 0 auto;

        input, textarea {
            width: 100%;
            padding: 10px;
            margin: 10px 0;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        button {
            padding: 10px 20px;
            border: none;
            font-size: 1rem;
            border-radius: 4px;
            background-color: transparent;
            color: black;
            cursor: pointer;
            transition: 0.3s;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

            &:hover {
                box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
            }
        }
    }
`;


export default Contact;
