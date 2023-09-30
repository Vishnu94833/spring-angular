interface IDispenser {
  nextSuccessor(successor: IDispenser): void;
  handle(amount: number): void;
}

// A dispenser of £10 notes

export class Dispenser5 implements IDispenser {
  // Dispenses £10s if applicable, otherwise continues to next successor
  #successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    // Set the next successor
    this.#successor = successor;
  }

  // @ts-ignore
  handle(amount: number) {
    // Handle the dispensing of notes"
    if (amount >= 5) {
      const num = Math.floor(amount / 5);
      const remainder = amount % 5;
      console.log(`Dispensing ${num} £5 note`);
      if (remainder !== 0) {
        (this.#successor as IDispenser).handle(remainder);
      }
      return `Dispensing ${num} £50 note`;
    } else {
      (this.#successor as IDispenser).handle(amount);
    }
  }
}

// A dispenser of £10 notes

export class Dispenser10 implements IDispenser {
  // Dispenses £10s if applicable, otherwise continues to next successor
  #successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    // Set the next successor
    this.#successor = successor;
  }

  // @ts-ignore
  handle(amount: number) {
    // Handle the dispensing of notes"
    if (amount >= 10) {
      const num = Math.floor(amount / 10);
      const remainder = amount % 10;
      console.log(`Dispensing ${num} £10 note`);
      if (remainder !== 0) {
        (this.#successor as IDispenser).handle(remainder);
      }
      return `Dispensing ${num} £10 note`;
    } else {
      (this.#successor as IDispenser).handle(amount);
    }
  }
}

// A dispenser of £20 notes

export class Dispenser20 implements IDispenser {
  // Dispenses £10s if applicable, otherwise continues to next successor
  #successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    // Set the next successor
    this.#successor = successor;
  }
  // @ts-ignore
  handle(amount: number) {
    // Handle the dispensing of notes"
    if (amount >= 20) {
      const num = Math.floor(amount / 20);
      const remainder = amount % 20;
      console.log(`Dispensing ${num} £20 note`);
      if (remainder !== 0) {
        (this.#successor as IDispenser).handle(remainder);
      }
      return `Dispensing ${num} £20 note`;
    } else {
      (this.#successor as IDispenser).handle(amount);
    }
  }
}

// A dispenser of £50 notes

export class Dispenser50 implements IDispenser {
  // Dispenses £10s if applicable, otherwise continues to next successor
  #successor: IDispenser | undefined;

  nextSuccessor(successor: IDispenser): void {
    // Set the next successor
    this.#successor = successor;
  }

  // @ts-ignore
  handle(amount: number) {
    // Handle the dispensing of notes"
    if (amount >= 50) {
      const num = Math.floor(amount / 50);
      const remainder = amount % 50;
      console.log(`Dispensing ${num} £50 note`);
      if (remainder !== 0) {
        (this.#successor as IDispenser).handle(remainder);
      }
      return `Dispensing ${num} £50 note`;
    } else {
      (this.#successor as IDispenser).handle(amount);
    }
  }
}
