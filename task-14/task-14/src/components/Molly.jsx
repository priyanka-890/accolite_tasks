import React, { Component } from "react";

class Molly extends Component {
  handleCallFamilyToEat() {
    // event.stopPropagation();

    console.log("Hey fam! Food's ready!");
  }

  handleCookEggs(event) {
    event.stopPropagation();
    console.log("Molly is cooking fluffy eggs...");
  }

  handleMakeRice() {
    console.log("Molly is making some delicious jasmine rice...");
  }

  handleMixChicken() {
    console.log("Molly is mixing chicken with some yummy spicy sauce!");
  }

  render() {
    return (
      <>
        <h1>Event Bubbling in React</h1>
        <h3>
          when ever child Button’s event handler get called by onclicking it,the
          parent’s event also gets called it is called Event Bubbling
        </h3>
        <div className="im-a-parent" onClick={this.handleCallFamilyToEat}>
          <button className="im-a-child" onClick={this.handleCookEggs}>
            Cook Eggs
          </button>
          <button className="im-a-child" onClick={this.handleMakeRice}>
            Make Rice
          </button>
          <button className="im-a-child" onClick={this.handleMixChicken}>
            Mix Chicken
          </button>

          <br />
        </div>
        <h1>Event Capturing in React</h1>
        <h3>
          when ever child Button’s event handler get called by onclicking
          it,first parent’s event also gets called and then child event is
          called.
          <br />
          By default, event capturing cannot be seen in any of modern browsers.
          we can see by using onClick capture
        </h3>
        <div
          className="im-a-parent"
          onClickCapture={this.handleCallFamilyToEat}
        >
          <button className="im-a-child" onClick={this.handleCookEggs}>
            Cook Eggs
          </button>
          <button className="im-a-child" onClick={this.handleMakeRice}>
            Make Rice
          </button>
          <button className="im-a-child" onClick={this.handleMixChicken}>
            Mix Chicken
          </button>
        </div>
      </>
    );
  }
}

export default Molly;
