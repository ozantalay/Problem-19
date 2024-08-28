import { useEffect, useRef, useState } from 'react'

export default function App() {
  const [isOpen, setOpen] = useState(false)
  const modalRef = useRef(null)

  useEffect(() => {
    if (isOpen && modalRef.current) {
      modalRef.current.showModal();
    } else if (modalRef.current) {
      modalRef.current.close();
    }
  }, [isOpen]);

  function openModal() {
    setOpen(true)
  }

  function closeModal() {
    setOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Modalı aç</button>
      <Modal modalRef={modalRef}>
        <h1 className='pb-2 text-lg font-bold'>Modal açık</h1>
        <button onClick={closeModal}>Kapalı</button>
      </Modal>
    </>
  )
}

function Modal({ children, modalRef }) {
  return <dialog ref={modalRef} className='border-2 border-black p-4'>{children}</dialog>
}