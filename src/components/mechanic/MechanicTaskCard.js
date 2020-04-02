import React from 'react';
import dummy from '../../dummy.PNG';

const MechanicTaskCard = () => {
    return (  
        <div>
            <div className="row padded-row lowerbordercard">
                <div className="col-3">
                    <div className="imageholder">
                        <img className="image" src={dummy} alt="Dummy" />
                    </div>
                </div>
                <div className="col-5">
                    <div className="row">
                        <h6><b>Manikanta (63)</b></h6>
                    </div>
                    <div className="row">
                        <h6>+91-9876543521</h6>
                    </div>
                    <div className="row">
                        <h6>RSA - 57 minutes ago</h6>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row">
                        <button className="btn"><i className="fas fa-comment-dots"></i></button>
                        <button className="btn"><h5 className="text-primary taskcount">5</h5></button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default MechanicTaskCard;