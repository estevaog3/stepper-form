let stepperForm = (() => {
  let stepperForm = document.querySelector(".stepper-form");
  let buttons = document.getElementsByClassName("step-button");
  let steps = document.getElementsByClassName("stepper-form__step");
  let current = 0;

  function handleForwardStep(e){
    let currentInput = steps[current].querySelector('input');
    if(currentInput.checkValidity() === true){
      steps[current].classList.remove('stepper-form__step--current');
      steps[current + 1].classList.add('stepper-form__step--current');
      current++;
    }
  }

  function handleBackwardStep(e){
    steps[current].classList.remove('stepper-form__step--current');
    steps[current - 1].classList.add('stepper-form__step--current');
    current--;
  }

  function handleSubmit(e){
    e.preventDefault();
    stepperForm.reset();
    stepperForm.classList.add('stepper-form--submited');
    setTimeout(() => {
      stepperForm.classList.remove('stepper-form--submited');
      resetForm();
      }, 5000);
  }

  function resetForm(){
    steps[current].classList.remove('stepper-form__step--current');
    steps[0].classList.add('stepper-form__step--current');
    current = 0;
  }

  for(let i = 0; i < buttons.length; i++){
    if(buttons[i].getAttribute('data-step-direction') === 'forward'){
      buttons[i].addEventListener('click', handleForwardStep);
    }else if(buttons[i].getAttribute('data-step-direction') === 'backward'){
      buttons[i].addEventListener('click', handleBackwardStep);
    }
  }
  document.querySelector(".stepper-form").addEventListener('submit', handleSubmit);
})();