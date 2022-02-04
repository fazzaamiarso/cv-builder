import { Dialog } from '@headlessui/react';
import { useRef } from 'react';

const ConfirmationModal = ({ isOpen, setIsOpen, onConfirm, item }) => {
  const cancelButtonRef = useRef(null);

  const handleConfirm = () => {
    onConfirm();
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="fixed z-10 inset-0 overflow-y-auto"
      initialFocus={cancelButtonRef}
    >
      <div className="flex items-center justify-center min-h-screen">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="flex flex-col relative bg-white rounded max-w-lg     mx-auto px-6 py-4 gap-2">
          <Dialog.Title className="font-semibold text-xl  ">
            Are you sure you want to delete {item.sectionName}?
          </Dialog.Title>
          <Dialog.Description className="text-lg text-gray-800">
            This action cannot be undone
          </Dialog.Description>
          <div className="flex self-end gap-4    pt-8  ">
            <button
              ref={cancelButtonRef}
              onClick={() => setIsOpen(false)}
              className="text-primary-purple rounded-sm px-3 py-2 focus:ring-2 focus:ring-blue-200"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="text-white bg-primary-purple rounded-sm px-3 py-2"
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ConfirmationModal;
