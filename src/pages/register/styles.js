import styled from "styled-components";

export const RegisterFake = styled.div`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .icon {
    color: ${props => props.theme.text};
    font-size: 1.2em;
  }

  fieldset {
    border: none;
    display: grid;
    gap: 1em;
  }

  fieldset div {
    position: relative;
    display: flex;
    flex-direction: column;
  }

  label {
    top: 50%;
    transform: translateY(-50%);
    left: 5px;
    transition: all 0.3s ease;
    pointer-events: none;
    position: absolute;
    font-size: 0.95em;
  }

  input {
    border: none;
    color: ${props => props.theme.text};
    outline: none;
    background-color: transparent;
    border-bottom: 2px solid rgb(0, 0, 185);
    width: 200px;
    padding: 0.7em;
    height: 7dvh;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 0;
    padding: 0em 0.6em;
    border-radius: 1em;
    background-color: ${props => props.theme.background};
    font-size: 0.85em;
  }

  button {
    width: 100%;
    padding: 1em;
    border-radius: 0.5em;
    background-color: transparent;
    font-size: 1.06em;
    border: none;
    color: ${props => props.theme.textBtn};
    cursor: pointer;
    transition: all 0.3s;

    &:hover {
      box-shadow: ${props => props.theme.shadow};
    }
  }

  input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input.error {
    border-bottom: 2px solid red;
  }

  span {
    color: #ff4d4f;
    font-size: 0.75rem;
    margin-top: 4px;
    display: block;
    font-weight: 500;
    animation: fadeIn 0.2s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-3px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .divPassword button,
  .divConfirm button {
    width: 10px;
    height: 10px;
    border: none;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;

    &:hover {
      box-shadow: none;
    }
  }

  .divPassword button:disabled,
  .divConfirm button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media screen and (width >= 700px) {
    grid-column: 2 / -1;
  }
`;
