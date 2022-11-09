import React from 'react';
import './CreatePlaylist.css'

const CreatePlaylist = (active, setActive, children) => {
    return (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>

            <div className={active ? 'modalContent active' : 'modalContent'} onClick={e => e.stopPropagation()}>
                {children}
            </div>

        </div>


    )
};

export default CreatePlaylist;
