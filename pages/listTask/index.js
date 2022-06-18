import React from 'react'
import { useContext } from 'react'
import { Context } from '../../context'
import { BsCheckCircle } from 'react-icons/bs'
import ModalComponent from '../../components/ModalComponent'
function Index() {

    const { state } = useContext(Context)
    return (
        <section className="gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-12 col-xl-10">

                        <div className="card mask-custom">
                            <div className="card-body p-4 text-white">

                                <div className="text-center pt-3 pb-2">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-todo-list/check1.webp"
                                        alt="Check" width="60" />
                                    {/* <h2 className="text-primary my-4">{JSON.stringify(state)}</h2> */}
                                </div>

                                <table className="table text-white mb-0">
                                    <thead>
                                        <tr className="text-primary">
                                            <th scope="col">Tache</th>
                                            <th scope="col">Task</th>

                                            <th scope="col">Priority</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {state?.factures.map((item, index) => (
                                            <tr key={index} className="fw-normal">

                                                <th style={{ width: '50px' }}>
                                                    <img src={`https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava${index + 1}-bg.webp`}
                                                        alt="avatar 1" style={{ width: "45px", height: "auto" }} />
                                                    <span className="text-primary ms-2"></span>
                                                </th>
                                                <td className=" text-primary align-middle">
                                                    <span>{item.title}</span>
                                                </td>

                                                <td style={{ width: '100px' }} className="align-middle">
                                                    <h6 className="text-primary mb-0">{item.date}</h6>
                                                </td>
                                                <td className='text-primary align-middle' style={{ width: '100px' }} >
                                                    <BsCheckCircle onClick={() => console.log("hello")} style={{ color: "green", cursor: 'pointer' }} />
                                                    
                                                    <ModalComponent/>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>
                                </table>


                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index