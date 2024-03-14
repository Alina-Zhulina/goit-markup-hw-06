(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open-mobile]"),
    closeModalBtn: document.querySelector("[data-modal-close-mobile]"),
    modal: document.querySelector("[data-modal-mobile]"),
  };

  refs.openModalBtn.forEach((element) => {
    element.addEventListener("click", toggleModal);
  });
  refs.closeModalBtn.addEventListener("click", toggleModal);

  //* Закривання по кліку на бекдроп

  refs.modal.addEventListener("click", removeModal);
  function removeModal(e) {
    if (e.target === e.currentTarget) {
      refs.modal.classList.add("is-hidden-mobile");
    }
  }

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden-mobile");
    document.body.classList.toggle("no-scroll-mobile");
  }
})();
