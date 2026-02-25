import { useEffect } from "react";
import "../styles/modal.css";

function ConfirmModal({
  isOpen,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  onConfirm,
  onCancel,
  isDanger = false
}) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="confirm-modal-overlay" onClick={onCancel}>
      <div
        className="confirm-modal-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`confirm-modal-header ${isDanger ? "danger" : ""}`}>
          <h2>{title}</h2>
          <button
            className="modal-close-btn"
            onClick={onCancel}
          >
            ✕
          </button>
        </div>

        {/* Message */}
        <div className="confirm-modal-message">
          <p>{message}</p>
        </div>

        {/* Actions */}
        <div className="confirm-modal-actions">
          {cancelText && (
            <button
              className="modal-btn modal-btn-cancel"
              onClick={onCancel}
            >
              {cancelText}
            </button>
          )}

          <button
            className={`modal-btn modal-btn-confirm ${isDanger ? "danger" : ""}`}
            onClick={() => {
              onConfirm();
              onCancel();
            }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmModal;
