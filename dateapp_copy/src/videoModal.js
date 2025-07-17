import React, { useState } from 'react';
import video from './video/theVideo.mp4'

function VideoModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>×</button>
        <video
          src={video}
          type="video/mp4"
          autoPlay
          controls
          style={{ width: '100%' }}
        />
      </div>
    </div>
  );
}


export default VideoModal;