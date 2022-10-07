import React, { Component } from 'react';

class Login extends Component {
  state = {
    email: '',
    nome: '',
    isBtnDisabled: true,
  };

  handleInput = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, () => this.verifyBtn());
  };

  verifyBtn = () => {
    const { email, nome } = this.state;
    const regex = /\S+@\S+\.\S+/;
    const verifyEmail = email && regex.test(email);
    const verifyName = nome.length >= 1;
    this.setState({ isBtnDisabled: !(verifyEmail && verifyName) });
  };

  render() {
    const { isBtnDisabled } = this.state;
    return (
      <div>
        <form>
          <div>
            <h2>Login</h2>
          </div>
          <div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                data-testid="input-gravatar-email"
                onChange={ this.handleInput }
              />
            </div>
            <div>
              <input
                type="text"
                name="nome"
                placeholder="Nome"
                data-testid="input-player-name"
                onChange={ this.handleInput }
              />
            </div>
            <div>
              <button
                data-testid="btn-play"
                type="submit"
                disabled={ isBtnDisabled }
              >
                Play
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;