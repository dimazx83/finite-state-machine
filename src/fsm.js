class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this.config = config
        if (this.config === undefined) throw new Error()
    }
    getState() {
        return this.config.initial
    }

    changeState(state) {
        if(this.config.states[state]===undefined) throw new Error()
        for (let i in this.config.states) {
            if (state === i) this.config.initial = i;
        }

    }


    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        this.config.initial = this.config.states[this.getState()]
        console.log(this.config.initial)
        //.transitions[event]
    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this.config.initial = 'normal';
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) { }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() { }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() { }

    /**
     * Clears transition history
     */
    clearHistory() { }
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/
