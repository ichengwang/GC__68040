const buttonContainer = document.getElementById('button-container');

const positionButtonRandomly = (button) => {
    const buttonWidth = 100;
    const buttonHeight = 40;
    const top = Math.random() * (window.innerHeight - buttonHeight);
    const left = Math.random() * (window.innerWidth - buttonWidth);
    button.style.top = `${top}px`;
    button.style.left = `${left}px`;
};

const doubleButtons = () => {
    const currentButtonCount = buttonContainer.children.length;
    for (let i = 0; i < currentButtonCount; i++) {
        const newButton = document.createElement('button');
        newButton.textContent = '點我';
        positionButtonRandomly(newButton);
        buttonContainer.appendChild(newButton);
    }
};

positionButtonRandomly(buttonContainer.querySelector('button'));

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        doubleButtons();
    }
});