import React from 'react';
import ScrollToTop from '../../../hooks/Scrool-to-top';

const ConformationModal = ({ title, message, modalClose, successAction, modalData, successButtonName }) => {
    return (
        <div>
            <ScrollToTop/>
            <input type="checkbox" id="modalConformation" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{message}</p>
                    <div className="modal-action">
                        <label
                            onClick={() => successAction(modalData)}
                            htmlFor="modalConformation"
                            className="btn btn-sm bg-red-400 border-none">{successButtonName}
                        </label>
                        <label onClick={modalClose} className="btn btn-sm bg-green-500 border-none">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConformationModal;