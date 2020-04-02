import React from 'react';
import dummy from '../../dummy.PNG';

const TaskCard = () => {
    return (  
        <div>
            <div className="row padded-row lowerbordercard">
                <div className="col-3">
                    <div className="imageholder">
                        <img className="image" src={dummy} alt="Dummy" />
                    </div>
                    <div className="row imagename">
                        <h6>Vishal Das</h6>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h6><b>05:45 am - 06:15 am</b></h6>
                    </div>
                    <div className="row">
                        <h6><b>Prabhakaran</b></h6>
                    </div>
                    <div className="row">
                        <h6>111 Tasty Bakes Building, 101</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <button className="btn btnshadow btn-primary btn-sm">show on map</button>
                    </div>
                </div>
            </div>
            <div className="row padded-row lowerbordercard">
                <div className="col-3">
                    <div className="imageholder">
                        <img className="image" src={dummy} alt="Dummy" />
                    </div>
                    <div className="row imagename">
                        <h6>Vishal Das</h6>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h6><b>07:00 am - 07:30 am</b></h6>
                    </div>
                    <div className="row">
                        <h6><b>Vishwanath</b></h6>
                    </div>
                    <div className="row">
                        <h6>Karnataka, India</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <button className="btn btn-success btn-sm">successful</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-danger btn-sm uppermargin"><i className="far fa-clock"></i> delayed</button>
                    </div>
                </div>
            </div>
            <div className="row padded-row lowerbordercard">
                <div className="col-3">
                    <div className="imageholder">
                        <img className="image" src={dummy} alt="Dummy" />
                    </div>
                    <div className="row imagename">
                        <h6>Vishal Das</h6>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h6><b>07:15 am - 08:00 am</b></h6>
                    </div>
                    <div className="row">
                        <h6><b>Mohan</b></h6>
                    </div>
                    <div className="row">
                        <h6>Karnataka, India</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <button className="btn btn-success btn-sm">successful</button>
                    </div>
                    <div className="row">
                        <button className="btn btn-danger btn-sm uppermargin"><i className="far fa-clock"></i> delayed</button>
                    </div>
                </div>
            </div>
            <div className="row padded-row lowerbordercard">
                <div className="col-3">
                    <div className="imageholder">
                        <img className="image" src={dummy} alt="Dummy" />
                    </div>
                    <div className="row imagename">
                        <h6>Vishal Das</h6>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h6><b>08:15 am - 09:00 am</b></h6>
                    </div>
                    <div className="row">
                        <h6><b>Sivanesan</b></h6>
                    </div>
                    <div className="row">
                        <h6>Koramangala, Bangalore, India</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <button className="btn btnshadow btn-primary btn-sm">show on map</button>
                    </div>
                </div>
            </div>
            <div className="row padded-row lowerbordercard">
                <div className="col-3">
                    <div className="imageholder">
                        <img className="image" src={dummy} alt="Dummy" />
                    </div>
                    <div className="row imagename">
                        <h6>Vishal Das</h6>
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h6><b>08:15 am - 09:00 am</b></h6>
                    </div>
                    <div className="row">
                        <h6><b>Sivanesan</b></h6>
                    </div>
                    <div className="row">
                        <h6>Koramangala, Bangalore, India</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <button className="btn btnshadow btn-primary btn-sm">show on map</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default TaskCard;