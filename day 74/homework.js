class animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    makeSound() {
        return "some sound";
    }

}

class dog extends animal {
    makeSound() {
        return "bark";
    }
}

class cat extends animal {
    makeSound() {
        return "meow";
    }
}

class bird extends animal {
    makeSound() {
        return "tweet";
    }
}

class vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    startEngine() {
        return "engine started";
    }
}

class car extends vehicle {
    startEngine() {
        return "car engine started";
    }
}

class truck extends vehicle {
    startEngine() {
        return "truck engine started";
    }
}

class motorcycle extends vehicle {
    startEngine() {
        return "motorcycle"
    }
}

class inheritence {
    constructor(animal, decendent) {
        this.animal = animal;
        this.de = species;
    }

    makeSound() {
        return "some sound";
    }

}

class dog extends wolf {
    makeSound() {
        return "bark";
    }
}

class cat extends animal {
    makeSound() {
        return "meow";
    }
}

class bird extends animal {
    makeSound() {
        return "tweet";
    }
}