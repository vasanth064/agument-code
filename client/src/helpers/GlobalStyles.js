import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  background: ${(props) => (props.outlined ? 'transparent' : '#5c538c')};
  border: 2.5px solid #8173dc;
  border-radius: 15px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  color: white;
  width: ${(props) => props.width || '100%'};
  margin-left: ${(props) => props.left || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background: #5c538c;
  }
  & img {
    width: 25px;
    height: auto;
    object-fit: cover;
  }
  &:disabled {
    background-color: gray;
    color: black;
  }
`;
export const LinkButton = styled(Link)`
  @import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  background: ${(props) => (props.outlined && 'transparent') || '#5c538c'};
  border: 2.5px solid #8173dc;
  border-radius: 15px;
  padding: 1rem 2rem;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  color: white;
  text-align: center;
  width: ${(props) => props.width || '100%'};
  margin-left: ${(props) => props.left || 0};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #5c538c;
  }
  & img {
    width: 25px;
    height: auto;
    object-fit: cover;
  }
  &:disabled {
    background-color: gray;
    color: black;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  line-height: 42px;
`;
export const ContentSection = styled.div`
  margin-left: auto;
  width: 98.5%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
export const Label = styled.label`
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  width: 100%;
  & p {
    min-width: 100%;
  }
`;

export const Input = styled.input`
  background-color: #1f1d2c;
  border: 2.5px solid #8173dc;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  color: white;
  width: ${(props) => props.width || '100%'};
  outline: none;
  margin-top: 0.75rem;
  &:disabled {
    background-color: gray;
    color: black;
  }
`;

export const FileInput = styled.input.attrs({ type: 'file' })`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: inherit;
  color: white;
  width: inherit;
  height: inherit;
  outline: none;
  z-index: -1;
  cursor: pointer;
`;

export const Select = styled.select`
  background-color: #1f1d2c;
  border: 2.5px solid #8173dc;
  border-radius: 15px;
  padding: 1rem 1.5rem;
  font-size: 18px;
  font-family: 'Poppins';
  font-weight: 500;
  color: white;
  /* width: ${(props) => props.width || '100%'}; */
  width: 100%;
  outline: none;
  margin-top: 0.75rem;
  margin-left: 0.75rem;
`;
export const BgGlassEffect = styled.div`
  height: inherit;
  width: inherit;
  background: rgba(38, 40, 55, 0.9);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
`;

export const LoginTitle = styled.h1`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 30px;
  letter-spacing: 0.05em;
  align-self: flex-start;
`;
export const PageTitle = styled.h1`
  font-family: 'Pacifico';
  font-style: normal;
  font-weight: 400;
  font-size: 48px;
  line-height: 84px;
  letter-spacing: 0.05em;
  z-index: 1;
`;
export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  padding: 5rem 0;
`;
export const LoginContainer = styled.form`
  width: 800px;
  max-width: 1080px;
  background: rgba(38, 40, 55, 0.9);
  backdrop-filter: blur(100px);
  -webkit-backdrop-filter: blur(100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5rem 4rem;
  gap: 1.5rem;
  border-radius: 25px;
  margin: 1rem 0;
`;
