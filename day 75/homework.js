class Computer {
    constructor(input, output) {
    }

    makeSound() {
        return "some sound";
    }

}

class input extends computer {
    makeSound() {
        return "click";
    }
}

class output extends computer {
    makeSound() {
        return "Speaker sound";
    }
}

class keyboard extends input {
    makeSound() {
        return "keyboard click";
    }
}

class mouse extends input {
    makeSound() {
        return "Mouse click";
    }
}

class Speaker extends output {
    makeSound() {
        return "computer noise";
    }
}

class screen extends output {
    makeSound() {
        return "No noise";
    }
}