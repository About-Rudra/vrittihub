import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import 'bootstrap/dist/css/bootstrap.min.css';


function InviteModal() {



      const values = [true];
      const [fullscreen, setFullscreen] = useState(true);
      const [show, setShow] = useState(false);

      function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
      }

    return (
        <>
          {values.map((v, idx) => (
            <Button key={idx}  onClick={() => handleShow(v)}>
              Full screen

            </Button>
          ))}
          <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
              <Modal.Title>Modal</Modal.Title>
            </Modal.Header>
            <Modal.Body>Modal body content</Modal.Body>
          </Modal>
        </>
        
            // <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
            //     <div class="modal-dialog" role="document">
            //         <div class="modal-content">
            //             <div class="modal-header">
            //                 <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
            //                 <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            //                     <span aria-hidden="true">&times;</span>
            //                 </button>
            //             </div>
            //             <div class="modal-body">
            //                 ...
            //             </div>

            //         </div>
            //     </div>
                
            // </div>
        


            );
}

export default InviteModal;
