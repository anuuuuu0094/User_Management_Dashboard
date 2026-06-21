import Modal from "../common/Modal";
import Button from "../common/Button";

function ConfirmDeleteModal({ isOpen, onClose, onConfirm }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Delete User">
      <div className="space-y-5">
        <p className="text-slate-600">
          Are you sure you want to delete this user?
        </p>

        <div className="flex justify-end gap-3">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>

          <Button variant="danger" onClick={onConfirm}>
            Delete
          </Button>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmDeleteModal;
