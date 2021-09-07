import React, { useState} from 'react';
import ModalVideo from 'react-modal-video'
const FancyVideo = ({id}) => {
    const [isOpen, setOpen] = useState(false)
    return (

                    <div>
                        <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={id} onClose={() => setOpen(false)} />
                        <button className="btn-trailer" onClick={()=> setOpen(true)}><i className='bx bxs-right-arrow'/> <span>Play trailer</span></button>
                    </div>
    );
};

export default FancyVideo;