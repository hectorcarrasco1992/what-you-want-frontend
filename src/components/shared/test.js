<form>
    <div className='login-box'>
        <h1>Register</h1>
        <div className='textbox'>
            <i className='fas fa-user'></i>
            <input
                type='text'
                placeholder='Username'
                name='username'
                onChange={this.onChangeUsername}
            />
        </div>
        <div className='textbox'>
            <i className='fas fa-at'></i>
            <input type='text' placeholder='Email' name='email' />
        </div>
        <div className='textbox'>
            <i className='fas fa-lock'></i>
            <input type='password' placeholder='Password' name='password' />
        </div>
        <div className='textbox'>
            <i className='fas fa-city'></i>
            <input type='text' placeholder='City' name='city' />
        </div>
        <div className='textbox'>
            <i className='fas fa-flag-usa'></i>
            <input type='text' placeholder='State' name='state' />
        </div>
        <div className='textbox'>
            <i className='fas fa-code'></i>
            <input type='text' placeholder='Zip Code' name='zipCode' />
        </div>
        <input type='button' className='btn' value='Sign in' />
    </div>
</form>;
