class FSM {

  constructor(config) {
    this.config = Object.assign({}, config)
    if (config === undefined) throw new Error();
    this.statem = this.config.initial;
    this.red = this.config.initial;
  }
  getState() {
    return this.config.initial
  }

  changeState(state) {
    //  this.statem=this.config.initial;
    if (this.config.states[state] === undefined) throw new Error()
    for (let i in this.config.states) {
      if (state === i) this.config.initial = i;
    }

  }


  /**
   * Changes state according to event transition rules.
   * @param event
   */
  trigger(event) {
    this.statem = this.config.initial;//norm
    if (this.config.states[this.getState()].transitions[event] === undefined) throw new Error()
    this.config.initial = this.config.states[this.getState()].transitions[event];
    this.red = this.config.initial//bu
  }

  /**
   * Resets FSM state to initial.
   */
  reset() {
    this.config.initial = 'normal';
  }


  getStates(event) {
    let arr = [];
    let c = 0;
    if (event === undefined) return Object.keys(this.config.states)
    for (let i in this.config.states) {
      for (let j in this.config.states[i].transitions) {
        if (Object.keys(this.config.states[i].transitions).includes(event)) {
          arr.push(i)
        }
      }
    }
    arr = arr.filter(function (item, pos) {
      return arr.indexOf(item) == pos;
    })
    return arr;
  }


  /**
   * Goes back to previous state.
   * Returns false if undo is not available.
   * @returns {Boolean}
   */
  undo() {
    if (this.config.initial == 'normal') return false;
    if (this.config.initial != this.statem) { this.config.initial = this.statem; return true }
    else return false;
  }

  /**
   * Goes redo to state.
   * Returns false if redo is not available.
   * @returns {Boolean}
   */
  redo() {
    if (this.config.initial != this.red) {
      this.config.initial = this.red;
      return true
    }
    else return false;
  }

  /**
   * Clears transition history
   */
  clearHistory() {
    this.config.initial = 'normal';
    this.red = this.config.initial;
  }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
