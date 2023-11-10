const FieldSize = Object.freeze({
    WIDTH: 1024,
    HEIGHT: 768,
});

const KeyboardController: any = {
    Enter: { pressed: false },
    ArrowLeft: { pressed: false },
    ArrowRight: { pressed: false },
    " ": { pressed: false },
};

export { FieldSize, KeyboardController };
