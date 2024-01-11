function ModalPreview({ children }) {
  return (
    <dialog className="modal" id="IDModalPreview">
      <div className="modal-box max-w-full">
        {children}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn btn-neutral">Continue</button>
          </form>
        </div>
      </div>
    </dialog>
  );
}

export default ModalPreview;
