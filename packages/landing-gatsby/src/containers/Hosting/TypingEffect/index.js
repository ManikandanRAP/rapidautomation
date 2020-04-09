import React from 'react';
// import ReactDOM from 'react-dom';
import Box from 'common/src/components/Box';

import './typingeffect.css';
import { render } from 'react-dom';

class TypingEffectSection extends React.Component {
  componentDidMount() {
    //test
    class TypeWriter {
      constructor(txtElement, words, wait = 1000) {
        this.txtElement = txtElement;
        this.words = words;
        this.txt = '';
        this.wordIndex = 0;
        this.wait = parseInt(wait, 10);
        this.type();
        this.isDeleting = false;
      }

      type() {
        // Current index of word
        const current = this.wordIndex % this.words.length;
        // Get full text of current word
        const fullTxt = this.words[current];

        // Check if deleting
        if (this.isDeleting) {
          // Remove char
          this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
          // Add char
          this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        // Insert txt into element
        this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

        // Initial Type Speed
        let typeSpeed = 100;

        if (this.isDeleting) {
          typeSpeed /= 2;
        }

        // If word is complete
        if (!this.isDeleting && this.txt === fullTxt) {
          // Make pause at end
          typeSpeed = this.wait;
          // Set delete to true
          this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
          this.isDeleting = false;
          // Move to next word
          this.wordIndex++;
          // Pause before start typing
          typeSpeed = 500;
        }

        setTimeout(() => this.type(), typeSpeed);
      }
    }

    // Init On DOM Load
    setTimeout(() => {
      init();
    }, 1000);

    // Init App
    function init() {
      const txtElement = document.querySelector('.txt-type');
      const words = JSON.parse(txtElement.getAttribute('data-words'));
      const wait = txtElement.getAttribute('data-wait');
      // Init TypeWriter
      new TypeWriter(txtElement, words, wait);
    }
    //test
  }

  render() {
    return (
      <Box className="typingEffectContainer">
        <h2>
          <span className="dummy_text">.</span>
          <span
            class="txt-type"
            data-wait="1000"
            data-words='["Productivity", "Customer Experience", "Cost on Investment"]'
          ></span>
          <span className="cursor" />
        </h2>
      </Box>
    );
  }
}

export default TypingEffectSection;
