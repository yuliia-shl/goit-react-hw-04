import Modal from 'react-modal';
Modal.setAppElement('#root');

const ImageModal = ({ image, onClose, isOpen }) => {
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        {image && (
          <img src={image.imageUrl} alt={image.alt} style={{ width: '90%', height: '90%' }} />
        )}
        <button onClick={onClose}>x</button>
      </Modal>
    </div>
  );
};

export default ImageModal;
