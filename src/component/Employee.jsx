import React from 'react'
import Navbar from './Navbar'

const Employee = () => {
  return (
    <div><Navbar />
    <div className="container">
        <h1>Add Employee</h1>
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Employee Name</label>
                                <input type="text" className="form-control" id="name" placeholder="Enter Employee Name" />

                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Designation</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter Designation" />   
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Location</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter Location" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Salary</label>
                                <input type="text" className="form-control" id="email" placeholder="Enter Salary" />
                            </div>
                            <br/>
                            <div className='form-group'>
                            <button className="btn btn-success" >Add Employee</button>
                           </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
    </div>
  )
}

export default Employee