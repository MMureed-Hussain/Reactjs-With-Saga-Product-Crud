import React from 'react'

export const ResetForm = ({ email, token }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        
      };
  return (
    <>
     <div className="container">
      <h1 className="mt-5">Reset Password</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <input type="hidden" name="email" value={email} />
        <input type="hidden" name="token" value={token} />

        <div className="form-group">
          <label htmlFor="password">New Password:</label>
          <input type="password" name="password" id="password" className="form-control" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password:</label>
          <input type="password" name="confirmpassword" id="confirm_password" className="form-control" required />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Reset Password</button>
        </div>
      </form>
    </div>
    </>
  )
}


